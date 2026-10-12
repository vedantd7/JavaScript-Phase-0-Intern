// JS-03 — Operators
// Goal: use arithmetic, comparison, and logical operators.
//
// Requirements:
// - Calculate subtotal.
// - Apply the discount.
// - Calculate final amount.
// - Determine eligibility from age, payment, and banned status.
//
// Important:
// The final amount and eligibility must be calculated, not hardcoded.
//
const ticketPrice = 500;
const quantity = 3;
const discountPercent = 10;

const age = 21;
const isPaid = true;
const isBanned = false;


const subtotal = ticketPrice * quantity;
const discountAmount = subtotal * discountPercent / 100;
const finalAmount = subtotal - discountAmount;

console.log("Subtotal:", subtotal);
console.log("Discount Amount:", discountAmount);
console.log("Final Amount:", finalAmount);


const isEligible = age >= 18 && isPaid && !isBanned;

console.log("Age Eligible:", age >= 18);
console.log("Payment Completed:", isPaid);
console.log("Is Banned:", isBanned);
console.log("Eligible:", isEligible);
