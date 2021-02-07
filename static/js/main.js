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
        banner_title.style.opacity = -scroll / (banner_title.offsetHeight) + 4

        arrow_right.style.transform = `translateX(${scroll * speed}px)`;
        arrow_right.style.opacity = -scroll / (banner_title.offsetHeight) + 4

        arrow_left.style.transform = `translateX(${scroll * -speed}px)`;
        arrow_left.style.opacity = -scroll / (banner_title.offsetHeight) + 4

        banner.style.transition = '0s';
    });
};

// Picture Carousel

const picture = document.querySelector('.carousel-pic');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const banner = document.querySelector('.banner');

let index = 0
const images = ['./static/images/Banner.jpg', './static/images/Singapore.jpg', './static/images/Indonesia.jpg'];
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



// Google Maps API 
window.initMap = () => {
    const initMap = () => GoogleMap.initGoogleMap();

    class countryPosition {
        constructor(lat, lng) {
            this.lat = lat; 
            this.lng = lng;
        }
    }

    let coordinates
    let desiredPrice = 900
    switch(true) {
        case (desiredPrice <= 800):
            coordinates = {lat: -31.054483, lng: 24.168686};
            break;
        case (desiredPrice > 800):
            coordinates = {lat: -4.326026, lng: 122.081875};
            break;
    }
    console.log(coordinates);

    const indonesia = new countryPosition(-4.326026, 122.081875);
    let map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 5
      });
}