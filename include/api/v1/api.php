<?php

class TKR_REST_API extends WP_REST_Controller {
    public function __construct() {
        $this->namespace = '/tkr/v1';
    }

    public function register_api() {
        $controllers = ['Menus'];

        foreach ($controllers as $namespace) {
            require_once "controllers/{$namespace}Controller.php";

            $controller_class = "TKR_REST_{$namespace}_Controller";
            $controller = new $controller_class();
            $controller->register_routes();
        }
    }

    public function tkr_api_debug( $request ) {
        $request_log = array();
        $request_log['method'] = $request->get_method();
        $request_log['headers'] = $request->get_headers();
        $request_log['content_type'] = $request->get_content_type();
        $request_log['params'] = $request->get_params();
        $request_log['url_params'] = $request->get_url_params();
        $request_log['query_params'] = $request->get_query_params();
        $request_log['body_params'] = $request->get_body_params();
        $request_log['file_params'] = $request->get_file_params();
        $request_log['body'] = $request->get_body();
        $request_log['json_params'] = $request->get_json_params();
        $request_log['route'] = $request->get_route();
        $request_log['attributes'] = $request->get_attributes();

        return $request_log;
    }
}

add_action('rest_api_init', function() {
    $tkr_api = new TKR_REST_API();
    $tkr_api->register_api();
});
