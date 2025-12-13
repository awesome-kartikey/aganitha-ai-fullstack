function getLength(text: string): number {
  return text.length;
}

let age: number = 25; // Initial age
console.log(age + 10);

const user: { name: string; age?: number } = { name: "Alice" };
console.log(user.age ?? 0);

console.log(getLength("Hello"));
