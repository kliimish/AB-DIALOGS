function main2() {
  const a_d_main2 = 1;
  const b_d_main2 = map_main2(square_main2, a_d_main2);
  const a_main2 = [1, 2, 3];
  const b_main2 = map_main2(square_main2, a_main2);
  const para1 = document.createElement("p");
  document.body.appendChild(para1);
  para1.textContent = a_main2;
  const para2 = document.createElement("p");
  document.body.appendChild(para2);
  para2.textContent = b_main2;
  function square_main2(i) {
    return i * i;
  }
  function map_main2(f_map, a_map) {
    //if (typeof a_map == Array) {
    if (Array.isArray(a_map)) {
      a_map[0] = 100;
      let result = []; // Create a new Array
      let i; // Declare variable
      for (i = 0; i != a_map.length; i++) result[i] = f_map(a_map[i]);
      return result;
    } else {
      a_map = 100;
      let result = f_map(a_map);
      return result;
    }
  }
}
function main1() {
  /*
    const factorial = function fac(n) {
    
        const para = document.createElement('p');
        document.body.appendChild(para);
        para.textContent = 'Value: ' + n;
    
        return n < 2 ? 1 : n * fac(n - 1);
    }
    */
  let n = 10;
  const para = document.createElement("p");
  document.body.appendChild(para);
  para.textContent = "Factorial of: " + n + " is " + factorial(n);
  return 0;
}
function factorial(n) {
  const para = document.createElement("p");
  document.body.appendChild(para);
  para.textContent = "Value: " + n;
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
  //return n < 2 ? 1 : n * fac(n - 1)
}

// function main2() {
//   const a_main2 = [1, 2, 3];
//   const b_main2 = map_main2(square_main2, a_main2);

//   const para = document.createElement("p");
//   document.body.appendChild(para);
//   para.innerHTML = a_main2 + "<br>" + b_main2;

//   function square_main2(i) {
//     return i * i;
//   }
//   function map_main2(f_map, a_map) {
//     a_map[0] = 100;
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a_map.length; i++) result[i] = f_map(a_map[i]);
//     return result;
//   }
// }

// function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;

// function main1() {
//   /*
//     const factorial = function fac(n) {

//         const para = document.createElement('p');
//         document.body.appendChild(para);
//         para.textContent = 'Value: ' + n;

//         return n < 2 ? 1 : n * fac(n - 1);
//     }
//     */
//   let n = 10;
//   const para = document.createElement("p");
//   document.body.appendChild(para);
//   para.style.fontSize = `40px`;
//   para.style.border = `5px solid red`;
//   para.style.position = `relative`;
//   para.style.width = `50%`;
//   para.style.left = `10%`;
//   para.textContent = "Factorial of: " + n + " is " + factorial(n);
//   return 0;
// }
// function factorial(n) {
//   const para = document.createElement("p");
//   document.body.appendChild(para);
//   para.style.backgroundColor = `yellow`;
//   para.style.fontSize = `28px`;
//   para.style.width = `50%`;
//   para.style.position = `relative`;
//   para.style.left = `10%`;
//   para.textContent = "Value: " + n;
//   if (n < 2) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
//   //return n < 2 ? 1 : n * fac(n - 1)
// }
