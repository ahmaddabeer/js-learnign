// We are learning about loops in JavaScript
// Loops are used to execute a block of code a number of times (or again and again)

// Syntax of the for loop:

for (let i = 0; i < 10; i++) {
    console.log("Hello Dabeer, welcome to your B.Tech journey!");
}

console.log("End of for loop");

console.log(" -------------------------------------------------------------------------- ");

// while loop

let i = 0; // Declare i before using in the while loop

while (i < 10) {
    console.log("Hello Dabeer, welcome to your B.Tech journey!");
    i++;
}

console.log(" ----------------------------------------------------------- ");

// do-while loop

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 5);

console.log("----------------------------------------------------------------  ");

console.log("2 more loops 1) for-of loop and 2) for-in loop");

//lets take and example of for of loop

let str = "Dabeer ahmad ";
let size = 0;
for (let i of str) {// yaha i is a iterator
    console.log("i= ", i);
    size++;
}
console.log("Size of string is: ", size);


// let take and exaple of in loop

console.log(" ---------------------------------------------------------------------------");

let student = {
    name: "rahul kumar",
    age: 20,
    cpga: 9.5,
    rollNo: 89,
    pass: true
}

for (let i in student) {

    console.log(i);
}

console.log("-----------------------------------------------------");

//ab key ke sath uski value bhi print karane ki koshis kare gay

//for in loop 

let student2 = {

    name : "ajay",
    age:40,
    rollno:3343,
    isPass:false
};

for(let key in student2)
{

    console.log("key=", key, "value==", student2[key]);//yaha key ke murad i ha yani itrater
}


