var fullname = "Hafizul islam";

var obj = {
  fullname: "Hacked full name",
  prop: {
    fullname: "inside prop",
    getFullName: function () {
      return this.fullname;
    },
  },
  getFullName: function () {
    return this.fullname;
  },
  getFullName2: () => this.fullname,
  getFullName3: (() => this.fullname)(),
};

console.log(obj.prop.getFullName()); // inside prop
console.log(obj.getFullName()); // Hacked full name
console.log(obj.getFullName2()); // undefined
console.log(obj.getFullName3); // undefined
console.log(obj.getFullName3()); // TypeError: obj.getFullName3 is not a function,so can cannot invoke function
