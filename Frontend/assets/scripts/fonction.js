const url = `http://localhost:3000/api/furniture`;
let totalPrice = document.querySelector('#totalPrice');
let count = document.querySelector('#count');

// Convertisseur de prix

function convertPrice(productPrice) {
  let price = `${productPrice}`;
  price = Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price / 100);
  return price;
}

// Fonction pour le choix des vernis

function varnishOption(product){
const varnishChoice = document.getElementById('varnish');
    for (let varnish of product.varnish) {
    varnishChoice.innerHTML += `<option value="${varnish}">${varnish}</option>`;              
    }
    return varnish.value;
};

// Suppression de l'alerte Vernis

function clearBtnDanger(){

textConfirm.classList.add('d-none');
textConfirm.classList.remove('btn-danger');
varnish.classList.add('btn-light');
varnish.classList.remove('btn-danger');
}

// Suppression de l'alerte d'ajout produit

function clearBtnSuccess(){

textConfirm.classList.add('d-none');
textConfirm.classList.remove('btn-success');
}


// Total panier et total Articles sur les pages concernées

function totalBasket() {

  let totalPay = 0;
  let totalCount = 0;

  JSON.parse(localStorage.getItem('userBasket')).forEach(element => {

      totalPay += (element.price * element.quantity);
      totalCount += element.quantity;

  });

  totalPrice.innerHTML = `${totalPay} €`;
  count.innerHTML = totalCount;
  
}

