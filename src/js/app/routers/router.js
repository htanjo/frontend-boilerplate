/**
 * Module of application main router.
 * @module router
 * @author author.name
 */

// Indicate global objects for JSHint.
/*global define:false, Backbone:false*/

define([
    'backbone',
    'jquery',
    'models/model',
    'collections/collection',
    'views/view'
], function (Backbone, $, Model, Collection, View) {

    // Enable Strict Mode.
    'use strict';

    /**
     * Class of application main router.
     * @class Router
     * @constructor
     * @extends Backbone.Router
     */
    var Router = Backbone.Router.extend({

        // Routing.
        routes: {
            '': 'home',
            '!/': 'home',
            '!/example?:id': 'example'
        },

        /**
         * Application main model.
         * @property
         * @type Model
         */
        model: Model,

        /**
         * Application main collection.
         * @property
         * @type Collection
         */
        collection: Collection,

        /**
         * Application main view.
         * @property
         * @type View
         */
        view: View,

        /**
         * Construct application main router.
         * @method initialize
         */
        initialize: function () {
            // Start application.
            this.model = new Model();
            this.collection = new Collection({
                model: this.model
            });
            this.view = new View({
                el: $('body'),
                model: this.model
            });
        },

        /**
         * Home page.
         * @method home
         */
        home: function () {
            // Set up home page.
        },

        /**
         * Example page.
         * @method example
         * @param {String} id
         */
        example: function (id) {
            // Set up example page.
        }

    });

    return Router;

});
