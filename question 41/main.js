/*Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
var magician_name = ["John", "Amelda", "Simon"];
function show_magicians(magician_name) {
    magician_name.forEach(function (magician) {
        console.log("".concat(magician));
    });
}
show_magicians(magician_name);
