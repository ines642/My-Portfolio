//animated cursor
const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

/*txt typing animation*/
let ines ="Ines"
let text = "Hello, I'm "+ ines +" frontend developer";
const typingTextElement = document.querySelector(".hey");
const targetText = "Ines";
const typingSpeed = 100; // Speed of typing in milliseconds

let index = 0;
let textIndex = 0;

function type() {
    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        if (text.substring(index, index + targetText.length) === targetText) {
          typingTextElement.innerHTML += '<span class="blue">Ines</span>';
          index += targetText.length;
      } else {
          typingTextElement.innerHTML += text.charAt(index);
          index++;
      }
        setTimeout(type, 100); // Adjust the speed by changing the timeout duration
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


/*card lazy loading*/
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('class'); // Load the image
        img.classList.add('visible'); // Add the animation class
        
      }
      else {
        img.classList.remove('visible');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll('.card').forEach(img => {
    observer.observe(img);
  });


