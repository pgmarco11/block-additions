<?php

function show_manager_register() {

	//create blocks
	$blocks = [
		[ 'name' => 'fancy-header' ],
		[ 'name' => 'search-form', 'options' => [
			'render_callback' => 'up_search_form_render_cb'
		]],
		['name' => 'page-header', 'options' => [
			'render_callback' => 'up_page_header_render_cb'
		]]
	];

	foreach($blocks as $block){		

		register_block_type(
			UP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
			isset($block['options']) ? $block['options'] : []
		);	

	}
	
	//create custom post types
	$labels = array(
		'label'	=> __('Shows &amp; Events'),
		'singular_label' => __('Shows &amp; Events'),
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => true,
		'has_archive' => true,
		'supports' => array('title', 'editor', 'thumbnail'),
		'rewrite' => array('slug' => 'shows', 'with_front' => true),	
	);

	
	//Register type and custom taxonomy for post type
	register_post_type('shows', $labels );

		$args = array(
		'hierarchical'          => true,
		'labels'                => 'Show Types',
		'singular_label'		=> 'Show Type',
		'query_var'             => true,
		'rewrite'               => true,
		'slug' 					=> 'show-type',
		'register_meta_box_cb'  => 'show_manager_add_meta',
	);

	register_taxonomy( 'show-type', 'shows', $args );
}

?>