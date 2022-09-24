let btn = document.querySelector('.btn');
let body = document.getElementsByTagName('body')

let colors = ['red', 'blue', 'yellow', 'black', 'greeen', 'white', 'gray', 'crimson', 'cadetblue',
 'pink', '#0a0a23', '#262626', 'orange', 'aqua', 'coral', 'darkgreen',
 'cyan', 'darkred', 'indigo', 'darkskyblue', 'royalblue', 'purple', 'cyan', 'darkcyan',
  'greenyellow', 'maroon', 'magenta', 'navy', 'salmon', 'darklsategray', 'gold'];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * colors.length);

 document.body.style.backgroundColor = colors[random]
})