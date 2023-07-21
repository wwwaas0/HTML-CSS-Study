//1. class가 card인 것 모두 찾기
let cards = document.querySelectorAll(".card");
const header = document.querySelector("header");

cards.forEach((card) => {
  console.log(card);
  card.addEventListener("click", function (event) {
    console.log(event.target.id);
    header.innerText = event.target.id;
  });
});
