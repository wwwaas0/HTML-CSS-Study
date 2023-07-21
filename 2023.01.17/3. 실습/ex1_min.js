const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const screen = document.querySelector(".screen");

plusBtn.addEventListener("click", function (event) {
  console.log(screen.innerText);
  const currentNumber = Number(screen.innerText);
  const nextNumber = currentNumber + 1;
  screen.innerText = nextNumber;
});

minusBtn.addEventListener("click", function (event) {
  console.log(screen.innerText);
  const currentNumber = Number(screen.innerText);
  const nextNumber = currentNumber - 1;
  screen.innerText = nextNumber;
});
