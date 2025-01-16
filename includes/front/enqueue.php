<?php

function up_enqueue_scripts(){
    $authURLS = json_encode([
        'signup' => esc_url_raw(rest_url('up/v1/signup'))
    ]);

    wp_add_inline_script(
        'block-additions-auth-modal-view-script', //remove js at end
        "const up_auth_rest = {$authURLS}",
        'before'
    );
}