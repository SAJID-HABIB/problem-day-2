let a = Number(prompt("Enetr the first number :"));
let b = Number(prompt("Enetr the second number :"));
let c = Number(prompt("Enetr the third number :"));
function maxOfThree(a, b, c) {
  let max;
  debugger;

  if (a >= b || a >= c) {
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

function totalBill(units) {
  let bill;
  if (units <= 100) {
    bill = units * 5;
    return bill;
  } else if (units <= 200) {
    bill = (100 * 5) + (units -100) * 7;
    return bill;
  } else if (units <= 300) {
    bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
    return bill;
  } else {
    bill = (100 * 5) + (100 * 10) + (units - 300) * 12;
    return bill;

}

console.log(("the total bill is :"),totalBill(250));

let cahr;



function checkWovel(cahr) {
  //convert uper case to lower case 
  const cahrLowerCase = cahr.toLowerCase();
  if (
    cahrLowerCase === "a" ||
    cahrLowerCase === "e" ||
    cahrLowerCase === "i" ||
    cahrLowerCase === "o" ||
    cahrLowerCase === "u"
  ) {
    return "vowel";
  } else {
    return "consonent";
  }
}

console.log(checkWovel("A"));
