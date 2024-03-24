/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name.*/
var names = [
    "John",
    "Bella",
    "Eliza",
];
names.forEach(function (name_friends) {
    console.log("".concat(name_friends, " is my best friend."));
});
