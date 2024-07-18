document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for "Contact Us" form
    document.querySelector('#contact form').addEventListener('submit', function (e) {
        e.preventDefault();
        let name = document.querySelector('#contact #name').value;
        let email = document.querySelector('#contact #email').value;
        let phone = document.querySelector('#contact #phone').value;
        let message = document.querySelector('#contact #message').value;

        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Please fill in all fields');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
        } else {
            alert('Form submitted successfully');
            this.reset();
        }
    });

    // Form validation for "Customers" form
    document.querySelector('#client form').addEventListener('submit', function (e) {
        e.preventDefault();
        let name = document.querySelector('#client #name').value;
        let feedback = document.querySelector('#client #feedback').value;

        if (name === '' || feedback === '') {
            alert('Please fill in all fields');
        } else {
            alert('Feedback submitted successfully');
            this.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
