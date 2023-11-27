const person = {
  id: 234762534,
  name: 'Default',

  getName: function () {
    return this.name;
  }
}

const liz = Object.create(person); // create object with prototype



