document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;
    
    // Toggle mobile menu
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Toggle Burger Animation
        burger.classList.toggle('toggle');
        
        // Prevent body scroll when menu is open
        body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            body.classList.remove('no-scroll');
        });
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;
            
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
    
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Scroll Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .skills-content, .project-card, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run once on load
    setTimeout(animateOnScroll, 300);
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let valid = true;
            
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                valid = false;
            } else {
                nameInput.classList.remove('error');
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                emailInput.classList.add('error');
                valid = false;
            } else {
                emailInput.classList.remove('error');
            }
            
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('error');
                valid = false;
            } else {
                messageInput.classList.remove('error');
            }
            
            if (!valid) {
                e.preventDefault();
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add additional styles for animation
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .about-content, .skills-content, .project-card, .contact-content {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .about-content.animate, .skills-content.animate, .project-card.animate, .contact-content.animate {
                opacity: 1;
                transform: translateY(0);
            }
            .no-scroll {
                overflow: hidden;
            }
            header.scrolled {
                padding: 0.3rem 0;
                box-shadow: var(--shadow-md);
            }
            .form-group .error {
                border-color: #e53e3e;
            }
        </style>
    `);
});




const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const formData = new FormData(form);

  fetch("php/contact.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // For debugging

    // Show popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide popup after 3 seconds
    setTimeout(() => {
      popup.style.display = "none";
      form.reset(); // Optional: clear the form
    }, 3000);
  })
  .catch(error => {
    alert("Something went wrong!");
    console.error(error);
  });
});
