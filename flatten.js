// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`These two are the same: ${actual} vs ${expected}`)
    } else {
        console.log(`These two are not the same: ${actual} vs ${expected}`);
    }

};

const eqArrays = function(a1, a2)
{
    if(a1.length === a2.length)
    {
        for (var i = 0; i < a1.length; i ++)
        {
            if(a1[i] !== a2[i])
            {
                return false;
            }
        }
    }
    else
    {
        return false;
    }
    return true;


}
const assertArraysEqual = function(a1, a2)
{
    if(a1.length === a2.length)
    {
        for (var i = 0; i < a1.length; i ++)
        {
            if(a1[i] !== a2[i])
            {
                console.log("Not the same")
                return false;
            }
        }
    }
    else
    {
        console.log("Not the same because not the same length")
        return false;
    }
    console.log("The same")
    return true;


}
const flatten = function(a1)
{
    var flattened = [];
    for(var a = 0; a < a1.length; a ++)
    {
        if(Array.isArray(a1[a]))
        {
            console.log(a1[a] + " is an array");
            for(var b = 0; b<a1[a].length; b ++)
            {
                flattened.push(a1[a][b]);
            }
        }else{
            flattened.push(a1[a]);
        }
    }
    return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

// TEST CODE
//assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // => false
//assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);// => true)
//assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); // => false