<?php

function block_additions_rest_api_init(){
    
    //localhost:8080/new-shimmer/wp-json/up/v1/signup
    register_rest_route(
        'up/v1', 
        '/signup', 
        [
            'methods' => 'POST',
            'callback' => 'block_additions_rest_api_signup_handler',
            'permission_callback' => '__return_true'
        ]
    );
}