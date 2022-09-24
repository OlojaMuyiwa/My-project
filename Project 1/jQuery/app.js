let div = document.querySelector('.row1');
let box = document.querySelector('.row2');
let container = document.querySelector('.container');
let img = document.querySelector('#img');
let btn = document.querySelector('.btn');

// btn.remove();
// img.remove();

div.style.backgroundColor = 'red';
div.style.fontSize = '1.5rem';
div.style.fontFamily = 'monospace';

box.style.color = 'white';
box.style.backgroundColor = 'black';
box.style.fontFamily = 'monospace';
// box.addEventListener('btn');
//  div.innerText = 'My first DOM'

container.childNodes[1].style.backgroundColor = 'green';

function myFunc() {
  alert('I love Myself');
}
btn.addEventListener('click', myFunc);

function myFunc1() {
  box.style.backgroundColor = 'yellow';
  box.style.color = 'black';
}
box.addEventListener('mouseover', myFunc1)

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
  if(hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn')
  } else {
    hiddenContent.classList.add('reveal-btn')
  }
}

revealBtn.addEventListener('click', revealContent);

let cage = document.querySelector('.row3');

cage.addEventListener('click', myFunc2)

function myFunc2() {
  cage.style.backgroundColor = 'crimson';
}
const container3 = document.querySelector('.container3');
const newDiv = document.createElement('div');
newDiv.setAttribute('class', 'row4');

newDiv.appendChild(container3);