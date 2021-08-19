<?php
/**
 * Plugin Name:     Button Group
 * Description:     Create Two Buttons To Be Stacked Together
 * Version:         1.1.1
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     button-group
 *
 * @package         button-group
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_dual_button_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "button-group/button-group-block" block first.'
		);
	}
	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'button-group-button-group-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
		),
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'button-group-button-group-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$fontawesome_css = 'lib/resources/css/font-awesome5.css';
	wp_register_style(
		'fontawesome-frontend-css',
		plugins_url( $fontawesome_css, __FILE__),
		array(),
		filemtime( "$dir/$fontawesome_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'button-group-button-group-block',
		plugins_url( $style_css, __FILE__ ),
		array('fontawesome-frontend-css'),
		filemtime( "$dir/$style_css" )
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/button-group' ) ) {
		register_block_type(
			'button-group/button-group',
			array (
				'editor_script' => 'button-group-button-group-block-editor',
				'editor_style'  => 'button-group-button-group-block-editor',
				'style'  		=> 'button-group-button-group-block',
			)
		);
	}
}
add_action( 'init', 'create_block_dual_button_block_init' );
