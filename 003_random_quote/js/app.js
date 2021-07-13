// IIFE (immediately invoked function expression)
(function() {
  // Define array of quotes:
  const quotes = [
    {
      quote: "The worst thing would be to... look back and think of all the things that one could have tried and could have done, and think - why didn't I do that?",
      author: "David Bowie"
    },
    {
      quote: "Beliefs are dangerous. Beliefs allow the mind to stop functioning. A non-functioning mind is clinicially dead. Believe in nothing.",
      author: "Maynard James Keenan"
    },
    {
      quote: "All truths are easy to understand once they are discovered; the point is to discover them.",
      author: "Galileo Galilei"
    },
    {
      quote: "Happiness is a constant work-in-progress, because solving problems is a constant work-in-progress\u2014the solutions to today's problems will lay the foundation for tomorrow's problems, and so on.",
      author: "Mark Manson"
    },
    {
      quote: "The rare people who do become truly exceptional at something do so not because they believe they're exceptional. On the contrary, they become amazing because they're obsessed with improvement.",
      author: "Mark Manson"
    },
    {
      quote: "True happiness occurs only when you find the problems you enjoy having and enjoy solving.",
      author: "Mark Manson"
    },
    {
      quote: "Who you are is defined by what you're willing to struggle for.",
      author: "Mark Manson"
    },
    {
      quote: "This is the most simple and basic component of life: our struggles determine our successes. Our problems birth our happiness, along with slightly better, slightly upgraded problems.",
      author: "Mark Manson"
    }
  ];
  // end array

  const button = document.getElementById('generate-btn');

  // Get random quote value from array:
  button.addEventListener('click', function() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    console.log(randomQuote);

    // Get the text content of quote and author elements:
    document.getElementById("quote").textContent = quotes[randomQuote].quote;
    document.querySelector(".author").textContent = quotes[randomQuote].author;
  });
}) ();
