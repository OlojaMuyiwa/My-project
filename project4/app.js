// Variablle
let txt = ["I'm am a junior web developer,i started my career last year and i'm looking forward to develop my skills, i'm open for internships as well as freelance gigs, i'm fluent in HTMl CSS and Javascript"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === txt.length){
    count = 0;
  }
  currentText = txt[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.txt-type').textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 300)
}());