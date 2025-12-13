function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));

const fullName = "Alice"; // Select userName, press F2, rename to "fullName"
console.log(fullName); // All occurrences update!

const fullName2 = "Alice";
console.log(fullName2);
const greeting = `Hello ${fullName2}`;

const price = 100;
const tax = price * 0.1;
const total = price + tax;
console.log(total);

console.log(":");
