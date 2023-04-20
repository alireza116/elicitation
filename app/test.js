let chart = document.querySelector("#chart");
console.log(chart);
let e = new ElicitationComponent(100, 100, chart);
e.draw();

let button = document.querySelector("button");

button.addEventListener("click", () => {
  let data = e.getData();
  console.log(data);
});
