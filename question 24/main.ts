/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
write more tests. Have at least one True and one False result for each of the following:*/

//• Tests for equality and inequality with strings

let str1: string = "code";
let str2: string = "and";
let str3: string = "code";
console.log(str1 === str2) //false
console.log(str1 === str3) //true
console.log(str1 !== str2) //true
console.log(str1 !== str3) //false

//• Tests using the lower case function

let Name1: string = "elsa";
let Name2: string = "ELSA";
console.log(Name1 == Name2.toLowerCase()); //true


/*• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to*/

let num1: number = 8;
let num2: number = 5;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false


//• Tests using "and" and "or" operators

let numb1: number = 4;
let numb2: number = 2;
let logicalAnd = (numb1 > 0) && (numb2 > 0); //true
let logicalOr = (numb1 > 0) || (numb2 > 0); //true

//• Test whether an item is in a array

let list: string[] = [
    "sun",
    "moon",
    "stars",
];

let itemtoCheck: string = "moon";
console.log(list.includes(itemtoCheck)); //true

//• Test whether an item is not in a array

let itemtoCheck2: string = "earth";
console.log(list.includes(itemtoCheck2)); //false