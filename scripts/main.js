// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
    } else {
        header.style.padding = '15px 0';
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission with validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        // Create confirmation message
        const confirmation = document.createElement('div');
        confirmation.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
            background: rgba(15, 23, 42, 0.9); padding: 30px; border-radius: 15px; 
            border: 1px solid var(--primary); max-width: 500px; width: 90%; z-index: 1000;
            backdrop-filter: blur(10px); text-align: center;">
                <h3 style="color: var(--primary); margin-bottom: 15px;">Message Sent!</h3>
                <p style="color: var(--gray); margin-bottom: 20px;">Thank you for contacting GreenRush Transport. We'll get back to you soon.</p>
                <button onclick="this.parentElement.remove()" 
                style="background: var(--primary); color: var(--dark); border: none; 
                padding: 10px 25px; border-radius: 50px; cursor: pointer; font-weight: 600;">
                    Close
                </button>
            </div>
        `;
        document.body.appendChild(confirmation);
        
        // Reset form
        form.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Add floating animation to elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('floating');
        }
    });
}, {threshold: 0.1});

document.querySelectorAll('.info-card, .director-card').forEach(card => {
    observer.observe(card);
});