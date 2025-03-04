// JavaScript to scroll to the top of the page when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = "Top";
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.display = 'none';
  scrollToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  document.body.appendChild(scrollToTopButton);

  // Show button when scrolling down
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const titles = ["Software Developer", "Machine Learning Engineer", "Researcher"];
  let titleIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const delayBetweenTitles = 500;
  const typingElement = document.getElementById("typing-text");

  function typeText() {
    if (titleIndex < titles.length) {
      if (charIndex < titles[titleIndex].length) {
        typingElement.innerHTML += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Move to the next title after a short delay, but don't add "|" at the end of the last title
        charIndex = 0;
        titleIndex++;
        if (titleIndex < titles.length) {
          typingElement.innerHTML += " | "; // Add separator only if there's another title
          setTimeout(typeText, delayBetweenTitles);
        }
      }
    }
  }

  typeText();
});



