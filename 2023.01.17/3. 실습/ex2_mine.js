const answer = {
  id: "ajou",
  password: "1234",
};

const userId = document.querySelector("#user-id");
const userPassword = document.querySelector("#user-password");

//사용자가 입력하되, 입력을 마치면 enter 누름
//2개의 input 태그 안에 있는 값을 읽기
// 만약 id, password가 answer과 같으면 로그인 성공
// 만약 id, password가 answer과 다르면 로그인 실패

// keyup, keypress, keydown
window.addEventListener("keypress", function (event) {
  console.log(event);
  if (event.key == "Enter") {
    if (userId.value === answer.id && userPassword.value === answer.password) {
      this.alert("로그인 성공");
    } else {
      this.alert("로그인 실패");
    }
  }
});
