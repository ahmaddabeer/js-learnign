console.log("lets practice some javascript qustions");
//object: Write a code which can give grades to students according to their scores
/*80-100, A
60-79, B
50-59, C
40-49, D
0-39, F
*/

let score = prompt("Enter your score:");

if (score >= 80 && score <= 100) {

    console.log("A");
} else if (score >= 60 && score <= 79) {

    console.log("B");
} else if (score >= 60 && score <= 69) {

    console.log("C");
}
else if (score >= 40 && score <= 49) {

    console.log("D");
}
else if (score >= 0 && score <= 39) {

    console.log("F");
}

