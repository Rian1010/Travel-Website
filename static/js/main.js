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

const destinations = [{
        id: 1,
        image: '',
        title: 'Vereisen Sie in die Türkei!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptate, corrupti ipsam soluta tempora magni distinctio illum non. Vitae.'
    },
    {
        id: 2,
        image: '',
        title: 'Ferien in Singapore!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptate, corrupti ipsam soluta tempora magni distinctio illum non. Vitae.'
    },
    {
        id: 3,
        image: '',
        title: 'Ab nach Mauritius!',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptate, corrupti ipsam soluta tempora magni distinctio illum non. Vitae.'
    },
    {
        id: 4,
        image: '',
        title: 'Die Chinesische Kultur.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic voluptate, corrupti ipsam soluta tempora magni distinctio illum non. Vitae.'
    },
]
window.addEventListener('DOMContentLoaded', () => {
    destinations.forEach(destination => {
        const div = document.createElement("div");
        const heading = document.createElement("h3");
        const paragraph = document.createElement("p");

        div.className += "destination-card";

        
        heading.textContent = destination.title;
        paragraph.textContent = destination.description;
        cards.appendChild(div)
        div.appendChild(heading);
        div.appendChild(paragraph);
    });
})
const searchQuery = () => {
    let query = currentURL.search.split('=')[1];
    
    const cardsArr = Array.from(destinationCards);
    nodes = cards.childNodes;
    // nodesArr = Array.from(nodes);
    // let arr = []
    // for (let i=0; i<nodes.length; i++) {
    //     arr.push(nodes[i]);
    // }

    // console.log(Array.prototype.slice.call(nodes));

    // console.log([...nodes]);
    console.log(query)
    console.log(cardsArr)
    console.log(nodes)
    cardsArr.filter(card => card.innerText.includes(query) ? console.log(card) : null);
    // destinations.filter(destination => destination.title.includes(query) || destination.description.includes(query) ? console.log(destination) : null)
}
window.addEventListener('DOMContentLoaded', searchQuery());



// destinationCards.forEach(card => {card.innerText.includes(query) ? card : null});
