/*document.addEventListener('DOMContentLoaded', function() {
    const pop = document.querySelector('.popup');
    const closeModal = document.querySelector('.close');
    const openModalButtons = document.querySelectorAll('button');
    const overall = document.querySelector('.overall');

    const openModalFunction = function() {
        pop.classList.remove('hidden');
        overall.classList.remove('hidden');
        setTimeout(closeModalFunction, 10000);
    };

    for (let i = 0; i < openModalButtons.length; i++) {
        openModalButtons[i].addEventListener('click', function() {
            if (validateForm()) {
                openModalFunction();
            }
        });
    }

    const closeModalFunction = function() {
        pop.classList.add('hidden');
        overall.classList.add('hidden');
    };

    closeModal.addEventListener('click', closeModalFunction);

    overall.addEventListener('click', closeModalFunction);*/

/*
const pop = document.querySelector('.popup');
const closeModal = document.querySelector('.close');
const openModal = document.querySelectorAll('button');
const overall = document.querySelector('.overall');


for (let i = 0; i < openModal.length; i++)
    openModal[i].addEventListener('click', function() {
        pop.classList.remove('hidden');
        overall.classList.remove('hidden');
    });


const closeModalFunction = function() {
    pop.classList.add('hidden');
    overall.classList.add('hidden');
};

closeModal.addEventListener('click', closeModalFunction);
overall.addEventListener('click', closeModalFunction);*/

const pop = document.querySelector('.popup');
const closeModal = document.querySelector('.close');
const openModal = document.querySelectorAll('button');
const overall = document.querySelector('.overall');

console.log("pop:", pop);
console.log("closeModal:", closeModal);
console.log("openModal:", openModal);
console.log("overall:", overall);

// Fonction pour ouvrir le modal
const openModalFunction = function() {
    console.log("Ouverture du modal");
    pop.classList.remove('hidden');
    overall.classList.remove('hidden');
};

// Ajoute des écouteurs d'événements à tous les boutons pour ouvrir le modal
for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function() {
        // Vérifie si le formulaire est valide avant d'ouvrir le modal
        if (validateForm()) {
            openModalFunction();
        }
    });
}

// Fonction pour fermer le modal
const closeModalFunction = function(event) {
    // Empêche la propagation de l'événement si le clic provient du bouton de fermeture
    if (event.target === closeModal) {
        event.stopPropagation();
    }
    console.log("Fermeture du modal");
    pop.classList.add('hidden');
    overall.classList.add('hidden');
};

// Ajoute un écouteur d'événements pour fermer le modal lorsque le bouton de fermeture est cliqué
closeModal.addEventListener('click', closeModalFunction);

// Ajoute un écouteur d'événements pour fermer le modal lorsque l'arrière-plan est cliqué
overall.addEventListener('click', closeModalFunction);

// Fonction de validation du formulaire
function validateForm() {
    let names = document.querySelector('.name').value.trim();
    let email = document.querySelector('.email').value.trim();
    let password = document.querySelector('.password').value.trim();
    let errorName = document.querySelector('.error-name');
    let errorEmail = document.querySelector('.error-email');
    let errorPassword = document.querySelector('.error-password');
    let emptyData = document.querySelector('.empty-data');

    console.log("names:", names);
    console.log("email:", email);
    console.log("password:", password);

    // Vérifie si tous les champs sont vides
    if (names === '' && email === '' && password === '') {
        emptyData.style.display = 'inline-block';
        return false;
    }

    // Vérifie chaque champ individuellement et affiche les messages d'erreur appropriés
    if (names === '') {
        errorName.style.display = 'inline-block';
        return false;
    }

    if (email === '') {
        errorEmail.style.display = 'inline-block';
        return false;
    }

    if (password === '') {
        errorPassword.style.display = 'inline-block';
        return false;
    }

    // Si le formulaire est valide, retourne true
    return true;
}