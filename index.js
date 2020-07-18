const _ = require("lodash");

var foodObject = { 
    "kebab": "roll", 
    "burger": "pizza", 
    "lasagna": "pasta" 
};

var invrtdRslt = _.invert(foodObject);

console.log(invrtdRslt);