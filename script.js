let a = Number(prompt("Enetr the first number :"));
let b = Number(prompt("Enetr the second number :"));
let c = Number(prompt("Enetr the third number :"));
function maxOfThree(a, b, c) {
  let max;
  debugger;

  if (a >= b && a >= c) {
    max = { a };
  } else if (b >= c) {
    max = { b };
  } else {
    max = { c };
  }

  return max;
}

console.log(maxOfThree(a, b, c));

solution: Q5;
let n = Number(prompt("Enetr the year to check it is leap or not :"));
if (n % 4 === 0) {
  console.log("the year is leap year :", n);
} else {
  console.log("the year is not leap year :", n);
}

function check(n) {
  if (n > 0) {
    return "number is positive";
  } else if (n < 0) {
    return "number is negative";
  } else {
    return " number is zero";
  }
}

console.log(check(9));

function totalBill(unit) {
  let bill;
  if (unit > 0 && unit <= 100) {
    bill = unit * 5;
    return bill;
  } else if (unit > 101 && unit <= 200) {
    bill = unit * 7;
    return bill;
  } else if (unit > 201 && unit <= 300) {
    bill = unit * 10;
    return bill;
  } else {
    bill = unit * 12;
    return bill;
  }
}

console.log(totalBill(1000));
