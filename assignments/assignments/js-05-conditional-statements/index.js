// JS-05 — Conditional Statements
// Topic: if, else if, else
//
// Goal:
// Decide whether a VR Darshan customer is eligible to proceed with a booking,
// and assign an age category.
//
// Instructions:
// 1. Read the assignment document before coding.
// 2. Use if / else if / else for both decisions.
// 3. Eligibility and age category are separate decisions.
// 4. Do not hardcode the final eligibility or category.
// 5. Test at least four different combinations, including boundary ages.
//
// Do not use loops, arrays, objects, functions, or switch statements yet.

const customerName = "Rahul";
const age = 24;
const hasValidBooking = true;

let eligibility;

if (age < 18) {
    eligibility = "Not eligible under age policy";
} else if (!hasValidBooking) {
    eligibility = "Complete booking";
} else {
    eligibility = "Eligible";
}


let ageCategory;

if (age < 13) {
    ageCategory = "Child";
} else if (age < 18) {
    ageCategory = "Teenager";
} else {
    ageCategory = "Adult";
}


console.log("Customer Name:", customerName);
console.log("Age:", age);
console.log("Eligibility:", eligibility);
console.log("Age Category:", ageCategory);

