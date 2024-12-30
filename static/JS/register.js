document.addEventListener('DOMContentLoaded', () => {
    // Initialize 3D card effect
    initializeCardEffect('registerCard');

    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form inputs
        const password = form.querySelector('input[type="password"]');
        const confirmPassword = form.querySelectorAll('input[type="password"]')[1];
        
        // Basic password validation
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match!');
            return;
        }
        
        // Add your registration logic here
        alert('Registration form submitted');
    });
});


// 3D card effect logic
function initializeCardEffect(cardId) {
    const card = document.getElementById(cardId);

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.querySelector('.card').style.transform = 
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.card').style.transform = 
            'rotateX(0) rotateY(0)';
    });
}