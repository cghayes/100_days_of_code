// IIFE (immediately invoked function expression)
(function () {
  const button = document.querySelector('#btn')
  const body = document.querySelector('body')
  const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  const value = document.querySelector('#hex-value')

  // Call changeHex function on click event
  button.addEventListener('click', changeHex)

  function changeHex() {
    // Begin every hex value with #
    let hex = '#'

    // Get 6 random values from hexValues array
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length);
      // Concatenate random values
      hex += hexValues[index];
    }

    // Get the text content of hex variable
    value.textContent = hex
    // Assign new hex value to const body
    body.style.backgroundColor = hex
  }
})()
