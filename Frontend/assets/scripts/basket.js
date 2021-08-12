
let basketInfo = document.querySelector('#basketInfo');
let basket = document.querySelector('#basket');
let basketList = document.querySelector('#basketList');


clearBasket();

// Si le panier contient quelque chose on affiche le formulaire 
// et on masque le message du panier vide.

if(localStorage.getItem('userBasket') !== null) {

    totalBasket();
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

// Récupération des inputs depuis le DOM

const submit = document.querySelector('#submit');
let inputfirstName = document.querySelector('#firstName');
let inputlastName = document.querySelector('#lastName');
let inputEmail = document.querySelector('#email');
let inputAddress = document.querySelector('#address');
let inputCity = document.querySelector('#city');
let inputCountry = document.querySelector('#country');

let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let email = document.querySelector('#mail');
let adresse = document.querySelector('#adresse');
let ville = document.querySelector('#ville');
let pays = document.querySelector('#pays');

const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

submit.addEventListener('click', function (e) {

    // Gestion des messages d'erreur pour chaques champs non complétés

    if (regexName.test(inputfirstName.value) !== true) {
      prenom.classList.remove('invalid-feedback');
      e.preventDefault();
      setTimeout(function clearError() {
        prenom.classList.add('invalid-feedback');
      }, 2000);
    }
      

    else if (regexName.test(inputfirstName.value) !== true) {
      nom.classList.remove('invalid-feedback');
      e.preventDefault();
      setTimeout(function clearError() {
        nom.classList.add('invalid-feedback');
      }, 2000);
    }
      
      
    else if (regexMail.test(inputEmail.value) !== true) {
      email.classList.remove('invalid-feedback');
      e.preventDefault();
      setTimeout(function clearError() {
        email.classList.add('invalid-feedback');
      }, 2000);
    }
      

    else if (regexAddress.test(inputAddress.value) !== true) {
      adresse.classList.remove('invalid-feedback');
      e.preventDefault();
      setTimeout(function clearError() {
        adresse.classList.add('invalid-feedback');
      }, 2000);

    }
      
    else if (regexCity.test(inputCity.value) !== true) {
      ville.classList.remove('invalid-feedback');
      e.preventDefault();
      setTimeout(function clearError() {
        ville.classList.add('invalid-feedback');
      }, 2000);}
    
    else {

      // Préparation des infos pour la requête POST

      let products =[];
      for(listId of copyLs) {

        products.push(listId._id);

      }

      let contact = {

        firstName: inputfirstName.value,
        lastName: inputlastName.value,
        city: inputCity.value,
        address: inputAddress.value,
        email: inputEmail.value,
      };



    // Envoi de la requête avec l'entête.
    // changement de page avec un localStorage contenant l'orderId et le total.

    fetch(`${url}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({contact,products}),
    })
      .then((response) => response.json())
      .then((data) => {

          localStorage.setItem("order", JSON.stringify(data));
          localStorage.setItem("total", totalPay);

          document.location.href = "confirmation.html";

      })
      .catch((e) => {

        alert("Une erreur s'est produite : " + e);
        console.log("Une erreur s'est produite : " + e);

      });
  }
});







