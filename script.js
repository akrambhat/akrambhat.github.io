// Function to toggle education cards
function toggleCard(cardElement) {
    const isActive = cardElement.classList.contains('active');

    document.querySelectorAll('.edu-card').forEach(card => {
        card.classList.remove('active');
    });

    if (!isActive) {
        cardElement.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const textToType = "AKRAM";
    const typingElement = document.getElementById("typed-name");
    let charIndex = 0;
    const typingSpeed = 150;

    function type() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, 300);
});

// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference on load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
};

// Listen for clicks on the theme button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});