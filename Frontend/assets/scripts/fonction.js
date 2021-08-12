const url = `http://localhost:3000/api/furniture`;

let copyLs = JSON.parse(localStorage.getItem('userBasket'));
let totalPrice = document.querySelector('#totalPrice');
let count = document.querySelector('#count');

let totalPay;
let totalCount;

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

// Fonction reload

function reload() {

  document.location.reload();

}


// Total panier et total Articles 

function totalBasket() {

  totalPay = 0;
  totalCount = 0;

  JSON.parse(localStorage.getItem('userBasket')).forEach(element => {

      totalPay += (element.price * element.quantity);
      totalCount += element.quantity;

  });

  totalPrice.innerHTML = `${totalPay} €`;
  count.innerHTML = totalCount;

}

// Reset du panier et reload de la page

function clearBasket() {

    const btnClear = document.querySelector('#btnClear');

    btnClear.addEventListener('click', () => {

        localStorage.clear();
        document.location.reload();
    });
}
