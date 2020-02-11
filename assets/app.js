const cartItem = document.querySelector('.cart-item');
// const celebList = document.querySelector('.celeb-list');
// const headerContainer = document.querySelector('.header-container');

const celebrities = document.querySelector('.detail-row'),
      celebList = document.querySelector('.celeb-list');

loadEventListeners();

function loadEventListeners() {
    celebrities.addEventListener('click', addACeleb);
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}

function addACeleb(e) {
    e.preventDefault();

    if(e.target.classList.contains('addButton')) {
        const celeb = e.target.parentElement.parentElement;

        getCelebInfo(celeb);
    }
}

function getCelebInfo(celeb) {
    const celebInfo = {
        image: celeb.querySelector('img').src,
        title: celeb.querySelector('h4').textContent,
        age: celeb.querySelector('span').textContent,
        id: celeb.querySelector('button').getAttribute('data-id')
    }
    addIntoList(celebInfo);
}

function addIntoList(celeb) {

    const row = document.createElement('div');
    row.classList.add('celeb-card');

    row.innerHTML = `
        <img src="${celeb.image}" class="celeb-img">
        <h5>${celeb.title}</h5>
        <p>${celeb.age}</p>
        <a href="#" class="cancel-celeb" data-id="${celeb.id}">X</a>
    `;

    celebList.appendChild(row);

    saveIntoStorage(celeb);

}

function saveIntoStorage(celeb) {
    let celebs = getCelebFromStorage();

    celebs.push(celeb);

    localStorage.setItem('celebs', JSON.stringify(celebs));
}

function getCelebFromStorage() {
    let celebs;

    if(localStorage.getItem('celebs') === null) {
        celebs = [];
    } else {
        celebs = JSON.parse(localStorage.getItem('celebs'));
    }
    return celebs;
}

//   remove celebrity from list and clear the whole list

celebList.addEventListener('click', e => {
    let celeb, celebId;

    if(e.target.classList.contains('cancel-celeb')) {
        e.target.parentElement.remove();
        celeb = e.target.parentElement;
        celebId = celeb.querySelector('a').getAttribute('data-id');
    }

    removeCelebLocalStorage(celebId);

});

function removeCelebLocalStorage(id) {
    let celebsLS = getCelebFromStorage();

    celebsLS.forEach(function(celebLS, index) {
        if(celebLS.id === id) {
            celebsLS.splice(index, 1);
        }
    });

    localStorage.setItem('celebs', JSON.stringify(celebsLS));
}

// clear list

cartItem.addEventListener('click', e => {
    if(e.target.classList.contains('clear-list')) {
        e.target.parentElement.children[1].remove();
    }

    clearLocalStorage();
});

function clearLocalStorage() {
    localStorage.clear();
}


// // display list on click

function removeCeleb() {
    cartItem.classList.toggle('cart-display');
}

function getFromLocalStorage() {
    let celebsLS = getCelebFromStorage();

    celebsLS.forEach(function(celeb) {
        const row = document.createElement('div');
        row.classList.add('celeb-card');
        
        row.innerHTML = `
        <img src="${celeb.image}" class="celeb-img">
        <h5>${celeb.title}</h5>
        <p>${celeb.age}</p>
        <a href="#" class="cancel-celeb" data-id="${celeb.id}">X</a>
        `;

        celebList.appendChild(row);
    });
}