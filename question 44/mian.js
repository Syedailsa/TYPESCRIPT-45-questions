/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time. */
function make_sandwiches(meat, sauce) {
    var costumization = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        costumization[_i - 2] = arguments[_i];
    }
    console.log("Meat: ".concat(meat, "\nSauces: ").concat(sauce, "\nOther Details: ").concat(costumization.join(", ")));
}
;
make_sandwiches("chicken", "no sauce", "wheat bread", "extra cheese");
make_sandwiches("Beef", "teragon sauce", "cheese topping");
