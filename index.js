const _ = require("lodash");

var foodObject = { 
    "kebab": "roll", 
    "burger": "pizza", 
    "lasagna": "pasta" 
};

var invrtRslt = _.invert(foodObject);

console.log(invrtRslt);