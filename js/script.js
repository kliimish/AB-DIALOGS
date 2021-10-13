`use strict`;

//-------------- Variables(mainīgie)
let num = 1; 

let string =`Hello`;

let boolean = true;

let object ={};

let array1 = [];

let funkcija = function(){};



let variables = document.querySelector(`#variables`);


 let num1 =5; 

let num2 = 8;

let sum;

let car1 = `vaz`;
let car2 = `mercedes`;

let arr = [`red`, `green`, `blue`];

variables.innerHTML = ` 
<li> ${sum = num1 + num2} We are ${typeof sum} </li>
<li> ${car1} & ${car2} We are ${typeof car1} </li>
<li> ${arr[0]} <br> ${arr[1]} <br> ${arr[2]} <br> We are ${typeof arr} </li>
`; 

let johnDoe = `John Doe`;

console.log(johnDoe);


// {
//     let x = 10;
//     {
//         console.log(`${x+x} viss darbojās, mainīgais definēts ārējā blokā, so it works`);
//     }
// }

// console.log(`${x+x} es nedarbojos, jo neatrodos pareizajā blokā!`);



// ---------------- ARRAYS (MASīvi)

let array = document.querySelector(`#array`);
console.log(array);

const cars =[`volvo`,`bmw`,`audi`];

console.log(cars)
cars[0] = `Zaz`;

array.innerHTML = `<li>${cars} </li>`;


console.log(cars.length);

// Masīva pēdējo elementu iegūst length - 1

//push metode (pievieno masīvam beigās jauno vērtību)
cars.push(`gaz`);
console.log(cars);


//-------------Masīvu metodes---------------------------

//toString() pārveido simbolu rindā vienā garā (katram simbolam ir savs indekss);


// noņemt pēdējo elementu ar pop() metodi.
cars.pop();
console.log(cars);

//elementa bīdīšana shift() atbilstoši pārindeksē masīvu;

let shiftedValue = cars.shift();
console.log(cars);
console.log(shiftedValue);

