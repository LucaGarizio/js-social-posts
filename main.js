// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.

// Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// **BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)

// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).

// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



const container = document.getElementById("container");

// creare ciclo per popolamento del dom dinamico
posts.forEach(element => {
    const populateDom = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author"> ${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}.</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter ">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;

    container.innerHTML += populateDom;
});



let likedBtns = document.querySelectorAll(".like-button");

// evento per cambio color del tasto mi piace
likedBtns.forEach(bottone => {
    bottone.addEventListener("click", function(event) {
        event.preventDefault();
        const likedPosts = [];
        // Verifica se il bottone ha già la classe "active"
        if (bottone.classList.contains("active")) {
            // Se sì, rimuovi la classe "active"
            bottone.classList.remove("active");

            // Ottenere l'ID del post associato al bottone
            let indiceBoxLike = bottone.getAttribute("data-postid");

            // Ottenere il valore attuale del contatore
            let sommaAttuale = parseInt(document.getElementById(`like-counter-${indiceBoxLike}`).innerHTML);

            // Diminuire il contatore di 1
            let sommaNuova = sommaAttuale - 1;

            // Aggiornare il contatore nel DOM
            document.getElementById(`like-counter-${indiceBoxLike}`).innerHTML = sommaNuova;

            // rimuove i dati dall'array
            likedPosts.pop(indiceBoxLike);

            console.log(likedPosts);
              
        } else {
            // Se il bottone non ha la classe "active"
            bottone.classList.add("active");

            // // Ottenere l'ID del post associato al bottone
            let indiceBoxLike = bottone.getAttribute("data-postid");

            // // Ottenere il valore attuale del contatore
            let sommaAttuale = parseInt(document.getElementById(`like-counter-${indiceBoxLike}`).innerHTML);

            // aumenta il contatore di 1
            let sommaNuova = sommaAttuale + 1;
            document.getElementById(`like-counter-${indiceBoxLike}`).innerHTML = sommaNuova;

            // aggiorna l'array
            likedPosts.push(indiceBoxLike);

            console.log(likedPosts);
        }
    });
});

