const colors = ['#1a1a23', 'red', 'green', 'yellow', '#e6e6e6', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'aqua', 'royalblue'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
