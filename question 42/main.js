/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
var magician_name = ["John", "Amelda", "Simon"];
function show_magicians(magician_name) {
    magician_name.forEach(function (magician) {
        console.log("".concat(magician));
    });
}
function make_great(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        magician_name[i] = "The great " + magician_name[i];
    }
}
make_great(magician_name);
show_magicians(magician_name);
