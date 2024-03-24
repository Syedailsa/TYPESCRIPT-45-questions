/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time. */

function make_sandwiches(meat: string, sauce: string, ...costumization: string[]){
    console.log(`Meat: ${meat}\nSauces: ${sauce}\nOther Details: ${costumization.join(", ")}`)
};

make_sandwiches("chicken", "no sauce", "wheat bread","extra cheese")
make_sandwiches("Beef", "teragon sauce", "cheese topping")