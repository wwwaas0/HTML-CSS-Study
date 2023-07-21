const input = document.querySelector("input");

//focus가 사라지는 경우
input.addEventListener("blur", (event) => {
  console.log(event);
});
