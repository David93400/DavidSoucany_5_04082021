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


// Modification de l'url de l'API

const NEWURL = `http://localhost:3000/api/furniture/${id}`;


// Fetch de l'url correspondante au produit souhaité

fetch(NEWURL)
    .then((response) => response.json())
    .then((data) => {
        const product = data;
        addCard(product);

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



    

    addBtn.addEventListener('click', addProduct)

    function addProduct() {

        let productAdded = {
            name: cardName.innerHTML,
            varnish: varnish.value,
            price: parseFloat(cardPrice.innerHTML),
            quantity: parseFloat(quantity.value),
        };

        // Si aucun vernis n'est sélectionné, affichage d'un message d'erreur.

        if(varnish.value == 'Sélectionnez votre vernis'){
            
            textConfirm = document.querySelector('#text-confirmation');
            textConfirm.innerHTML = 'Veuillez choisir votre vernis';
            textConfirm.classList.remove('d-none');
            textConfirm.classList.add('btn-danger');
            varnish.classList.remove('btn-light');
            varnish.classList.add('btn-danger');

            setTimeout(clearBtnDanger, 2500);

        }

        let tabProducts = [];

        // si LocalStorage existe, on récupere son contenu pour le mettre dans le array
        // ensuite on le renvoie avec le/les nouveau(x) produit(s).

        if(localStorage.getItem("products" !== null)) {

            tabProducts = JSON.parse(localStorage.getItem("products"));
        }

        // Si le LocalStorage est vide, on le creer avec le/les produits ajouté(s)

        tabProducts.push(productAdded);
        localStorage.setItem("products", JSON.stringify(tabProducts));

        // Confirmation d'ajout visuel


        if(varnish.value !== 'Sélectionnez votre vernis' && quantity.value == 1) {

            textConfirm = document.querySelector('#text-confirmation');
            textConfirm.innerHTML = 'Votre Produit a bien été ajouté au panier';
            textConfirm.classList.remove('d-none');
            textConfirm.classList.add('btn-success');

            setTimeout(clearBtnSuccess, 2500);

        } else if ((varnish.value !== 'Sélectionnez votre vernis' && quantity.value > 1)) {

            textConfirm = document.querySelector('#text-confirmation');
            textConfirm.innerHTML = 'Vos Produits ont bien été ajoutés au panier';
            textConfirm.classList.remove('d-none');
            textConfirm.classList.add('btn-success');
            quantity.value = 1;

            setTimeout(clearBtnSuccess, 2500);
        }
    }
    
    
