/* ========================================
   LUI PILATES - Main JS
   Leve e otimizado
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // Header scroll effect
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-list a');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (navClose && nav) {
    navClose.addEventListener('click', () => {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Close nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = this.querySelector('#name').value;
      const email = this.querySelector('#email').value;
      
      if (name && email) {
        // Show success (replace with actual form handler)
        alert('Obrigada! Em breve entraremos em contato.');
        this.reset();
      }
    });
  }
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements
  document.querySelectorAll('.service-card, .feature-item, .about-content, .features-content').forEach(el => {
    observer.observe(el);
  });
  
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeIn 0.6s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .service-card:nth-child(2),
  .feature-item:nth-child(2) {
    animation-delay: 0.1s;
  }
  
  .service-card:nth-child(3),
  .feature-item:nth-child(3) {
    animation-delay: 0.2s;
  }
  
  .service-card:nth-child(4) {
    animation-delay: 0.3s;
  }
`;
document.head.appendChild(style);
