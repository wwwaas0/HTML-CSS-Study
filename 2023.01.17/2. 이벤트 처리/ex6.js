const hambergerNode = document.querySelector("#hamberger");
const hambergerIconNode = document.querySelector("#hamberger-icon");
const containerNode = document.querySelector(".container");

hambergerNode.addEventListener("click", (event) => {
  console.log("햄버거 카드 클릭");
});

hambergerIconNode.addEventListener("click", (event) => {
  console.log("햄버거 아이콘 클릭");
});
containerNode.addEventListener("click", (event) => {
  console.log("검은색 선 클릭");
});
