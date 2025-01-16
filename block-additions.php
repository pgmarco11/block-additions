<?php

/*

Plugin Name: Block Additions
description: A plugin that adds Additional blocks to Gutenberg
Version: 1
Author: Peter Giammarco

*/

if ( ! defined( 'ABSPATH' ) ) {
	die();	
}

// Setup 
define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));

//includes all php files in includes
$rootFiles = glob(UP_PLUGIN_DIR . 'includes/*.php');

$subDirFiles = glob(UP_PLUGIN_DIR . 'includes/**/*.php');

$allFiles = array_merge($rootFiles, $subDirFiles);

foreach($allFiles as $filename){
	include_once($filename);
}

// Hooks
add_action('init', 'block_additions_register');

add_action('rest_api_init', 'block_additions_rest_api_init');

add_action('wp_enqueue_scripts', 'up_enqueue_scripts');


	
?>