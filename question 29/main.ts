/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let fruits: string[] = [
    "apple",
    "banana",
    "grapes",
    "kiwi",
];

if(fruits.includes("banana")){
    console.log("I really like banana");
}else if(fruits.includes("apple")){
    console.log("I really like apple");
}else if(fruits.includes("grapes")){
    console.log("I really like grapes");
}else if(fruits.includes("kiwi")){
    console.log("I really like kiwi");
}else if(fruits.includes("papaya")){
    console.log("I dont like papaya")
};