/*Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!
 */

let animals: string[] = [
    "cats",
    "dogs",
    "mouse",
 ];
 
 animals.forEach(animal => {
     if(animal == "cats"){
         console.log(`${animal} are sweet`)
     }else if(animal == "dogs"){
         console.log(`${animal} are scary`)
     }else if(animal == "mouse"){
         console.log(`${animal} is tiny`)
     }
 });

 console.log("All of them are very common animals to be seen on streets.")
 
 export{}