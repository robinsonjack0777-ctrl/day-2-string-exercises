// =============================================
// DAY 2 EXERCISES - FULL SOLUTIONS
// =============================================

// Sample data (you can change these values)
const dealerName = "  John Doe Groceries  ";
const location = "Kacyiru";
const product = "Irish Potatoes";
const quantity = 150;
const pricePerKg = 450;
const dealerCode = "DL-KCY-001";
const rawInput = "  john doe groceries , kacyiru, irish potatoes, 150kg  ";

// ──────────────────────────────────────────────
// 1. STRING CONCATENATION CHALLENGE
// ──────────────────────────────────────────────
const message1 = "Dealer: " + dealerName.trim() + 
                " | Location: " + location + 
                " | Product: " + product + 
                " | Qty: " + quantity + "kg";

console.log("Exercise 1:", message1);
// Output → Dealer: John Doe Groceries | Location: Kacyiru | Product: Irish Potatoes | Qty: 150kg

// ──────────────────────────────────────────────
// 2. TEMPLATE LITERAL PRACTICE (cleaner version)
// ──────────────────────────────────────────────
const message2 = `Dealer: ${dealerName.trim()}
Location: ${location}
Product: ${product}
Quantity: ${quantity}kg
Total Value: ${quantity * pricePerKg} RWF`;

console.log("Exercise 2:\n" + message2);
/* Output →
Dealer: John Doe Groceries
Location: Kacyiru
Product: Irish Potatoes
Quantity: 150kg
Total Value: 67500 RWF
*/

// ──────────────────────────────────────────────
// 3. TYPE CHECKING AND CONVERSION
// ──────────────────────────────────────────────
console.log("Exercise 3:");

console.log(typeof "hello");         // "string"
console.log(typeof 123);             // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"

const strNum = "2025";
console.log(Number(strNum));         // 2025 (number)
console.log(String(2025));           // "2025" (string)
console.log(Boolean(""));            // false (empty string is falsy)
console.log(Boolean("hello"));       // true
console.log(Boolean(0));             // false
console.log(Boolean(-5));            // true

// ──────────────────────────────────────────────
// 4. STRING METHOD CHALLENGE
// ──────────────────────────────────────────────
const sample = "  Welcome to Karibu Groceries!  ";

console.log("Exercise 4:");

console.log(sample.trim()); 
// → "Welcome to Karibu Groceries!"

console.log(sample.trim().toUpperCase()); 
// → "WELCOME TO KARIBU GROCERIES!"

console.log(sample.trim().toLowerCase()); 
// → "welcome to karibu groceries!"

console.log("Nairobi,Kigali,Kampala".split(",")); 
// → ["Nairobi", "Kigali", "Kampala"]

console.log("Irish Potatoes".includes("Potato")); 
// → true

console.log("Maize Flour".replace("Flour", "Beans")); 
// → "Maize Beans"

console.log("   hello   world   ".trim().replace(/\s+/g, " ")); 
// → "hello world"

// ──────────────────────────────────────────────
// 5. KGL DATA FORMATTING TASK (Real-world example)
// ──────────────────────────────────────────────
console.log("Exercise 5 - Clean & format raw dealer input:");

const cleaned = rawInput
  .trim()                          // remove leading/trailing spaces
  .toLowerCase()                   // normalize case
  .replace(/\s+/g, " ")            // collapse multiple spaces
  .split(",")                      // split into array
  .map(part => part.trim());       // trim each part

const [rawDealer, rawLoc, rawProduct, rawQty] = cleaned;

const formattedDealer = rawDealer
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");                      // Title Case → "John Doe Groceries"

const formattedLocation = rawLocs
  .toUpperCase();                  // → "KACYIRU"

const formattedProduct = rawProduct
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");                      // → "Irish Potatoes"

const quantityNum = Number(rawQty.replace("kg", "")); // → 150

const formattedRecord = {
  dealerCode: dealerCode,
  dealerName: formattedDealer,
  location: formattedLocation,
  product: formattedProduct,
  quantityKg: quantityNum,
  unitPrice: pricePerKg,
  totalValue: quantityNum * pricePerKg,
  recordedAt: new Date().toISOString()
};

console.log("Final formatted object ready for database:");
console.log(formattedRecord);

/* Output example:
{
  dealerCode: "DL-KCY-001",
  dealerName: "John Doe Groceries",
  location: "KACYIRU",
  product: "Irish Potatoes",
  quantityKg: 150,
  unitPrice: 450,
  totalValue: 67500,
  recordedAt: "2025-12-02T..."
}
*/