// function getName(greeting) {
//   console.log(`${greeting} ${this.name}`);
// }
// const obj = {
//   name: "Hafiz",
// };
// const obj2 = {
//   name: "Hafiz -2",
// };

// getName.call(obj, "Good Morning");
// getName.apply(obj, ["Good Night"]);

// const myName = getName.bind(obj2, "Good Morning - 2");
// myName();

// const myName2 = getName.bind(obj2);
// myName2("Good Morning - 2-2");

// ********************************************

// const hamdan = {
//   name: "Hamdan",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// const nusayeb = {
//   name: "Nusayeb",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// nusayeb.getName.call(hamdan);

// **************************************
// const mony = {
//   name: "Mony",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(mony.getName, 3000); // undefined

// setTimeout(mony.getName.bind(mony), 3000); // Mony
// setTimeout(() => mony.getName(), 3000); // Mony
// setTimeout(() => mony.getName.bind(mony)(), 3000); // Mony

// ---------------------------------

const obj = { height: 30 };
console.log(obj.height) //30
delete obj.height
console.log(obj.height) //8ndefined
