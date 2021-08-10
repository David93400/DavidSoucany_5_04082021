const url = `http://localhost:3000/api/furniture`;



// Convertisseur de prix

function convertPrice(productPrice) {
  let price = `${productPrice}`;
  price = Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
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


// constructeur class produit

class Product {
  constructor(id, name, description, price, option, quantity, imgurl) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = +price;
    this.option = option;
    this.quantity = +quantity;
    this.imgurl = imgurl;
  }
}

function clearBtnDanger(){

textConfirm.classList.add('d-none');
textConfirm.classList.remove('btn-danger');
varnish.classList.add('btn-light');
varnish.classList.remove('btn-danger');
}

function clearBtnSuccess(){

textConfirm.classList.add('d-none');
textConfirm.classList.remove('btn-success');
}



 