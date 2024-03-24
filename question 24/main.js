/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:*/
//• Tests for equality and inequality with strings
var str1 = "code";
var str2 = "and";
var str3 = "code";
console.log(str1 === str2); //false
console.log(str1 === str3); //true
console.log(str1 !== str2); //true
console.log(str1 !== str3); //false
//• Tests using the lower case function
var Name1 = "elsa";
var Name2 = "ELSA";
console.log(Name1 == Name2.toLowerCase()); //true
/*• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to*/
var num1 = 8;
var num2 = 5;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//• Tests using "and" and "or" operators
var numb1 = 4;
var numb2 = 2;
var logicalAnd = (numb1 > 0) && (numb2 > 0); //true
var logicalOr = (numb1 > 0) || (numb2 > 0); //true
//• Test whether an item is in a array
var list = [
    "sun",
    "moon",
    "stars",
];
var itemtoCheck = "moon";
console.log(list.includes(itemtoCheck)); //true
//• Test whether an item is not in a array
var itemtoCheck2 = "earth";
console.log(list.includes(itemtoCheck2)); //false
