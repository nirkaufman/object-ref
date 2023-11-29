const name = "nir kaufman";
const age = 35;






class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    return this.name;
  }
}

const nir = new Person('Nir');

nir.sayName(); // Nir
