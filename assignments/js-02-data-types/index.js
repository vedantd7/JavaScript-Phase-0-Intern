// JS-02 — Data Types & Type Conversion
// Goal: identify primitive values and convert input deliberately.
//
// Requirements:
// - Create examples of string, number, boolean, undefined, and null.
// - Inspect their types with typeof.
// - Treat price and quantity as strings initially.
// - Convert them before calculating the total.
// - Explain your observations in the assignment README.
//
// Important:
// Do not remove the original string inputs just because you created converted values.


const name = "Vedant";
const age = 21;
const isStudent = true;
let city;
const selectedCourse = null;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);
console.log("City:", city, "| Type:", typeof city);
console.log("Selected Course:", selectedCourse, "| Type:", typeof selectedCourse);


const price = "500";
const quantity = "2";

console.log("Original Price:", price, "| Type:", typeof price);
console.log("Original Quantity:", quantity, "| Type:", typeof quantity);


const numericPrice = Number(price);
const numericQuantity = Number(quantity);

const total = numericPrice * numericQuantity;

console.log("Converted Price:", numericPrice, "| Type:", typeof numericPrice);
console.log("Converted Quantity:", numericQuantity, "| Type:", typeof numericQuantity);
console.log("Total Price:", total);

 