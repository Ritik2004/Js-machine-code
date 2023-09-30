let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let increment = document.getElementById("increment");

let reset = document.getElementById("reset");

let incrementNumber = 1;

increment.addEventListener("change", function (e) {
  incrementNumber = parseInt(e.target.val);
});

add.addEventListener("click", function (e) {
  let curval = document.getElementById("number");
  let total = parseInt(curval.innerText) + incrementNumber;

  curval.innerText = total;
});

subtract.addEventListener("click", function (e) {
  let curval = document.getElementById("number");

  let total = parseInt(curval.innerText) - incrementNumber;
  if (total < 0) {
    total = 0;
  }
  curval.innerText = total;
});

reset.addEventListener("click", function (e) {
  let curval = document.getElementById("number");

  curval.innerText = 0;
});
