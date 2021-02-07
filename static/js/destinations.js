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
    destinationsLowerCase = destinationCards;
    const destinationArr = Array.from(destinationsLowerCase);

    if (query !== undefined) {
        destinationArr.filter(destination => destination.innerText.includes(query) || destination.innerText.toLowerCase().includes(query) ? destination : destination.style.display = 'none');
        destinationArr.forEach(destination => destination.style.display === 'none' ? notFound.innerHTML = "<h2 style='text-align: center;'>Kein Artikel Gefunden<h2>" : notFound.style.display = 'none')
    }
}

window.addEventListener('DOMContentLoaded', searchQuery());