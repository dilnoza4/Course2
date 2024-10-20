function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original = { name: "Alice", details: { age: 25, city: "Wonderland" } };
const copy = deepClone(original);
console.log(copy);
