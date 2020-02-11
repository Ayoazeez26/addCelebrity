const cartItem = document.querySelector('.cart-item');
const celebList = document.querySelector('.celeb-list');
const headerContainer = document.querySelector('.header-container');

// add celebrity to list

document.querySelectorAll('#addButton').forEach(item => {
    item.addEventListener('click', event => {
      const celebList = document.querySelector('.celeb-list');

      const celebCard = document.createElement('div');

      celebCard.classList.add('celeb-card');

      const celebPic = document.createElement('img');

      celebPic.src = event.target.parentElement.parentElement.children[0].src;

      celebPic.alt = event.target.parentElement.parentElement.children[0].alt;

      celebPic.classList.add('celeb-img');

      const celebName = document.createElement('h5');

      celebName.textContent = event.target.parentElement.parentElement.children[1].children[0].textContent;

      const celebAge = document.createElement('p');
      
      celebAge.textContent = event.target.parentElement.parentElement.children[1].children[2].textContent;

      const cancelCeleb = document.createElement('a');

      cancelCeleb.textContent = 'X';

      cancelCeleb.classList.add('cancel-celeb');

      celebCard.appendChild(celebPic);
      celebCard.appendChild(celebName);
      celebCard.appendChild(celebAge);
      celebCard.appendChild(cancelCeleb);

      celebList.appendChild(celebCard);
    })
  })

//   remove celebrity from list and clear the whole list

celebList.addEventListener('click', e => {
    if(e.target.classList.contains('cancel-celeb')) {
        e.target.parentElement.remove();
    }
});

// clear list

celebList.addEventListener('click', e => {
    if(e.target.classList.contains('clear-list')) {
        console.log('this should clear the list');
        // e.target.parentElement.children[1].remove();
    }
});


// display list on click

function removeCeleb() {
    cartItem.classList.toggle('cart-display');
}

// add list to local storage

function addCeleb() {

}

// load from local storage

function loadCeleb() {
    let celeb;
    const celebLS = localStorage.getItem('addedCeleb');
    if(celebLS === null) {
        celeb = [];
    } else {
        celeb = JSON.parse(celebLS);
    }
    return celeb;
}

// load celebs on-page-load
document.addEventListener('DOMContentLoaded', celebOnLoad);

function celebOnLoad() {
    let celebs = loadCeleb();

    celebs.forEach(function(event) {
        const celebList = document.querySelector('.celeb-list');

        const celebCard = document.createElement('div');
  
        celebCard.classList.add('celeb-card');
  
        const celebPic = document.createElement('img');
  
        celebPic.src = event.target.parentElement.parentElement.children[0].src;
  
        celebPic.alt = event.target.parentElement.parentElement.children[0].alt;
  
        celebPic.classList.add('celeb-img');
  
        const celebName = document.createElement('h5');
  
        celebName.textContent = event.target.parentElement.parentElement.children[1].children[0].textContent;
  
        const celebAge = document.createElement('p');
        
        celebAge.textContent = event.target.parentElement.parentElement.children[1].children[2].textContent;
  
        const cancelCeleb = document.createElement('a');
  
        cancelCeleb.textContent = 'X';
  
        cancelCeleb.classList.add('cancel-celeb');
  
        celebCard.appendChild(celebPic);
        celebCard.appendChild(celebName);
        celebCard.appendChild(celebAge);
        celebCard.appendChild(cancelCeleb);
  
        celebList.appendChild(celebCard);
    })
}