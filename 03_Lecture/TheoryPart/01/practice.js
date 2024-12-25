//lets practice 

//Object: print all even number form 0 to 100 .

let sum = 0;
for (let i = 0; i <= 100; i++) {

    if (i % 2 === 0) {

        console.log(i)

        sum++;
    }
}
console.log(">> And sum of all 0 to 100 even number is = ", sum);