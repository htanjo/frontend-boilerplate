/**
 * Module of application main view.
 * @module view
 * @author author.name
 */

// Indicate global objects for JSHint.
/*global define:false, Backbone:false*/

define([
    'backbone',
    'jquery',
    'handlebars',
    'models/model',
    'text!templates/template.tpl',
    'jq-dummyplugin'
], function (Backbone, $, Handlebars, Model, template) {

    // Enable Strict Mode.
    'use strict';

    /**
     * Class of application main view.
     * @class View
     * @constructor
     * @extends Backbone.View
     */
    var View = Backbone.View.extend({

            /**
             * Application model.
             * @property model
             * @type Model
             */
            model: Model,

            /**
             * Construct application main view.
             * @method initialize
             */
            initialize: function () {
                // Init model.
                this.model = new Model();

                // Init DOM elements.
                $('#dummy').dummyplugin();

                // Events.
                this.model.on('change', this.render, this);
            },

            /**
             * Compile HTML with template.
             * @method template
             * @param {Object} data
             * @return {String}
             */
            template: Handlebars.compile(template),

            /**
             * Render application view.
             * @method render
             * @chanable
             */
            render: function () {
                this.$el = $(this.template(this.model.toJSON()));
                return this;
            }

        }
    );

    return View;

});