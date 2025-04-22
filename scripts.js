document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.btn-nav');
    const navbar = document.querySelector('.navbar');

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth',
                });
            }
        });
    });

    // Sticky Navbar Animation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic Validation
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }
});
