let person = {
    name: "John",
    age: 30
};

person.city = "New York";

person.age = 31;

delete person.city;

console.log(person);
