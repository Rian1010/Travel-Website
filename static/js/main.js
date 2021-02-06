// Parallax Scroll Effect 

const img = document.querySelectorAll('.parallax');
const banner_title = document.querySelector('.banner-title');

window.onscroll = () => {
    let scroll = window.pageYOffset;

    img.forEach(e => {
        let speed = e.dataset.speed;
        e.style.transform = `translateY(${scroll * -speed}px)`
        banner_title.style.opacity = -scroll / (banner_title.offsetHeight) + 5
    });
};


// Search Functionality
const currentURL = new URL(window.location);
const cards = document.querySelector('.cards');
const destinationCards = document.querySelectorAll('.destination-card');
const notFound = document.querySelector('.not-found');

// window.addEventListener('DOMContentLoaded', () => {
//     destinations.forEach(destination => {
//         const div = document.createElement("div");
//         const heading = document.createElement("h3");
//         const paragraph = document.createElement("p");

//         div.className += "destination-card";


//         heading.textContent = destination.title;
//         paragraph.textContent = destination.description;
//         cards.appendChild(div)
//         div.appendChild(heading);
//         div.appendChild(paragraph);
//     });
// })
const searchQuery = () => {
    let query = currentURL.search.split('=')[1];
    console.log(query)
    destinationsLowerCase = destinationCards;
    const destinationArr = Array.from(destinationsLowerCase);

    if (query !== undefined) {
        destinationArr.filter(destination => destination.innerText.includes(query) || destination.innerText.toLowerCase().includes(query) ? destination : destination.style.display = 'none');
        destinationArr.forEach(destination => destination.style.display === 'none' ? notFound.innerHTML = "<h2 style='text-align: center;'>Kein Artikel Gefunden<h2>" : notFound.style.display = 'none')
    }

    // dest.filter(card => card.innerText.includes(query) ? console.log(cards.appendChild(card)) : null);
    // destinations.filter(destination => destination.title.includes(query) || destination.description.includes(query) ? console.log(destination) : null)
}
window.addEventListener('DOMContentLoaded', searchQuery());




// destinationCards.forEach(card => {card.innerText.includes(query) ? card : null});