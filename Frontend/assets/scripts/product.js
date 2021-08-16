if (localStorage.getItem('userBasket') !== null) {
  totalBasket();
}

// Récupération de l'ID du produit que l'on veut afficher

let params = new URLSearchParams(window.location.search);
let id = params.get('_id');

const cardImg = document.getElementById('productimg');
const cardName = document.getElementById('productname');
const cardDescription = document.getElementById('productdescription');
const cardPrice = document.getElementById('productprice');
const varnish = document.getElementById('varnish');
const quantity = document.getElementById('quantity');
const addBtn = document.querySelector('#addCard');

let textConfirm = null;
const product = null;

// Modification de l'url de l'API

const NEWURL = `http://localhost:3000/api/furniture/${id}`;

// Fetch de l'url correspondante au produit souhaité

fetch(NEWURL)
  .then((response) => response.json())
  .then((data) => {
    const product = data;
    addCard(product);

    // Affichage du nom de la page en fonction du produit sélectionné

    document.title = ' Orifurniture  - ' + product.name;

    // Fonction pour completer les infos produits

    function addCard(product) {
      cardImg.src = product.imageUrl;
      cardName.innerHTML = product.name;
      cardDescription.innerHTML = product.description;
      cardPrice.innerHTML = product.price / 100 + ' €';

      varnishOption(product);
    }
  })
  .catch((erreur) => console.log('Erreur : ' + erreur));

// Ajouter au panier

addBtn.addEventListener('click', function () {
  
  // Creer un nouveau produit

  let productAdded = {
    name: cardName.innerHTML,
    price: parseFloat(cardPrice.innerText.split(' ').join('')),
    quantity: parseFloat(quantity.value),
    varnish: varnish.value,
    _id: id,
  };

  if (varnish.value !== 'Sélectionnez votre vernis') {

    //   Vérifie la présence du produit, si oui passe en TRUE et sauvegarde sa place

    let isAlreadyPresent = false;
    let indexModification;

    for (items of userBasket) {

        switch (items.varnish) {

          case productAdded.varnish:

          isAlreadyPresent = true;
          indexModification = userBasket.indexOf(items);

        }
    }

    // Si déja présent incrémente la quantité

    if(isAlreadyPresent) {

        userBasket[indexModification].quantity =
             +userBasket[indexModification].quantity + +productAdded.quantity;

        localStorage.setItem('userBasket', JSON.stringify(userBasket));


        // Sinon ajoute le produit au localStorage

    } else {

        userBasket.push(productAdded);
        localStorage.setItem('userBasket', JSON.stringify(userBasket));

    }

    // Message de confirmation d'ajout + pop modal 

    let = textConfirm = document.querySelector('#text-confirmation');
    textConfirm.innerHTML = 'Produit(s) bien ajouté(s) au panier !';
    textConfirm.classList.remove('d-none');
    textConfirm.classList.add('btn-success');
    quantity.value = 1;
    clickBtn();

    function clickBtn() {
      document.querySelector('#btnmodal').click();
    }
    
    totalBasket();

    setTimeout(clearBtnSuccess, 2500);
    
  } else {

    // Message d'erreur indiquant de choisir une option de vernis.

    let = textConfirm = document.querySelector('#text-confirmation');
    textConfirm.innerHTML = 'Veuillez choisir votre vernis';
    textConfirm.classList.remove('d-none');
    textConfirm.classList.add('btn-danger');
    varnish.classList.remove('btn-light');
    varnish.classList.add('btn-danger');

    setTimeout(clearBtnDanger, 2500);
  }
});

// Si le panier contient quelque chose on affiche le nombre d'article et le total €

if (localStorage.getItem('userBasket') !== null) {
  totalBasket();
}
