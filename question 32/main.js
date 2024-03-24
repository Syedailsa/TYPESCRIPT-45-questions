"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the
new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
print a message that the person will need to enter a new username. If a username has not been used, print a message saying that
the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
Object.defineProperty(exports, "__esModule", { value: true });
var current_users = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
];
var new_users = [
    "USER01",
    "USER02",
    "user3",
    "USER04",
    "user5",
];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUsers) { return currentUsers.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " is taken select a new name."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
// new_users.forEach(newUser => {
//     if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });
// export{}
