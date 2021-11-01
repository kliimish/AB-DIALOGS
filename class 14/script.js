const poga = document.querySelectorAll(`button`);

for (let i = 0; i < poga.length; i++) {
  poga[i].addEventListener(`click`, function () {
    alert(`Hello From ${i} index Of button :)`);
    console.log(poga[i]);
  });
}

const myGreeting = function () {
  alert(`hello from function`);
};

function myGreetings() {
  alert(`Hey!`);
}
