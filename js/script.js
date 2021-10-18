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

// let array = document.querySelector(`#array`);
console.log(array);

const cars =[`Volvo`,`Bmw`,`Audi`];

console.log(cars)
cars[0] = `Zaz`;

// array.innerHTML = `<li>${cars} </li>`;


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

// let shiftedValue = cars.shift();
// console.log(cars);
// console.log(shiftedValue);
const motocikli =[`Java`,`Kawasaki`,`Honda`]
//elementy vērtību izgriešana un pievienošana splice()

// let slpicedValue = cars.splice(1,2, `Vw`,`Dacia`);
// console.log(cars);
// console.log(`Izgrieztais rādījums ${typeof slpicedValue}`);
// console.log(slpicedValue);
// slpicedValue[0] = `Tanks`;
// console.log(`jaunā vērtība \n ${slpicedValue}`);
// //----- Pievienojot masīvū, masīvā;
// cars.splice(2,0, motocikli); //splice(kur sākt, kur izgriezt, [ko ievietot]);
// console.log(cars);


//masīcu apvienošana (izveido jaunu masīvu) concat();
const transports = cars.concat(motocikli);

console.log(transports);
console.log(transports.length);

let html = function(arr){
    let text = "<div>";
    arr.forEach(myFunction);
    text += "</div>";
    document.getElementById("array").innerHTML = text;
    
    function myFunction(value) {
      text += "<h2>" + value + "</h2>";
    } 
}


//slice() kopē no pozīcijas, kura norādīta, kā arguments vai parametrs slice(no kura indeksa, LĪDZ noteiktajam indeksam(NEIESKAITOT));

let sliced_tp = transports.slice(0,3);
html(sliced_tp);

//Masīvā kārtošana sort() Tiek kārtots masīvs pārkārtots no jauna alfabētiskā secībā

transports.sort();
html(transports);

//pārkārto masīvu otrādi  reverse()
transports.reverse();
html(transports);

transports.sort().reverse();
html(transports)//dilstošā secībā

const math = [40,100,1,5,25,10];

math.sort(function(a,b){
    return a-b;
});

const math2 = math;

math2.sort(function(a,b){
    return a-b;
});

console.log(math2)
// min max values
console.log(math2[0])
console.log(math2[math2.length -1])
