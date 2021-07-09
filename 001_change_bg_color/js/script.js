const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['#80f2bf', '#80f2da', '#80d0f2', '#809df2', '#8d80f2', '#b980f2', '#e680f2']

body.style.backgroundColor = '#80f2bf'
button.addEventListener('click', changeBackground)

function changeBackground() {
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randColor;
}
