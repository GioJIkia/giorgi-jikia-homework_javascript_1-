//დავალება-1//
const dateOfBirth = 1996;
let currentYear = 2025;
let myAge = currentYear - dateOfBirth;
console.log(myAge);

const firstName = "Giorgi";
const lastName = "Jikia";
const fullName = firstName + " " + lastName;
console.log(fullName);

let number = 100;
let newNumber = 20;
let multiplication = number * newNumber;
let division = number / newNumber;
console.log(multiplication - division);

//დავალება - 2//
let a = 10;
let b = 5;
console.log(a == b);

let c = "20";
let d = 20;
console.log(c == d);
console.log(c === d);

let e = 50;
let f = "50";
console.log(e != f);
console.log(e !== f);

let g = 100;
let h = 200;
console.log(g <= h);
console.log(g > h);

//დავალება - 3//
let newYear = 2026;
console.log(typeof newYear);

let myName = "Giorgi";
console.log(typeof myName);

let myLastName;
console.log(typeof myLastName);

let i = 30;
let j = 40;
console.log(typeof (i < j));

//დავალება - 4//

let numberOfItems = 20;
let itemsPrice = 10;
let totalPrice = numberOfItems * itemsPrice;
let checkItemsPrice = prompt(
  "What is the price of 20 items if the cost of one item is 10?"
);
if (totalPrice == checkItemsPrice) console.log("true");
else console.log("false");

let eligibleAge = 21;
let userAge = prompt("What is your age?");
if (userAge >= eligibleAge) console.log("true");
else console.log("false")