function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }

var scrollBtn = document.getElementById("scrollBtn");

// Show the button when scrolling down, hide it when scrolling to top
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fade-up'; // Apply fade-up animation
    } else {
      entry.target.style.animation = 'fade-down'; // Apply fade-down animation
    }
  });
});

// Get all elements with fade-up or fade-down animations
const animatedElements = document.querySelectorAll('.fade-up, .fade-down');

// Observe each animated element
animatedElements.forEach((el) => observer.observe(el));
