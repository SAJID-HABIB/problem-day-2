Q1.

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

Q2.

function check(n) {
    if (n > 0) {
        return 'number is positive'        
    } else if (n < 0) {
        return 'number is negative'
    } else {
        return' number is zero'        
    }
}


console.log(check(9));

Q3. 


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
}

console.log(("the total bill is :"),totalBill(230));


Q4.


function checkWovel(cahr = "0") {
  //convert uper case to lower case
  if ("aeiou".includes(cahr.toLocaleLowerCase()) && cahr !== "") {
    return "vowel";
  } else if(/[a-z]/.test(cahr.toLocaleLowerCase())) {
    return "consonent";
  }
  return "not a valid alphabet "
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

console.log(checkWovel());



Q5.



method 1

console.log(checkWovel());

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "the year is leap year ";
  } else {
    return " the year is not leap year ";
  }
}

merhod 2

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
