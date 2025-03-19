import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  });
}

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Excellent service! Got my PF claim processed quickly.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    text: "Very helpful staff and professional service.",
    rating: 5
  },
  {
    name: "Amit Patel",
    text: "Best computer services center in Bulandshahr!",
    rating: 5
  }
];

// Create testimonials HTML
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <p>${testimonial.text}</p>
      <div class="testimonial-author">
        <h4>${testimonial.name}</h4>
        <div class="rating">
          ${'★'.repeat(testimonial.rating)}
        </div>
      </div>
    `;
    testimonialSlider.appendChild(testimonialCard);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});