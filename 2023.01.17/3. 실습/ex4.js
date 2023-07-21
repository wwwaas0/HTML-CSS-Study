//버튼 클릭했을 때 해당 값 받아오기
let bottons = document.querySelectorAll(".botton");
const screen = document.querySelector(".screen");
let input = "";
const call = document.querySelector(".call");
const back = document.querySelector(".back");
let text = screen.innerText;

bottons.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(event.target.innerText);
    input = event.target.innerText;
    screen.innerText += input;
    text = screen.innerText;
  });
});

window.addEventListener("keypress", function (event) {
  //enter 누르면 초기화
  if (event.key === "Enter") {
    alert(`${screen.innerText}`);
    screen.innerText = "";
  } else {
    console.log(event.key);
    input = event.key;
    screen.innerText += input;
    text = screen.innerText;
  }
});

//통화버튼 눌렀을 때, 전화 알림
call.addEventListener("click", function (event) {
  console.log("통화 버튼 클릭");
  alert(`${screen.innerText}으로 전화를 걸고 있습니다.`);
  screen.innerText = "";
});

//지우는 키 눌렀을 때, 글자 하나씩 지우기
back.addEventListener("click", function (event) {
  text = text.slice(0, -1);
  screen.innerText = text;
});
