`use strict`;

let demo = document.querySelector(`#demo`);

let a = Number(prompt(`Ievadiet pirmo vērtību!`));
// console.log(a);

let b = Number(prompt(`Ievadiet otro vērtību!`));
// console.log(b);

let c = Number(prompt(`Ievadiet trešo vērtību!`));
// console.log(c);

if (Number.isNaN(b) || Number.isNaN(a) || Number.isNaN(c)) {
  alert(`Jāievada skaitlis`);
  location.reload();
} else if (a === 0) {
  alert(`Lai darbotos jāievada skaitļi, kas lielāks par 0`);
} else if (b === 0) {
  alert(`Lai darbotos jāievada skaitļi, kas lielāks par 0`);
} else if (c === 0) {
  alert(`Lai darbotos jāievada skaitļi, kas lielāks par 0`);
}

// if (a > b) {
//   demo.innerHTML = `Pirmā vērtība ${a} ir lielāka nekā otrā vērtība ${b}`;
// } else if (a < b) {
//   demo.innerHTML = `Pirmā vērtība ${a} ir mazāka nekā otrā vērtība ${b}`;
// } else {
//   demo.innerHTML = `Vērtības ir vienādas`;
// }

const skaitlis = [a, b, c];

skaitlis.sort(function (a, b) {
  return a - b;
});

demo.innerHTML = `<ul>
<li>${skaitlis[0]} </li>
<li> ${skaitlis[1]} </li>
<li> ${skaitlis[2]} </li>
</ul>`;
