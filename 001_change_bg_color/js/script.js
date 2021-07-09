const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['#ed6767', '#f2975d', '#f7e274', '#adffa3', '#80f2bf', '#72f5f5', '#9e7bf4', '#f998e9']

body.style.backgroundColor = '#ed6767'
button.addEventListener('click', changeBackground)

function changeBackground() {
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randColor;
}
