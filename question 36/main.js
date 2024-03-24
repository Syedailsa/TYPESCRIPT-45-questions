/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function */
function make_shirt(color, size, print) {
    if (color === void 0) { color = "white"; }
    if (size === void 0) { size = 25; }
    if (print === void 0) { print = "shark"; }
    console.log("The color of the T-shirt is ".concat(color, " with ").concat(size, " size and ").concat(print, " print."));
}
;
make_shirt();
make_shirt("black");
make_shirt("black", 28);
make_shirt("black", 28, "'i love coding'");
