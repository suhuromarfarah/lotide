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
const middle = function(a1) {
    if(a1.length <= 2)
    {
        console.log("No middle");
        return "";
    }else if(a1.length % 2 === 0)
    {
        console.log("Middles are:");
        var middle = [a1[(a1.length)/2 -1], a1[(a1.length/2)]];
        return middle;
    
    }else
    {
        console.log("Middle is:");
        var obvsMiddle = [Math.floor((a1.length)/2) +1];
        return obvsMiddle;
    }
}
// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [])
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]) )// => [3])
console.log(middle([1, 2, 3, 4]) );// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]);
