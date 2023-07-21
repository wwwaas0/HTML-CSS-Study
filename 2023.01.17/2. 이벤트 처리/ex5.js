const input = document.querySelector("input");

//keyup: 키보드를 눌렀다가 때는 경우
//keydown : 키보드를 누르는 경우
//keypress: 키보드를 누르고 있는 경우
input.addEventListener("keyup", (event) => {
  console.log(event);
});
