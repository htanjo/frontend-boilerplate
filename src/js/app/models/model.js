/**
 * Module of Application main model.
 * @module model
 * @author author.name
 */

// Indicate global objects for JSHint.
/*global define:false, Backbone:false*/

define([
    'backbone'
], function (Backbone) {

    // Enable Strict Mode.
    'use strict';

    /**
     * Class of application main model.
     * @class Model
     * @constructor
     * @extends Backbone.Model
     */
    var Model = Backbone.Model.extend({

        // Default attributes.
        defaults: {
            /**
             * Dummy attribute.
             * @property dummyAttr
             * @type String
             */
            dummyAttr: ''
        },

        /**
         * Construct application main model.
         * @method initialize
         */
        initialize: function () {
            // Initialize model.
        }

    });

    return Model;

});
