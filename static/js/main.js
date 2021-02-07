// Parallax Scroll Effect 

const img = document.querySelectorAll('.parallax');
const banner_title = document.querySelector('.banner-title');
const arrow_right = document.querySelector('#next');
const arrow_left = document.querySelector('#prev');

window.onscroll = () => {
    let scroll = window.pageYOffset;

    img.forEach(e => {
        let speed = e.dataset.speed;
        e.style.transform = `translateY(${scroll * -speed}px)`;
        banner_title.style.opacity = -scroll / (banner_title.offsetHeight) + 5

        arrow_right.style.transform = `translateX(${scroll * speed}px)`;
        arrow_right.style.opacity = -scroll / (banner_title.offsetHeight) + 5

        arrow_left.style.transform = `translateX(${scroll * -speed}px)`;
        arrow_left.style.opacity = -scroll / (banner_title.offsetHeight) + 5

        banner.style.transition = '0s';
    });
};

// Picture Carousel

const picture = document.querySelector('.carousel-pic');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const banner = document.querySelector('.banner');

let index = 0
const images = ['./static/images/Banner.jpg', './static/images/Singapore.jpg', './static/images/Turkey.jpg'];
banner.style.backgroundImage = `url('${images[index]}')`

next.addEventListener('click', () => {
    banner.style.opacity = 0
    index++;
    if (index >= 3) {
        index = 0;
    }
    banner.style.transition = '0.3s';
    banner.style.backgroundImage = `url('${images[index]}')`
    banner.style.opacity = 1

    console.log(index)
});

prev.addEventListener('click', () => {
    banner.style.opacity = 0
    index--;
    if (index <= -1) {
        index = 2;
    }
    banner.style.transition = '0.3s';
    banner.style.backgroundImage = `url('${images[index]}')`
    banner.style.opacity = 1
    console.log(index)
});

