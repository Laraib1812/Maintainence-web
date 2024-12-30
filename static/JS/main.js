document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('loginCard');
    const form = document.getElementById('loginForm');

    // 3D card effect
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

    // Reset card position when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card').style.transform = 
            'rotateX(0) rotateY(0)';
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        
    });
});

