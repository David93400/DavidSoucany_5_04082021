let initBasket = [];

// Si le localStorage existe, on le récupère, on ajoute le userBasket,
// puis on le renvoie avec la modification

if (localStorage.getItem('userBasket') !== null) {
  initBasket = JSON.parse(localStorage.getItem('userBasket'));
}

initBasket.push(productAdded);
localStorage.setItem('userBasket', JSON.stringify(initBasket));
