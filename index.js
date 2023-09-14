const data = [{
        name : "Claudine Jackson",
        rating : 3,
        description : "jksdjksdjfksjdfkjsdfkjsdkfj",
        pp : "https://risibank.fr/cache/medias/0/1/145/14541/full.png"
    },
    {   
        name : "Claud Jason",
        rating : 4,
        description : "jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
        pp : "https://yt3.googleusercontent.com/qM92K6gt5rWgnT6aOXhpuI9m3uTgmzMxEzQad2AeXxA5q8eJq1ZJFMmQzlZToekK1F28Kak4bQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {   
        name : "Cla Jas",
        rating : 1,
        description : "bbbbbbbbbbbbbbbbbbbbbbbbbb",
        pp : "https://pbs.twimg.com/ext_tw_video_thumb/1395120239264862213/pu/img/7iRgyl9duXpjLAK_.jpg"
    },
    {   
        name : "Claud Jason",
        rating : 4,
        description : "jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
        pp : "https://yt3.googleusercontent.com/qM92K6gt5rWgnT6aOXhpuI9m3uTgmzMxEzQad2AeXxA5q8eJq1ZJFMmQzlZToekK1F28Kak4bQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        name : "Claudine Jackson",
        rating : 3,
        description : "jksdjksdjfksjdfkjsdfkjsdkfj",
        pp : "https://risibank.fr/cache/medias/0/1/145/14541/full.png"
    },
    {   
        name : "Cla Jas",
        rating : 1,
        description : "bbbbbbbbbbbbbbbbbbbbbbbbbb",
        pp : "https://pbs.twimg.com/ext_tw_video_thumb/1395120239264862213/pu/img/7iRgyl9duXpjLAK_.jpg"
    }
]
const carousel = document.querySelector(".carousel");

function cardConstruction(name, rating, description, profilPic){
    const rest = 5 - rating;
    const carouselCard = document.createElement("div");
    carouselCard.className = "carousel-card";

    const photoName = document.createElement("div");
    photoName.className = "photoName";

    const profilePic = document.createElement("img");
    profilePic.className = "profilePic";
    profilePic.src = profilPic;
    profilePic.alt = "error";

    const h1 = document.createElement("h1");
    h1.textContent = name;

    const stars = document.createElement("div");
    stars.className = "stars";

    for (i = 0 ; i < rating; i++) {
            const star = document.createElement("i");
            star.className = "fa-solid fa-star";
            star.style.color = '#FFC436';
            stars.appendChild(star);
    }
    for (i = 0 ; i < rest; i++) {
        const star = document.createElement("i");
        star.className = "fa-regular fa-star";
        star.style.color = '#FFC436';
        stars.appendChild(star);
    }

    const h2 = document.createElement("h2");
    h2.textContent = description;

    photoName.appendChild(profilePic);
    photoName.appendChild(h1);
    carouselCard.appendChild(photoName);
    carouselCard.appendChild(stars);
    carouselCard.appendChild(h2);
    carousel.appendChild(carouselCard);
}

let from = 0;
let to = 3;


function display () {
    const dataToDisplay = data.slice(from, to);
    dataToDisplay.forEach((e) => {
        cardConstruction(e.name, e.rating, e.description, e.pp);
    });  
}
function remove () {
    for (let i = carousel.children.length - 1; i >= 0; i--) {
        const child = carousel.children[i];
        
        if (child.tagName.toLowerCase() === "btn") {
            // L'enfant est un bouton, ne faites rien
        } else {
            // L'enfant n'est pas un bouton, supprimez-le
            carousel.removeChild(child);
        }
    }
}
display()

document.querySelector(".carousel-btn-prev").addEventListener('click', () => {
    
    from-=3;
    to-=3;
    remove()
    display()
})

document.querySelector(".carousel-btn-next").addEventListener('click', () => {
    from+=3;
    to+=3;
    remove()
    display()
})





// data.map((e) => {
//     cardConstruction(e.name, e.rating, e.description, e.pp)
// })

