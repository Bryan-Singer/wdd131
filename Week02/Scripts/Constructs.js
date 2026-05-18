let x = 10;
let y = 5;
let z = x + y;
console.log(z == 15); // same value: true
console.log(z == "15"); // same valueand data type: false
console.log(x < y); // false

let a = true;
let b = false;
let c = a && b; // Logical AND
console.log(c); //false
let d = a || b; // Logical OR
console.log(d); //true
let e = !a; // Logical NOT
console.log(e); // false

// IF ELSE ELSE-IF
let age = 65;
if (age < 113) {
    console.log("Price: Child - you get a discount.");
} else if (age <= 64) {
    console.log("Price: Adult - you pay full price.");
} else {
    console.log("Price: Senior - you get a discount.");
}

//SWITCH Pick a certain case to run
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day.")
}

// FOR LOOP
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

//WHILE LOOP
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// FOREACH LOOP : For arrays
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
    console.log("Fruit: " + fruit);
}); // Note the ending ";" afterward

//FOR...IN LOOP
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}