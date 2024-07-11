const handleMouseEvents = (e) => {
    let speed;

    if (isTouchDevice) {
        speed = 0.2;
    } else {
        speed = 1.4;
    }

}

document.addEventListener('mousemove', handleMouseEvents);

const parallaxDiv = document.querySelector('.parallaxDiv');
const images = parallaxDiv.querySelectorAll('img');

const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}


//document.addEventListener('mousemove', handleMouseEvents);

const navbar = document.getElementById('navbar');
const nextHero = document.getElementById('nextHero');
let typed = false;

const textTypingEffect = (element, text, i=0) => {
    if (!typed) {
        return
    }

    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i+1))
}

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    nextHero.style.transform = `translateX(${-(scrollY / 4)}px)`

    if (scrollY > 100) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }

    const about_p = this.document.getElementById('about_p');
    let windowHeight = window.innerHeight;
    let aboutParaReveal = about_p.getBoundingClientRect().top;
    let aboutParaRevealPoint = 140;

    if (aboutParaReveal < windowHeight - aboutParaRevealPoint) {
        if (!typed) {
            typed = true;
            textTypingEffect(about_p, "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available")
        }
    } else {
        typed = false;
        about_p.textContent = '';
    }

})