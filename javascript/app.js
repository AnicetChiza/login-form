const pop = document.querySelector('.popup');
const closeModal = document.querySelector('.close');
const openModalButtons = document.querySelectorAll('button');
const overall = document.querySelector('.overall');

// Fonction pour ouvrir le modal
const openModalFunction = function() {
    pop.classList.remove('hidden');
    overall.classList.remove('hidden');
};

// Boucle pour ajouter un écouteur d'événement à chaque bouton pour ouvrir le modal
for (let i = 0; i < openModalButtons.length; i++) {
    openModalButtons[i].addEventListener('click', function() {
        // Vérifie si le formulaire est valide avant d'ouvrir le modal
        if (validateForm()) {
            openModalFunction();
        }
    });
}

// Fonction pour fermer le modal
const closeModalFunction = function() {
    pop.classList.add('hidden');
    overall.classList.add('hidden');
};

// Écouteur d'événement pour le bouton de fermeture du modal
closeModal.addEventListener('click', closeModalFunction);

// Écouteur d'événement pour l'arrière-plan du modal pour le fermer en dehors du modal
overall.addEventListener('click', closeModalFunction);

function validateForm() {
    let names = document.querySelector('.name').value.trim();
    let email = document.querySelector('.email').value.trim();
    let password = document.querySelector('.password').value.trim();
    let errorName = document.querySelector('.error-name');
    let errorEmail = document.querySelector('.error-email');
    let errorPassword = document.querySelector('.error-password');
    let emptyData = document.querySelector('.empty-data');

    if (names === '' && email === '' && password === '') {
        emptyData.style.display = 'inline-block';
        return false;
    }
    if (names == '') {
        errorName.style.display = 'inline-block';
        return false;
    }

    if (email == '') {
        errorEmail.style.display = 'inline-block';
        return false;
    }
    if (password == '') {
        errorPassword.style.display = 'inline-block';
        return false;
    }
    return true;
}

/*const pop = document.querySelector('.popup');
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