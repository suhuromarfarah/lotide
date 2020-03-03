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
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true)
assertEqual(eqArrays(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false