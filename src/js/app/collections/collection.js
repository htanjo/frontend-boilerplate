/**
 * Module of application main collection.
 * @module collection
 * @author author.name
 */

// Indicate global objects for JSHint.
/*global define:false, Backbone:false*/

define([
    'backbone',
    'models/model'
], function (Backbone, Model) {

    // Enable Strict Mode.
    'use strict';

    /**
     * Class of application main collection.
     * @class Collection
     * @constructor
     * @extends Backbone.Collection
     */
    var Collection = Backbone.Collection.extend({

        /**
         * Application model.
         * @property model
         * @type Model
         */
        model: Model,

        /**
         * Construct application main collection.
         * @method initialize
         */
        initialize: function () {
            // Initialize collection.
        }

    });

    return Collection;

});
