// Récupération de l'ID du produit que l'on veut afficher

const SEARCHPARAMS = new URLSearchParams(window.location.search);
const ID = SEARCHPARAMS.get('_id');

const cardImg = document.getElementById('productimg');
const cardName = document.getElementById('productname');
const cardDescription = document.getElementById('productdescription');
const cardPrice = document.getElementById('productprice');



// Modification de l'url de l'API

const NEWURL = `http://localhost:3000/api/furniture/${ID}`;


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

        
        varnish(product);
    }

            // Fonction pour le choix des vernis

            function varnish(product){
            const varnishChoice = document.getElementById('varnish');
                for (let varnish of product.varnish) {
                varnishChoice.innerHTML += `<option value="${varnish}">${varnish}</option>`;
                }
            };
    })
    .catch((erreur) => console.log('Erreur : ' + erreur));
    
        


    
    
