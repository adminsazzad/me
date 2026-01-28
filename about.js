// Scroll fade-in animation for skills and achievements
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.skills-list li, .card');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});