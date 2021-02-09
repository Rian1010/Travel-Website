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

    const daysInput = document.getElementById('numberOfDays');
    const daysDisplay = document.getElementById('dayDisplay');

    const priceInput = document.getElementById('priceInput');
    const priceDisplay = document.getElementById('priceDisplay');

    // let desiredPrice = document.getElementById('desiredPrice');
    // const priceBtn = document.getElementById('priceBtn');

    let coordinates = new countryPosition(35.009778, 38.459732)
    let zoomValue = 3

    let daysValue = 4;
    daysDisplay.innerText = daysInput.value;

    const daysUpdate = () => {
        daysValue = daysInput.value;
        daysDisplay.innerText = daysValue;
        mapUpdate();
    }

    daysInput.addEventListener('change', daysUpdate);

    let inputtedPrice = 2015;
    let priceValue;
    priceDisplay.innerText = priceInput.value + "€";

    const priceUpdate = () => {
        priceValue = priceInput.value;
        priceDisplay.innerText = priceValue + "€";
        inputtedPrice = priceValue;
        mapUpdate();
    }

    priceInput.addEventListener('change', priceUpdate);

    // priceBtn.addEventListener('click', e => {
    //     e.preventDefault();
    //     priceUpdate() 
    //     inputtedPrice = priceValue
    //     mapUpdate();
    // })

    const countries = [{
            place: "Paris",
            days: 1,
            price: 35,
            lat: 48.8566969, 
            lng: 2.3514616
        },
        {
            place: "Paris",
            days: 3,
            price: 60,
            lat: 48.8566969, 
            lng: 2.3514616
        },
        {
            place: "Rome",
            days: 6,
            price: 70,
            lat: 41.8933203,
            lng: 12.4829321
        },
        {
            place: "Rome",
            days: 3,
            price: 1230,
            lat: 51.5073219,
            lng:-0.1276474
        },
        {
            place: "Hangzhou",
            days: 5,
            price: 3500,
            lat: 30.2489634,
            lng: 120.2052342
        }
    ]

    let inpDay = 6;
    let inpPrice = 69;

    const findClosestValues = (price, days) => {
        let idxOne = 0;
        let idxTwo = 1;
        let currentPrice = 2015;
        let currentDay = 4;
        let currentPlace
        while (idxTwo < countries.length) {
            console.log(idxOne, idxTwo, countries.length)
            let firstPlaceDay = countries[idxOne].days;
            let secondPlaceDay = countries[idxTwo].days;

            let firstPlacePrice = countries[idxOne].price;
            let secondPlacePrice = countries[idxTwo].price;
            
            // console.log(Math.abs(firstPlace - inpPrice));
            if (Math.abs(firstPlacePrice - price) < Math.abs(secondPlacePrice - price) && Math.abs(firstPlaceDay - days) < Math.abs(secondPlaceDay - days) && firstPlaceDay >= days && firstPlacePrice >= price) {
                currentPrice = firstPlacePrice;
                currentDay = firstPlaceDay;
                currentPlace = countries[idxOne].place
                console.log(currentPrice, currentDay, currentPlace);
                idxOne++;
            } else if (Math.abs(secondPlacePrice - price) < Math.abs(firstPlacePrice - price) && Math.abs(secondPlaceDay - days) < Math.abs(firstPlaceDay - days && firstPlaceDay >= days && firstPlacePrice >= price)) {
                currentPrice = secondPlacePrice;
                currentDay = secondPlaceDay;
                currentPlace = countries[idxTwo].place;

                console.log(currentPrice, currentDay, currentPlace)
                idxTwo++;
            }
            else {
                idxOne++;
                idxTwo++;
                console.log("nothing found")
            }
        }
        console.log("kk " + currentPrice, currentDay, currentPlace);
    }
    findClosestValues(inpPrice, inpDay)

    const mapUpdate = () => {
        switch (true) {
            case (daysValue < 4 && inputtedPrice >= 30 && inputtedPrice <= 500):
                // Paris
                coordinates = new countryPosition(48.8566969, 2.3514616);
                zoomValue = 5;
                break;
            case (daysValue >= 4 && inputtedPrice >= 50 && inputtedPrice <= 500):
                // Rome
                coordinates = new countryPosition(41.8933203, 12.4829321);
                zoomValue = 5;
                break;
            case (daysValue < 3 && inputtedPrice >= 501 && inputtedPrice <= 1000):
                // Singapore
                coordinates = new countryPosition(1.357107, 103.8194992);
                zoomValue = 5;
                break;
            case (daysValue >= 3 && inputtedPrice >= 501 && inputtedPrice <= 1000):
                // Seoul
                coordinates = new countryPosition(37.5666791, 126.9782914);
                zoomValue = 5;
                break;
            case (daysValue < 4 && inputtedPrice >= 1001 && inputtedPrice <= 2000):
                // Auckland, New Zealand
                coordinates = new countryPosition(-36.852095, 174.7631803);
                zoomValue = 5;
                break;
            case (daysValue >= 4 && inputtedPrice >= 1001 && inputtedPrice <= 2000):
                // London
                coordinates = new countryPosition(51.5073219, -0.1276474);
                zoomValue = 5;
                break;
            case (daysValue < 5 && inputtedPrice >= 2001 && inputtedPrice <= 3000):
                // Maui, Hawaii
                coordinates = new countryPosition(20.8029568, -156.3106833);
                zoomValue = 5;
                break;
            case (daysValue >= 5 && inputtedPrice >= 2001 && inputtedPrice <= 3000):
                // Port Louis
                coordinates = new countryPosition(-20.1637281, 57.5045331);
                zoomValue = 5;
                break;
            case (daysValue >= 4 && inputtedPrice >= 3001):
                // Shanghai
                coordinates = new countryPosition(31.2322758, 121.4692071);
                zoomValue = 5;
                break;
            case (daysValue < 4 && inputtedPrice >= 3001):
                // Hangzhou, China
                coordinates = new countryPosition(30.2489634, 120.2052342);
                zoomValue = 5;
                break;
            default:
                alert(`Verzeihung! Es wurde kein ${inputtedPrice}€ Flug für ${daysValue} Tage, gefunden.`)
                coordinates = new countryPosition(35.009778, 38.459732);
                zoomValue = 3
        }
        mapDisplay()
    }

    const mapDisplay = () => {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: zoomValue
        });
    }
    mapDisplay()
}