// const eqArrays = require("../eqArrays");
// const assertArraysEqual = require("../assertArraysEqual");
// const middle = require("../middle");

// // TEST CODE

// // assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
// // assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => false

// // assertArraysEqual(["1", "2", "3"], ["1", "2", "3"],true); // => true
// // assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false


// // For arrays with one or two elements
// assertArraysEqual(middle([1]), [1], []) // => []
// assertArraysEqual(middle([1, 2]), [1,2], []) // => []

// // For arrays with odd number of elements
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

// // For arrays with even number of elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])


const eqArrays = require("../eqArrays");
const assert = require('chai').assert 
const middle = require("../middle");

describe("#middle", () => {
    it("returns middle", () => {
        assert.deepEqual(middle([1,2,3]), [2]);
    })
});