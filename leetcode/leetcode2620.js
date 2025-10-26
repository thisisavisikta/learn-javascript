var createCounter = function(n)  //leetcode defined, to create counters
{   //count variable is created, otherwise n would be changed. 
    let count = n;  //scope of count is within the createCounter function body
    return function()     //leetcode defined, returns the counter
    {
        return count++;   //post increment process
    };
};

/* Post increment process: 
var createCounter = function(n) 
{
    let count = n;
    return function() 
    {
        console.log("Before increment:", count);     // For debugging
        const result = count++;
        console.log("Returned:", result, "After increment:", count);
        return result;
    };
};

Working of count++ : 
const counter = createCounter(10);
counter(); // Output: Before:10, Returned:10, After:11
counter(); // Output: Before:11, Returned:11, After:12
counter(); // Output: Before:12, Returned:12, After:13
*/
