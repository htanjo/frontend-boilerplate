/**
 * Application bootstrap.
 * @author author.name
 */

// Indicate global objects for JSHint.
/*global require:false, Backbone:false*/

require.config({
    paths: {
        // Frameworks & Libraries
        'jquery':           'libs/jquery/jquery-1.8.1',
        'underscore':       'libs/documentcloud/underscore-1.3.3',
        'backbone':         'libs/documentcloud/backbone-0.9.2',
        'handlebars':       'libs/handlebars/handlebars-1.0.0.beta.6',
        'text':             'libs/require/text',

        // Plugins
        'jq-dummyplugin':   'libs/jquery/plugins/jquery.dummyplugin',

        // Application
        'models':           'app/models',
        'collections':      'app/collections',
        'views':            'app/views',
        'routers':          'app/routers',
        'templates':        'app/templates'
    },
    shim: {
        'backbone': {
            deps:           ['underscore', 'jquery'],
            exports:        'Backbone'
        },
        'handlebars': {
            exports:        'Handlebars'
        },
        'jq-dummyplugin':   ['jquery']
    }
});

require([
    'backbone',
    'jquery',
    'routers/router'
], function (Backbone, $, Router) {

    // Enable Strict Mode.
    'use strict';

    // Initialize main router when DOM ready.
    $(function () {
        new Router();
        Backbone.history.start();
    });

});