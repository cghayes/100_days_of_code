// IIFE (immediately invoked function expression)
(function()
  {
    // Define array of quotes:
    const randomImage = [
      {
        image: "https://source.unsplash.com/iPOZf3tQfHA/1600x900",
        city: "Berlin, Germany"
      },
      {
        image: "https://source.unsplash.com/uYc-sDEVkV8/1600x900",
        city: "San Francisco, California"
      },
      {
        image: "https://source.unsplash.com/hSvagWirWPA/1600x900",
        city: "London, England"
      },
      {
        image: "https://source.unsplash.com/824OwkP7sgk/1600x900",
        city: "Tokyo, Japan"
      },
      {
        image: "https://source.unsplash.com/yqBvJJ8jGBQ/1600x900",
        city: "Athens, Greece"
      },
      {
        image: "https://source.unsplash.com/gP2PNn1fCiU/1600x900",
        city: "Amsterdam, Netherlands"
      },
      {
        image: "https://source.unsplash.com/-WNG-ErziqM/1600x900",
        city: "Prague, Czech Republic"
      },
      {
        image: "https://source.unsplash.com/PEY_CwQdXj4/1600x900",
        city: "Bruges, Belgium"
      }
    ];


      const button = document.getElementById('generate-btn');

      // Get random image from array:
      button.addEventListener('click', function()
      {
        var num = Math.floor(Math.random() * randomImage.length);

        document.canvas.src = randomImage[num].image;
        document.querySelector(".city").textContent = randomImage[num].city;
      });
    })();
