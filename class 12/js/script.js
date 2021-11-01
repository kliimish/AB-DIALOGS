`use strict`;

// let day = ``;
// let dayg = "";

// switch (new Date().getDay() + 10) {
//   case 0:
//   case 6:
//     day = "Weekend";
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     day = `Working day`;

//   default:
//     dayg = `Error!`;
// }

// document.querySelector(`#demo`).innerHTML = `Today is ${day}`;
// let demo = document.querySelector(`#demo`);
// let day = `Friday`;
// let weekend = [`Sunday`, `Saturday`];
// let almostWeekend = [`Thursday`, `Friday`];

// if (day === weekend[0] || day === weekend[1]) {
//   demo.style.backgroundColor = `green`;
//   demo.innerHTML = `Its weekend dudes!`;
// } else if (day === almostWeekend[0] || day === almostWeekend[1]) {
//   demo.style.backgroundColor = `yellow`;
//   demo.innerHTML = `Almost weekend!`;
// } else {
//   demo.style.backgroundColor = `red`;
//   demo.innerHTML = `Shut up and keep working`;
// }
// let one = prompt(`Ievadiet operatoru!`);
// let val1 = Number(prompt(`Ievadi pirmo vērtību!`));
// if (val1 === isNan) {
//   alert(`ERRRRORRRRRR`);
// }
// let val2 = Number(prompt(`Ievadi otro vērtību! `));
// let result;
// switch (one) {
//   case `+`:
//     alert(val1 + val2);
//     break;

//   case `/`:
//     alert(val1 / val2);
//     break;

//   case `-`:
//     alert(val1 - val2);
//     break;

//   case `%`:
//     alert(val1 % val2);
//     break;

//   case `*`:
//     alert(val1 * val2);
//     break;

//   default:
//     error = `You suck at following asked questions `;
// }
let demo = document.querySelector(`#demo`);
let fruits = [`banana`, `strawberry`, `peach`];

let fruit = document.querySelector(`#fruit`);

function addToBack() {
  fruits.push(fruit.value);
  demo.innerHTML = `${fruits}`;
}

function add() {
  fruits.unshift(fruit.value);
  demo.innerHTML = `${fruits}`;
}
