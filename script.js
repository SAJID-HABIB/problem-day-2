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
    bill = 100 * 5 + (units - 100) * 7;
    return bill;
  } else if (units <= 300) {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
    return bill;
  } else {
    bill = 100 * 5 + 100 * 10 + (units - 300) * 12;
    return bill;
  }
}

console.log("the total bill is :", totalBill(250));

let cahr;

// simple solution

function checkWovel(cahr = "0") {
  //convert uper case to lower case
  if ("aeiou".includes(cahr.toLocaleLowerCase()) && cahr !== "") {
    return "vowel";
  } else if (/[a-z]/.test(cahr.toLocaleLowerCase())) {
    return "consonent";
  }
  return "not a valid alphabet ";
}

console.log(checkWovel());

// soluttion using ascii code

function checkWovel(number) {
  if (
    number == 65 ||
    number == 69 ||
    number == 73 ||
    number == 79 ||
    number == 85 ||
    number == 97 ||
    number == 101 ||
    number == 105 ||
    number == 111 ||
    number == 117
  ) {
    return "vowels ";
  }
  if ((number >= 65 && number <= 90) || (number >= 97 && number <= 122)) {
    return "consonent";
  } else {
    return "invalid input";
  }
}

// method 1

console.log(checkWovel());

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "the year is leap year ";
  } else {
    return " the year is not leap year ";
  }
}

// merhod 2

function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}

console.log(leapYear(2000));

function checkUperLower(number) {
  if (number >= 48 && number <= 57) {
    return "digits";
  } else if (number >= 65 && number <= 90) {
    return "upper case latters";
  } else if (number >= 97 && number <= 122) {
    return "lower case later";
  }
  return "specila character";
}

console.log(checkUperLower(85));

// method 2

function checkCharacter(char) {
  let code = char.charCodeAt(0);
  if (char >= 48 && char <= 57) {
    return "digit";
  } else if (char >= 65 && char <= 90) {
    return "Upper case letter";
  } else if (char >= 97 && char <= 122) {
    return "Lower case letter";
  } else return "special characteAr";
}

checkCharacter(56);
