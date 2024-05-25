
document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    document.querySelector('#about').classList.add('scroll-trigger');
});


document.querySelector('nav ul li:nth-child(1) a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });

    document.querySelector('#home').classList.add('scroll-trigger');
})

document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });

    document.querySelector('#contact').classList.add('scroll-trigger');
})

