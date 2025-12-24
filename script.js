    let a = Number(prompt("Enetr the first number :"));
    let b = Number(prompt("Enetr the second number :"));
    let c = Number(prompt("Enetr the third number :"));
function maxOfThree(a, b, c) {
    let max;
debugger

    if (a >= b && a >= c) {
        max = {a};
    
} else if (b >= c) {
    max = {b};
    
} else {
    max = {c};
} 

return max;

}

console.log(maxOfThree(a,b,c));


// solution : Q5

let n = Number(prompt("Enetr the year to check it is leap or not :"));
if (n % 4 === 0) {
    console.log("the year is leap year :",n);
    
} else{
    console.log("the year is not leap year :",n);
    
}
