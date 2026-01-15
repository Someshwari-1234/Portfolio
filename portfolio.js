// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Reveal Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.2;
        if (top < screenHeight) {
            section.classList.add('active');
        }
    });
});
function showSkill(skillId) {
    // Remove active class from all skill boxes
    document.querySelectorAll('.skill-box').forEach(box => {
        box.classList.remove('active');
    });

    // Hide all skill details
    document.querySelectorAll('.skill-detail').forEach(detail => {
        detail.classList.remove('active');
    });

    // Activate clicked skill box
    event.target.classList.add('active');

    // Show selected skill content
    document.getElementById(skillId).classList.add('active');
}
