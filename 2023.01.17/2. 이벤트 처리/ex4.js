const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  console.log(event);
  console.log(event.data);
});
