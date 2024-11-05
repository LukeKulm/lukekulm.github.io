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
