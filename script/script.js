/*
TIP 1:
utiliser le event.preventDefault() afin d'eviter le rechargement de la page à chque click sur "Ajouter au panier"

TIP 2:
Lorsque vous cliquez sur le produit de votre choix, toute la partie rose doit être réinitialisé (partieRose.innerHTML=""; )
Ainsi le nom du produit, son prix etc..... sont générés à la volée ainsi que le bouton 
Bouton sur lequel vous mettrez un addEventListener pour appeler la méthode expliqué dans le type 3 avec l'id du produit

TIP 3:
Pour faire le panier, se fier au code ci-dessous:

*/

// Panier initialisé comme un objet vide
let cart = {};

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
 
  const product = ....; // faire un find dans votre json pour recupérer le produit voulu

  // Si le produit est déjà dans le panier, on augmente la quantité
  if (cart[productId]) {
    cart[productId].quantity += 1;
  } else {
    // Sinon, on l'ajoute avec une quantité initiale de 1
    cart[productId] = {
      name: product.name,
      price: product.price,
      quantity: 1
    };
  }

  console.log(`Produit ajouté: ${product.name}`);
}

// Fonction pour calculer le total du panier et afficher les détails
function displayCart() {
  let totalAmount = 0;

  console.log("Contenu du panier:");
  for (const productId in cart) {
    const item = cart[productId];
    const totalItemPrice = item.quantity * item.price;
    totalAmount += totalItemPrice;

    console.log(
      `${item.quantity} ${item.name}(s) pour un prix total de ${totalItemPrice.toFixed(2)} euros`
    );
  }

  console.log(`Somme totale = ${totalAmount.toFixed(2)} euros`);
}
