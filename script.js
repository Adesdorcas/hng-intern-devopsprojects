



// Typing Text code

const typed = new Typed('.multiple-text', {
    strings: ['Cloud Engineer', 'DevOps Engineer'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

// ScrollReveal Code


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})
  
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1img, .services-container, .contact-form', {origin: 'bottom'});
    



    