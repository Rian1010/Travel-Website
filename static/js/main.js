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

        arrow_right.style.transform = `translateY(${scroll * -speed}px)`;
        arrow_right.style.opacity = -scroll / (banner_title.offsetHeight) + 4

        arrow_left.style.transform = `translateY(${scroll * -speed}px)`;
        arrow_left.style.opacity = -scroll / (banner_title.offsetHeight) + 4

        e.style.transition = "0s"
    });
};



// Picture Carousel

const picture = document.querySelector('.carousel-pic');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const banner = document.querySelector('.banner');

let index = 0
const images = ['./static/images/Banner.jpg', './static/images/Singapore.jpg', './static/images/Indonesia.jpg'];
const imageTexts = ['Wo fängt Ihre Die Nächste Reise an?', 'Finden Sie Mehr Über Interessante Kultur Heraus!', 'Besuchen Sie Die Schönsten Orte Der Welt!']
banner.style.backgroundImage = `url('${images[index]}')`
banner_title.innerText = `${imageTexts[index]}`

next.addEventListener('click', () => {
    banner.style.opacity = 0
    banner_title.style.opacity = 0;
    index++;
    if (index >= 3) {
        index = 0;
    }
    banner.style.transition = '0.3s';
    banner_title.style.transition = "0.3s"

    banner.style.backgroundImage = `url('${images[index]}')`
    banner_title.innerText = `${imageTexts[index]}`

    banner.style.opacity = 1
    banner_title.style.opacity = 1;
});

