// JS-04 — Phase 0 Checkpoint
// Goal: independently combine everything learned in Phase 0.
//
// This is intentionally less guided than the previous assignments.
// Read the requirements first, then decide how to structure your code.
//
// Requirements:
// - Display customer name and age.
// - Calculate subtotal.
// - Apply discount.
// - Calculate final amount.
// - Display payment status.
// - Calculate eligibility.
// - Do not hardcode calculated outputs.
// - Do not install external packages.
//
// Test your program with more than one set of values before submitting.


const customerName = "Rahul";
const age = 16;

const ticketPrice = 400;
const quantity = 2;
const discountPercent = 5;

const isPaid = false;
const isBanned = false;


const subtotal = ticketPrice * quantity;
const discountAmount = subtotal * discountPercent / 100;
const finalAmount = subtotal - discountAmount;


const isEligible = age >= 18 && isPaid && !isBanned;


console.log("----- Booking Summary -----");
console.log("Customer Name:", customerName);
console.log("Age:", age);
console.log("Ticket Price:", ticketPrice);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Discount:", discountAmount);
console.log("Final Amount:", finalAmount);
console.log("Payment Status:", isPaid);
console.log("Eligibility:", isEligible);
