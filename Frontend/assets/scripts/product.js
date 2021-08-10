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

        document.title = " Orifurniture  - " + product.name

        // Fonction pour completer les infos produits

        function addCard(product) {

            cardImg.src = product.imageUrl;
            cardName.innerHTML = product.name;
            cardDescription.innerHTML = product.description;
            cardPrice.innerHTML = convertPrice(product.price);

        
        varnishOption(product);
        }
    })
    .catch((erreur) => console.log('Erreur : ' + erreur));

    // Besoin d'un panier dans le localStorage.
    // Vérifie si il existe, sinon le créer (peu importe la page produit).


if(localStorage.getItem("userBasket")){

	console.log("Administration : le panier de l'utilisateur existe dans le localStorage");

}else{

	console.log("Administration : Le panier n'existe pas, il va être créer et l'envoyer dans le localStorage");

  	//Le panier est un tableau de produits

  	let initBasket = [];

  	localStorage.setItem("userBasket", JSON.stringify(initBasket));

  };

  //Tableau et objet demandé par l'API pour la commande

  	// let contact;
  	// let products = [];

	//L'user a maintenant un panier

	let userBasket = JSON.parse(localStorage.getItem("userBasket"));


// Ajouter au panier

addBtn.addEventListener('click' ,function() {

    let productAdded = {
        name: cardName.innerHTML,
        price: parseFloat(cardPrice.innerHTML),
        quantity: parseFloat(quantity.value),
        varnish: varnish.value,
        _id: id,
    };




    if ((varnish.value !== 'Sélectionnez votre vernis')) {

    // Si le localStorage existe, on le récupère, on ajoute le userBasket, 
    // puis on le renvoie avec la modification

            if(localStorage.getItem("userBasket") !== null) {

                initBasket = JSON.parse(localStorage.getItem("userBasket"));
                
            } 

        initBasket.push(productAdded);
        localStorage.setItem("userBasket", JSON.stringify(initBasket));
        
            
        let = textConfirm = document.querySelector('#text-confirmation');
        textConfirm.innerHTML = 'Produit(s) bien ajouté(s) au panier !';
        textConfirm.classList.remove('d-none');
        textConfirm.classList.add('btn-success');
        quantity.value = 1;

        setTimeout(clearBtnSuccess, 2500);

    } else {

        let = textConfirm = document.querySelector('#text-confirmation');
        textConfirm.innerHTML = 'Veuillez choisir votre vernis';
        textConfirm.classList.remove('d-none');
        textConfirm.classList.add('btn-danger');
        varnish.classList.remove('btn-light');
        varnish.classList.add('btn-danger');

        setTimeout(clearBtnDanger, 2500);
    }
})

    
