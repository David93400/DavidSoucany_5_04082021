// Fetch de l'url API

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    addProducts(data);
  })
  .catch((erreur) => console.log('erreur : ' + erreur));

//   Fonction de création des fiches produits de l'index

function addProducts(data) {

  // itération sur chaques éléments de la liste

  for (produit of data) {
      

    //   fonction convertisseur de prix

    const price = convertPrice(produit.price);

    // Récuprer la section et creer une card pour chaque produit

    const card = document.querySelector(`#list`);
    card.innerHTML += `<div class="col-sm-6 col-md-4 d-flex justify-content-center">
            <div class="card border-0 shadow-lg my-5" style="width: 20rem">
              <img src="${produit.imageUrl}" class="card-img-top"/>
              <div class="card-body bg-dark text-light">
                <h5 class="card-title fs-3 my-3 paprika">${produit.name}</h5>
                <p class="card-text">${produit.description}</p>
                <p class="card-price fw-bolder fs-2">${price}</p>
                <a href="product.html?_id=${produit._id}" class="btn btn-light">En savoir plus</a>
              </div>
            </div>
          </div>`;
  }
}
