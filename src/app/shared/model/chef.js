"use strict";
/**
 * Created by assad on 12/24/16.
 */
var Chef = (function () {
    function Chef(name, recipes, imageURL) {
        this.name = name;
        this.recipes = recipes;
        this.imageURL = imageURL;
    }
    return Chef;
}());
exports.Chef = Chef;
