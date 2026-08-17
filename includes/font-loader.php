<?php
/**
 * Load google fonts.
 *
 * Fonts are derived from the block's own typography attributes at render time.
 *
 * The previous implementation read a `_eb_attr` post meta that the v1 typography
 * picker used to write (controls/src/controls/typography-control/FontPicker.js).
 * This plugin ships the v2 picker -- controls/src/index.js exports
 * `TypographyDropdown` from typography-control-v2, whose font picker only calls
 * `onChange( selectedFont )` and never touches post meta -- so `_eb_attr` was
 * always empty, `$gfonts` was always empty and no font stylesheet was ever
 * enqueued on the frontend. The editor kept working because it loads fonts
 * separately through `WebFont.load()` from the live attributes, in
 * controls/src/group-controls/index.js.
 *
 * Reading the attributes instead means published posts are fixed without being
 * re-saved, since the attributes are already stored in the post content, and it
 * drops the dependency on the global `$post`, which is null or points at the
 * wrong object on archives, FSE templates and widget areas.
 *
 * @package button-group
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'Button_Group_Font_Loader' ) ) {
    class Button_Group_Font_Loader
    {

        /**
         * Style handle for the combined Google Fonts request.
         */
        const HANDLE = 'eb-block-fonts';

        /**
         * Collected fonts for this request, keyed by family name.
         *
         * @var array<string, array{weights: string[], italic: bool}>
         */
        private static $fonts = array();

        /**
         * Google Fonts catalog: family name => variants that family actually ships.
         *
         * @var array<string, string>|null Null until the catalog file has been read.
         */
        private static $catalog = null;

        /**
         * Locally available families that must never be requested from Google.
         */
        private static $system = array(
            'Arial',
            'Tahoma',
            'Verdana',
            'Helvetica',
            'Times New Roman',
            'Trebuchet MS',
            'Georgia',
        );

        /**
         * Collect the Google fonts used by one rendered block and enqueue them.
         *
         * Called from the block's render_callback, so it only ever runs for blocks
         * that are actually on the page -- no post meta and no content parsing.
         *
         * @param array $attributes Block attributes.
         */
        public static function enqueue_for_attributes( $attributes )
        {
            if ( ! is_array( $attributes ) || empty( $attributes ) ) {
                return;
            }

            $changed = false;

            foreach ( $attributes as $key => $value ) {
                // Mirrors the editor's own /^(\w+)FontFamily/ match in the controls
                // package, so both sides pick up exactly the same attributes.
                if ( ! is_string( $key ) || ! preg_match( '/^(.+)FontFamily$/', $key, $matches ) ) {
                    continue;
                }
                if ( ! is_string( $value ) ) {
                    continue;
                }

                $family = self::normalize_family( $value );
                if ( '' === $family || 'Default' === $family ) {
                    continue;
                }
                if ( in_array( $family, self::$system, true ) ) {
                    continue;
                }

                $prefix = $matches[1];

                if ( ! isset( self::$fonts[ $family ] ) ) {
                    self::$fonts[ $family ] = array(
                        'weights' => array(),
                        'italic'  => false,
                    );
                    $changed = true;
                }

                $weight = isset( $attributes[ $prefix . 'FontWeight' ] ) && is_scalar( $attributes[ $prefix . 'FontWeight' ] )
                    ? (string) $attributes[ $prefix . 'FontWeight' ]
                    : '';

                // The control only ever emits 100-900 in hundreds; ignore anything else
                // so a stray value cannot produce a variant Google will reject.
                if ( preg_match( '/^[1-9]00$/', $weight )
                    && ! in_array( $weight, self::$fonts[ $family ]['weights'], true ) ) {
                    self::$fonts[ $family ]['weights'][] = $weight;
                    $changed = true;
                }

                $style = isset( $attributes[ $prefix . 'FontStyle' ] ) && is_scalar( $attributes[ $prefix . 'FontStyle' ] )
                    ? (string) $attributes[ $prefix . 'FontStyle' ]
                    : '';

                if ( 'italic' === $style && ! self::$fonts[ $family ]['italic'] ) {
                    self::$fonts[ $family ]['italic'] = true;
                    $changed = true;
                }
            }

            if ( $changed ) {
                self::enqueue();
            }
        }

        /**
         * Read the bundled family => variants catalog once per request.
         *
         * @return array<string, string> Empty when the catalog file is missing.
         */
        private static function catalog()
        {
            if ( null !== self::$catalog ) {
                return self::$catalog;
            }

            self::$catalog = array();

            $file = __DIR__ . '/google-fonts-variants.php';
            if ( is_readable( $file ) ) {
                // `include`, not `include_once`: a repeat `include_once` returns bool
                // `true` rather than the array. The static above already guarantees
                // this runs at most once per request.
                $catalog = include $file;
                if ( is_array( $catalog ) ) {
                    self::$catalog = $catalog;
                }
            }

            return self::$catalog;
        }

        /**
         * Clean up a stored font family value and resolve it to a catalog family.
         *
         * @param string $family Raw attribute value.
         * @return string Normalised family name, empty when there is nothing to load.
         */
        private static function normalize_family( $family )
        {
            $family = trim( preg_replace( '/\s+/', ' ', (string) $family ) );
            if ( '' === $family ) {
                return '';
            }

            $catalog = self::catalog();
            if ( isset( $catalog[ $family ] ) || false === strpos( $family, '-' ) ) {
                return $family;
            }

            // Older content can hold the picker's slug form ("ADLaM-Display") instead of
            // the family name. No family in the catalog contains a hyphen, so swapping
            // hyphens for spaces cannot collide with a real name.
            $spaced = str_replace( '-', ' ', $family );

            return isset( $catalog[ $spaced ] ) ? $spaced : $family;
        }

        /**
         * Variants a family actually ships.
         *
         * @param string $family Family name.
         * @return string[]|null Null when the family is not in the bundled catalog.
         */
        private static function supported_variants( $family )
        {
            $catalog = self::catalog();

            if ( ! isset( $catalog[ $family ] ) || ! is_string( $catalog[ $family ] ) || '' === $catalog[ $family ] ) {
                return null;
            }

            return explode( ',', $catalog[ $family ] );
        }

        /**
         * Work out the variant list to request for one collected family.
         *
         * @param string $family Family name.
         * @param array  $data   Collected weights and italic flag.
         * @return string[] Variants, never empty for a family in the catalog.
         */
        private static function build_variants( $family, $data )
        {
            $supported = self::supported_variants( $family );
            $weights   = $data['weights'];

            if ( null === $supported ) {
                // Not in the bundled catalog: a Google release newer than the snapshot, or
                // a hand-edited attribute. Anchor on 400, which every family that ships a
                // regular face accepts. A family Google does not recognise is dropped from
                // a combined request rather than failing it, so this cannot take the other
                // families down with it.
                if ( ! in_array( '400', $weights, true ) ) {
                    $weights[] = '400';
                }

                sort( $weights, SORT_STRING );

                $variants = $weights;
                if ( $data['italic'] ) {
                    foreach ( $weights as $weight ) {
                        $variants[] = $weight . 'italic';
                    }
                }

                return $variants;
            }

            // Only ever ask for variants the family actually ships. Asking for a weight a
            // family does not have makes the v1 API answer 400 Bad Request when that
            // family is alone in the request -- `?family=ADLaM+Display:700` is the case
            // that started this -- and silently drops the family from a combined request.
            $weights = array_values( array_intersect( $weights, $supported ) );

            // Always keep the regular face. A typography prefix with no explicit
            // FontWeight emits no font-weight rule at all, so the browser renders it at
            // 400 and needs that face present.
            if ( in_array( '400', $supported, true ) && ! in_array( '400', $weights, true ) ) {
                $weights[] = '400';
            }

            // A handful of families ship no regular face at all (Buda, Sunflower,
            // UnifrakturCook). Anchor those on the lightest weight they do ship, because
            // an empty variant list -- `?family=Buda` -- is itself a 400 from the API.
            if ( empty( $weights ) ) {
                $numeric = array_values(
                    array_filter(
                        $supported,
                        function ( $variant ) {
                            return (bool) preg_match( '/^[1-9]00$/', $variant );
                        }
                    )
                );
                if ( ! empty( $numeric ) ) {
                    sort( $numeric, SORT_STRING );
                    $weights[] = $numeric[0];
                }
            }

            // Sort so the same set of fonts always produces the same URL, which keeps it
            // cacheable and avoids duplicate requests across renders.
            sort( $weights, SORT_STRING );

            $variants = $weights;

            if ( $data['italic'] ) {
                foreach ( $weights as $weight ) {
                    if ( in_array( $weight . 'italic', $supported, true ) ) {
                        $variants[] = $weight . 'italic';
                    }
                }
            }

            if ( empty( $variants ) ) {
                // Italic-only families such as Molle: `?family=Molle` is a 400 from the API
                // while `?family=Molle:400italic` is fine, so fall back to what it ships.
                $variants = $supported;
            }

            return $variants;
        }

        /**
         * Build the combined Google Fonts URL for everything collected so far.
         *
         * @return string Empty string when there is nothing to request.
         */
        private static function build_url()
        {
            $families = array();

            foreach ( self::$fonts as $family => $data ) {
                $variants = self::build_variants( $family, $data );
                if ( empty( $variants ) ) {
                    continue;
                }

                $families[] = str_replace( ' ', '+', $family ) . ':' . implode( ',', $variants );
            }

            if ( empty( $families ) ) {
                return '';
            }

            // `|`, `:` and `,` all survive esc_url(); its allowlist permits them.
            return '//fonts.googleapis.com/css?family=' . implode( '|', $families ) . '&display=swap';
        }

        /**
         * Register and enqueue the combined stylesheet.
         *
         * Re-registers on each change so that a second block on the same page extends
         * the single existing request rather than adding another stylesheet.
         */
        private static function enqueue()
        {
            $url = self::build_url();
            if ( '' === $url ) {
                return;
            }

            if ( wp_style_is( self::HANDLE, 'registered' ) ) {
                wp_deregister_style( self::HANDLE );
            }

            // null version: Google rejects nothing, but an appended ?ver= is noise.
            wp_register_style( self::HANDLE, $url, array(), null );
            wp_enqueue_style( self::HANDLE );
        }
    }
}
