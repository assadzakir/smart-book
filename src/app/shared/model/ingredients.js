"use strict";
var Ingredients = (function () {
    function Ingredients(name, quantity, type) {
        this.name = name;
        this.quantity = quantity;
        this.type = type;
    }
    return Ingredients;
}());
exports.Ingredients = Ingredients;
