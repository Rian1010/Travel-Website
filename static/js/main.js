// Parallax Scroll Effect 

const img = document.querySelectorAll('.parallax');
const banner_title = document.querySelector('.banner-title');

window.onscroll = () => {
    let scroll = window.pageYOffset;

    img.forEach(e => {
        let speed = e.dataset.speed;
        e.style.transform = `translateY(${scroll * -speed}px)`
        banner_title.style.opacity = - scroll / (banner_title.offsetHeight) + 5
    });
};


// Search Functionality
const currentURL = new URL(window.location);
const cards = document.querySelectorAll('.destination-card');

const searchQuery = () => {
    let query = currentURL.search.split('=')[1];
    console.log(query)
    cards.forEach(card => {card.innerText.includes(query) ? console.log(card) : null});
}
searchQuery();