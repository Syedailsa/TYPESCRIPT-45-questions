/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function */

function make_shirt(color: string = "white", size: number = 25, print: string = "shark" ){
    console.log(`The color of the T-shirt is ${color} with ${size} size and ${print} print.`)
};
make_shirt();
make_shirt("black");
make_shirt("black", 28);
make_shirt("black", 28, "'i love coding'");