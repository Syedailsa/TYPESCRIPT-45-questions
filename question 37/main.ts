/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.*/

function make_shirt(color: string = "white", size: string = "L", print: string = "I love Typescript" ){
    console.log(`The color of the T-shirt is ${color} with ${size} size and ${print} print.`)
};
make_shirt();
make_shirt("black");
make_shirt("black", "M");
make_shirt("black", "S", "'i love coding'");