prev.addEventListener('click', () => {
    banner.style.opacity = 0
    index--;
    if (index <= -1) {
        index = 2;
    }
    banner.style.transition = '0.3s';
    banner_title.style.transition = "0.3s"

    banner.style.backgroundImage = `url('${images[index]}')`
    banner_title.innerText = `${imageTexts[index]}`

    banner_title.style.opacity = 1;
    banner.style.opacity = 1
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

    let coordinates = new countryPosition(35.009778, 38.459732);
    let zoomValue = 3;

    // Update days on days input change

    let daysValue = 7;
    daysDisplay.innerText = daysInput.value;

    const daysUpdate = () => {
        daysValue = daysInput.value;
        daysDisplay.innerText = daysValue;
        findClosestValues(inputtedPrice, daysValue);
    }

    daysInput.addEventListener('change', daysUpdate);

    // Update price on price input change

    let inputtedPrice = 200;
    let priceValue;
    priceDisplay.innerText = priceInput.value + "€";

    const priceUpdate = () => {
        priceValue = priceInput.value;
        priceDisplay.innerText = priceValue + "€";
        inputtedPrice = priceValue;
        findClosestValues(inputtedPrice, daysValue);
    }

    priceInput.addEventListener('change', priceUpdate);

    // List of all available places

    const countries = [{
            place: "Paris, Frankreich",
            days: 1,
            price: 35.00,
            lat: 48.8566969,
            lng: 2.3514616,
            info: "Ein Tag für 35,00€ und drei Tage für 59,99€"

        },
        {
            place: "Paris, Frankreich",
            days: 3,
            price: 59.99,
            lat: 48.8566969,
            lng: 2.3514616,
            info: "Ein Tag für 35,00€ und Drei Tage für 59,99€"
        },
        {
            place: "Rom, Italien",
            days: 6,
            price: 70.00,
            lat: 41.8933203,
            lng: 12.4829321,
            info: "Sechs Tage für 70,00€"
        },
        {
            place: "London, England",
            days: 3,
            price: 1229.99,
            lat: 51.5073219,
            lng: -0.1276474,
            info: "Drei Tage für 1229,99€"
        },
        {
            place: "Hangzhou, China",
            days: 5,
            price: 3500.00,
            lat: 30.2489634,
            lng: 120.2052342,
            info: "Fünf Tage für 3500,00€"
        },
        {
            place: "Singapore",
            days: 6,
            price: 763.67,
            lat: 1.357107,
            lng: 103.8194992,
            info: "Vier Tage für 547,80€ sechs Tage für 763,67€"
        },
        {
            place: "Singapur",
            days: 4,
            price: 547.80,
            lat: 1.357107,
            lng: 103.8194992,
            info: "Vier Tage für 547,80€ sechs Tage für 763,67€"
        },
        {
            place: "Seoul, Südkorea",
            days: 3,
            price: 829.87,
            lat: 37.5666791,
            lng: 126.9782914,
            info: "Zwei Tage für 583, 89€ und vier Tage für 829,87€"
        },
        {
            place: "Seoul, Südkorea",
            days: 2,
            price: 583.89,
            lat: 37.5666791,
            lng: 126.9782914,
            info: "Zwei Tage für 583, 89€ und vier Tage für 829,87€"
        },
        {
            place: "Auckland, Neu Zeeland",
            days: 4,
            price: 1570.68,
            lat: -36.852095,
            lng: 174.7631803,
            info: "Vier Tage für 1570,68€"
        },
        {
            place: "Port Louis, Mauritius",
            days: 4,
            price: 2635.93,
            lat: -20.1637281,
            lng: 57.5045331,
            info: "Vier Tage für 2635,93€ und sieben Tage für 3835,93€"
        },
        {
            place: "Port Louis, Mauritius",
            days: 7,
            price: 3835.93,
            lat: -20.1637281,
            lng: 57.5045331,
            info: "Vier Tage für 2635,93€ und sieben Tage für 3835,93€"
        },
        {
            place: "Shanghai, China",
            days: 4,
            price: 3219.29,
            lat: 31.2322758,
            lng: 121.4692071,
            info: "Vier Tage für 3219,29€"
        },
    ]

    // Find the closest result for user input

    const results = document.getElementById('results');
    const resultsHeading = document.getElementById('resultsHeading')

    const findClosestValues = (userPrice, userDays) => {

        let idxOne = 0;
        let idxTwo = 1;
        let currentPrice;
        let currentDay;
        let currentPlace;
        let currentLat = 35.009778;
        let currentLng = 38.459732;

        while (idxTwo < countries.length) {
            let firstPlaceDay = countries[idxOne].days;
            let secondPlaceDay = countries[idxTwo].days;

            let firstPlacePrice = countries[idxOne].price;
            let secondPlacePrice = countries[idxTwo].price;

            if (Math.abs(firstPlacePrice - userPrice) < Math.abs(secondPlacePrice - userPrice) && Math.abs(firstPlaceDay - userDays) < Math.abs(secondPlaceDay - userDays) && firstPlaceDay <= userDays && firstPlacePrice <= userPrice) {
                currentPrice = firstPlacePrice;
                currentDay = firstPlaceDay;
                currentPlace = countries[idxOne].place;
                currentLat = countries[idxOne].lat;
                currentLng = countries[idxOne].lng;
                coordinates = new countryPosition(currentLat, currentLng)
                zoomValue = 7;

                idxOne++;
            } else if (Math.abs(secondPlacePrice - userPrice) < Math.abs(firstPlacePrice - userPrice) && Math.abs(secondPlaceDay - userDays) < Math.abs(firstPlaceDay - userDays) && secondPlaceDay <= userDays && secondPlacePrice <= userPrice) {
                currentPrice = secondPlacePrice;
                currentDay = secondPlaceDay;
                currentPlace = countries[idxTwo].place;
                currentLat = countries[idxTwo].lat;
                currentLng = countries[idxTwo].lng;
                coordinates = new countryPosition(currentLat, currentLng);
                zoomValue = 7;

                idxTwo++;
            } else {
                idxOne++;
                idxTwo++;
            }
        }
        if (currentPlace === undefined) {
            resultsHeading.style.display = 'none';
            results.innerText = "Es wurden keine Ergebnisse für Ihre Angaben gefunden.";
            results.style.color = "red"
        } else {
            resultsHeading.style.display = 'inline';
            results.innerHTML = `<b>Ort</b>: ${currentPlace}, <b>Tage</b>: ${currentDay}, Preis: ${currentPrice}€`;
            results.style.color = "white"
        }

        // Anzeige von Google Maps
        let map;
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: zoomValue,
            gestureHandling: "cooperative",
        });

        // Anzeige der Marker
        const addMarker = props => {
            let marker = new google.maps.Marker({
                position: props.coords,
                map,
            });
            const infowindow = new google.maps.InfoWindow({
                content: props.content.place,
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }
        for (let i = 0; i < countries.length; i++) {
            addMarker({
                coords: {
                    lat: countries[i].lat,
                    lng: countries[i].lng,
                },
                content: {
                    place: `<h2 class="map-info-text-color">Ort: ${countries[i].place}</h2>` +
                        `<p class="map-info-text-color">${countries[i].info}</p>`
                }
            })
        }

    }

    findClosestValues()

// Search Queries
const queryInput = document.getElementById('searchQueryBig');
const suggestionContainer = document.querySelector('.suggestions-container');
const formBig = document.getElementById('searchFormBig')

const destinationHeadings = [{
        heading: 'Vereisen Sie in die Türkei ',
    },
    {
        heading: 'Ferien in Singapur ',
    },
    {
        heading: 'Ab nach Mauritius ',
    },
    {
        heading: 'Indonesische Kultur ',
    },
    {
        heading: 'Erleben Sie Die Schönheit Japans ',
    },
    {
        heading: 'Korea, Ein Sich Schnell Entwickelndes Land '

    }
];

queryInput.addEventListener('keyup', () => {
    let input = queryInput.value.toLowerCase();
    suggestionContainer.innerHTML = '';
    let suggestions = destinationHeadings.filter(destHeading => destHeading.heading.toLowerCase().includes(input));

    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.classList.add("search-suggestion");
        div.innerHTML = suggestion.heading;
        suggestionContainer.appendChild(div);
    });
    if (input === '') {
        suggestionContainer.innerHTML = ''
    }
});

