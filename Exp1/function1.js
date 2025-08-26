function add(a, b) {
  return a + b;
}

const myObject = {
  name: "Nilak",
  age: 25,
  greet: function() {
    return `Hello, ${this.name}!`;
  },
  math: {
    add,
    subtract: (a, b) => a - b
  }
};

module.exports = {
  add,
  myObject
};