//Object: Create a game where you start with any random game number. Ask the user to keep gussing the game number untill the user enters correct value.

let random = 56;
let gussing;


console.log("Welcome to the random game number :\n");
let userName = prompt("Guss the game number :");

while (random != userName) {


    userName = prompt("You entered wrong number. Guess again: ");
}
console.log("Congratulations, You entered the right number");