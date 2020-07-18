const _ = require("lodash");

const foodObject = { 
    "kebab": "roll", 
    "burger": "pizza", 
    "lasagna": "pasta" 
};

const invrtdRslt = _.invert(foodObject);

module.exports = invrtdRslt;
