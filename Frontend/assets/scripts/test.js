
function addToCart() {
  const addToCartBtn = document.querySelector(".add-to-cart");
  const confirmation = document.querySelector(".added-to-cart-confirmation");
  const textConfirmation = document.querySelector(".confirmation-text");
  
  addToCartBtn.addEventListener("click", () => {
    if (bearNumber.value > 0 && bearNumber.value < 100) {
      // ------ Création du produit qui sera ajouté au panier
      let productAdded = {
        name: productCardName.innerHTML,
        price: parseFloat(productCardPrice.innerHTML),
        quantity: parseFloat(document.querySelector("#bearNum").value),
        _id: id,
      };

      // ----------------- Gestion du localStorage
      let arrayProductsInCart = [];
      
      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("products") !== null) {
        arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
        
        
        // Si le LS est vide, on le crée avec le produit ajouté
      } 
        arrayProductsInCart.push(productAdded);
        localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
      

      // Effets visuels lors d'un ajout au panier
      confirmation.style.visibility = "visible";
      textConfirmation.innerHTML = `Vous avez ajouté ${bearNumber.value} nounours à votre panier !`;
      setTimeout("location.reload(true);", 4000);
    } else {
      confirmation.style.visibility = "visible";
      textConfirmation.style.background = "red";
      textConfirmation.style.border = "red";
      textConfirmation.style.color = "white";
      textConfirmation.style.whiteSpace = "normal";
      textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99,.`;
    }
  });
}