queryInput.addEventListener('change', () => {

    const suggestionItem = document.querySelectorAll('.search-suggestion');

    suggestionItem.forEach(sugg => sugg.addEventListener('click', () => {
        queryInput.value = sugg.innerText
        formBig.submit()
    }))
})


// Der folgende Code wurde verwendet, um zu testen, ob der Hauptzweck von Google Maps funktioniert hat, während ich im Prozess des Codierens war


    // const mapUpdate = () => {
    //     switch (true) {
    //         case (daysValue < 4 && inputtedPrice >= 30 && inputtedPrice <= 500):
    //             // Paris
    //             coordinates = new countryPosition(48.8566969, 2.3514616);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue >= 4 && inputtedPrice >= 50 && inputtedPrice <= 500):
    //             // Rome
    //             coordinates = new countryPosition(41.8933203, 12.4829321);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue < 3 && inputtedPrice >= 501 && inputtedPrice <= 1000):
    //             // Singapore
    //             coordinates = new countryPosition(1.357107, 103.8194992);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue >= 3 && inputtedPrice >= 501 && inputtedPrice <= 1000):
    //             // Seoul
    //             coordinates = new countryPosition(37.5666791, 126.9782914);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue < 4 && inputtedPrice >= 1001 && inputtedPrice <= 2000):
    //             // Auckland, New Zealand
    //             coordinates = new countryPosition(-36.852095, 174.7631803);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue >= 4 && inputtedPrice >= 1001 && inputtedPrice <= 2000):
    //             // London
    //             coordinates = new countryPosition(51.5073219, -0.1276474);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue < 5 && inputtedPrice >= 2001 && inputtedPrice <= 3000):
    //             // Maui, Hawaii
    //             coordinates = new countryPosition(20.8029568, -156.3106833);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue >= 5 && inputtedPrice >= 2001 && inputtedPrice <= 3000):
    //             // Port Louis
    //             coordinates = new countryPosition(-20.1637281, 57.5045331);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue >= 4 && inputtedPrice >= 3001):
    //             // Shanghai
    //             coordinates = new countryPosition(31.2322758, 121.4692071);
    //             zoomValue = 5;
    //             break;
    //         case (daysValue < 4 && inputtedPrice >= 3001):
    //             // Hangzhou, China
    //             coordinates = new countryPosition(30.2489634, 120.2052342);
    //             zoomValue = 5;
    //             break;
    //         default:
    //             alert(`Verzeihung! Es wurde kein ${inputtedPrice}€ Flug für ${daysValue} Tage, gefunden.`)
    //             coordinates = new countryPosition(35.009778, 38.459732);
    //             zoomValue = 3
    //     }
    // mapDisplay()
    // }

}