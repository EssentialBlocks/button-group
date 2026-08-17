<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Button_Group_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        global $pagenow;

        /**
         * `str_contains()` is PHP 8.0+, so it would fatal on the PHP 7.4 end of
         * the supported range. `strpos()` is equivalent and available throughout.
         */
        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';
        $is_gutenberg_site_editor = !empty($query_string) && strpos($query_string, 'gutenberg-edit-site') !== false;

        /**
         * Only for Admin Add/Edit Pages
         */
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && $is_gutenberg_site_editor)) {

            $asset_file = BUTTONGROUP_BLOCK_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($asset_file)) {
                return;
            }

            /**
             * `include`, not `include_once`: a second `include_once` of the same
             * file returns bool `true` rather than the array, which turns into a
             * fatal `array_merge(): Argument #1 must be of type array` on PHP 8.
             */
            $controls_dependencies = include $asset_file;
            if (!is_array($controls_dependencies) || empty($controls_dependencies['dependencies']) || !is_array($controls_dependencies['dependencies'])) {
                return;
            }
            $controls_version = isset($controls_dependencies['version']) ? $controls_dependencies['version'] : BUTTONGROUP_BLOCK_VERSION;

            wp_register_script(
                "buttongroup-block-controls-util",
                BUTTONGROUP_BLOCK_ADMIN_URL . 'dist/modules.js',
                array_merge($controls_dependencies['dependencies'],['lodash']),
                $controls_version,
                true
            );

            /**
             * NOTE: `eb_wp_version` is deliberately left as a float — the shared
             * controls bundle compares it numerically (`eb_wp_version >= 5.8`).
             * Changing its type here would break that consumer. The float cast
             * is lossy for any x.10+ release ((float) '5.10' === 5.1); fixing it
             * properly requires a coordinated change in the controls submodule.
             */
            wp_localize_script('buttongroup-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('buttongroup-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('buttongroup-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            /**
             * This handle must stay plugin-specific. `dist/modules.css` is built from
             * this plugin's own `controls` submodule pin, so it differs between the
             * Essential Blocks single-block plugins. Registering it under a shared
             * name (it used to be `essential-blocks-editor-css`) meant that whichever
             * plugin loaded first won the handle outright — WP_Dependencies::add()
             * returns false for an already-registered handle — and every later
             * plugin's stylesheet and its dependencies were silently dropped.
             */
            wp_enqueue_style(
                'buttongroup-block-editor-css',
                BUTTONGROUP_BLOCK_ADMIN_URL . 'dist/modules.css',
                array(),
                $controls_version,
                'all'
            );
        }
    }

    /**
     * Registering a block by directory path is only supported from WordPress 5.8
     * onwards; earlier releases must be given the block name instead.
     *
     * The declared floor is now WP 6.0, so the name branch is unreachable in
     * practice. It is kept as a cheap guard rather than deleted.
     *
     * Uses version_compare() rather than a float cast — `(float) '5.10'` is 5.1,
     * which would silently pick the wrong branch on any x.10+ release.
     */
    public static function get_block_register_path($blockname, $blockPath)
    {
        if (version_compare(get_bloginfo('version'), '5.8', '<')) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Button_Group_Helper::register();
