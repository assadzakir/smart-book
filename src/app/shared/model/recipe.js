"use strict";
var Recipe = (function () {
    function Recipe(imageURL, ingridients, name, originalURL, steps, timers) {
        this.imageURL = imageURL;
        this.ingridients = ingridients;
        this.name = name;
        this.originalURL = originalURL;
        this.steps = steps;
        this.timers = timers;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
