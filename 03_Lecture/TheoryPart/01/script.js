// We are learning about loops in JavaScript
// Loops are used to execute a block of code a number of times (or again and again)

// Syntax of the for loop:

for (let i = 0; i < 10; i++) {
    console.log("Hello Dabeer, welcome to your B.Tech journey!");
}

console.log("End of for loop");

console.log("  ");

// while loop

let i = 0; // Declare i before using in the while loop

while (i < 100) {
    console.log("Hello Dabeer, welcome to your B.Tech journey!");
    i++;
}

console.log("  ");

// do-while loop

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 5);

console.log("  ");

console.log("2 more loops 1) for-of loop and 2) for-in loop");

//lets take and example of for of loop

let str = "ApnaCollege ";
let size=0;
for(let i of str){// yaha i is a iterator
    console.log("i= ", i);
    size++;
}
console.log("Size of string is: ", size);

