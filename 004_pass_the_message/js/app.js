// IIFE (immediately invoked function expression)
(function() {
  const form = document.getElementById('message-form')

  form.addEventListener('submit', function(e) {
    var message = document.getElementById('message')
    var content = document.querySelector('.message-content')

    // Prevent default form action:
    e.preventDefault()

    // Autofocus function
    function focusInput() {
      document.getElementById("message").focus();
    }

    // Validation if form is blank:
    if (message.value === '') {
      // Show error message for two seconds:
      $('.error').fadeIn()
      $('.error').delay(2000).fadeOut()
      focusInput()
    } else { // If no problems:
      // Display the message content:
      content.textContent = message.value
      // Clear the form:
      message.value = ''
      focusInput()
    }
  })
})()
