let copyLs = JSON.parse(localStorage.getItem('userBasket'));

let basketInfo = document.querySelector('#basketInfo');
let basket = document.querySelector('#basket');
let basketList = document.querySelector('#basketList');

totalBasket();

// Si le panier contient quelque chose on affiche le formulaire 
// et on masque le message du panier vide.

if(localStorage.getItem('userBasket') !== null) {

    basketInfo.classList.add('d-none');
    basket.classList.remove('d-none');
}

for (produit in copyLs) {

    let productPrice = copyLs[produit].price * copyLs[produit].quantity;

    basketList.innerHTML += `

        <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0"><strong>${copyLs[produit].name}</strong> x ${copyLs[produit].quantity}</h6>
                <small class="text-muted">Finition : ${copyLs[produit].varnish}</small>
              </div>
              <span id="price" class="text-muted">${productPrice} €</span>
            </li>`;
}



