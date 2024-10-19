const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
    
    if (navLinks.classList.contains('show')) {
        document.body.classList.add('noscroll');
    } else {
        document.body.classList.remove('noscroll');
    }
});

window.addEventListener('scroll', function() {
    const parallaxHeader = document.getElementById('parallax-header');
    let scrollPosition = window.pageYOffset;
    parallaxHeader.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});


const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

const parallaxSections = document.querySelectorAll('.parallax-section');

window.addEventListener('scroll', () => {
    parallaxSections.forEach(section => {
        let offset = window.pageYOffset;
        section.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
