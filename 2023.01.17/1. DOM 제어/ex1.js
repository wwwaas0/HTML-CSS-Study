const divNodes = document.getElementsByTagName("div");

// HTML 문서 내의 해당 Tag 개수 확인하기
console.log(divNodes.length);

// HTML 문서 내의 첫번째 태그 확인하기
console.log(divNodes.item(0));

// 첫번째 divNodes 태그의 컨텐츠 바꾸기
divNodes.item(0).innerHTML = "<h1>asdf</h1>";
//divNodes.item(0).innerText = "<h1>asdf</h1>";

// 일괄적으로 divNodes 태그의 컨텐츠 바꾸기
// const divs = Array.from(divNodes);
// divs.forEach((div) => {
//   div.innerHTML = "일괄변경";
// });
