function mul(a, b) {
  return a * b;
}

const myObject = {
  name: "Nilaksh",
  age: 25,
  hello: function() {
    return `Hello ${this.name}`;
  },
  math: {
    mul,
    subtract: (a, b) => a - b
  }
};

module.exports = {
  mul,
  myObject,
};