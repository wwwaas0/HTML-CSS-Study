//이벤트와 관련된 태그 찾기
const input = document.querySelector("input");

//내가 관심있는 이벤트
//이벤트가 발생했을 때 실행할 함수
input.addEventListener("focus", (event) => {
  console.log(event);
});
