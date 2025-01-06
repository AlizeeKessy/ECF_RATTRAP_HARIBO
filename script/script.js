
// importer mes éléments HTML

const emballage = document.getElementById("emballage");
const imageArea = document.getElementById("imageArea");
const imageArea2 = document.getElementById("imageArea2");
const textArea2 = document.getElementById("textArea2");
const textArea3 = document.getElementById("textArea3");
const panier = document.getElementById("panier");
let cart = {};
const sachet = [
    { src: "img/Balla-Balla.png", alt: "Haribo Balla-Balla" },
    { src: "img/Color-Rado.png", alt: "Haribo Color-Rado 2" },
    { src: "img/Tropi-Frutti.png", alt: "Haribo Tropi-Frutti" }
];

const boite = [
    { src: "img/Schtroumpf-box.png", alt: "Schtroumpf-box 1" },
    { src: "img/Bande-box.png", alt: "Haribo Bande-box." },
    { src: "img/Jelly-box.png", alt: "Haribo Jelly-box." }
];

/*Sources des images de bonbons en sachet et en boîte sous forme de liste
de type objet*/

const bonbons = {
    boite: [
        { src: "img/Schtroumpf-box.png", alt: "Schtroumpf-box 1" },
        { src: "img/Bande-box.png", alt: "Haribo Bande-box." },
        { src: "img/Jelly-box.png", alt: "Haribo Jelly-box." }
    ],
    sachet: [
        { src: "img/Balla-Balla.png", alt: "Haribo Balla-Balla" },
        { src: "img/Color-Rado.png", alt: "Haribo Color-Rado 2" },
        { src: "img/Tropi-Frutti.png", alt: "Haribo Tropi-Frutti" }
    ],
};
console.log(bonbons);


let infosProduits = [];
fetch('json/haribo.json')  // localisation de mon fichier json
    .then(response => response.json())
    .then(data => {
        infosProduits = data;
        console.log('Données chargées :', data); // Vérifiez les données ici
        infosProduits = data;
    })
    .catch(error => console.error('Erreur de chargement du JSON:', error))
    ;



// Fonction pour trouver les informations du produit dans mon fichier json
function trouverInfosProduit(imgSrc) {
    const nomFichier = imgSrc.split('/').pop().split('.')[0];
    return infosProduits.find(produit =>
        produit.nom.toLowerCase().replace(/[-\s]/g, '') ===
        nomFichier.toLowerCase().replace(/[-\s]/g, '')
    );
}


// Écouteur d'événement pour le changement de sélection
emballage.addEventListener("change", function () {

    const liste = emballage.value;

    // zone d'affichage des images
    imageArea.innerHTML = "";

    if (liste && bonbons[liste]) {
        bonbons[liste].forEach(bonbon => {
            const img = document.createElement("img");
            img.src = bonbon.src;
            img.alt = bonbon.alt;
            img.title = bonbon.alt;

            img.addEventListener("click", (event) => {
                event.preventDefault();
               
                // Désélectionner toutes les images
                document.querySelectorAll('#imageArea img').forEach(img => {
                    img.classList.remove('selected');
                });

                // Sélectionner l'image cliquée
                img.classList.add('selected');

                // Trouver et afficher les informations du produit
                const imgProduit = trouverInfosProduit(img.src);
                if (imgProduit) {
                    afficherImgEtDetailsProduit(imgProduit, img.src);
                }

        
            })

            imageArea.appendChild(img);
        });
    }
});



function afficherImgEtDetailsProduit(produit, imgSrc) {
    // Affichage dans imageArea2
    imageArea2.innerHTML = "";
    const imageDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = produit.nom;
    img.className = "product-image";
    imageDiv.appendChild(img);
    imageArea2.appendChild(imageDiv);

    // Affichage dans textArea2
    textArea2.innerHTML = "";
    const infoDiv = document.createElement("div");

    // Créer le titre
    const titre = document.createElement("h2");
    titre.textContent = produit.nom;
    titre.style.paddingLeft = "20px";
    titre.style.color = "white";

    // Créer le prix
    const prix = document.createElement("p");
    prix.className = "prix";
    prix.textContent = `Prix : ${produit.prix}€`;
    prix.style.paddingLeft = "20px";
    prix.style.color = "white";

    // Créer la description
    const description = document.createElement("div");
    description.className = "description";
    description.style.paddingLeft = "20px";
    description.style.color = "white";

    const desc1 = document.createElement("p");
    desc1.textContent = produit.descriptif1;
    desc1.style.paddingLeft = "20px";
    desc1.style.color = "white";
    const desc2 = document.createElement("p");
    desc2.textContent = produit.descriptif2;
    desc2.style.paddingLeft = "20px";
    desc2.style.color = "white";
    const desc3 = document.createElement("p");
    desc3.textContent = produit.descriptif3;
    desc3.style.paddingLeft = "20px";
    desc3.style.color = "white";

    description.appendChild(desc1);
    description.appendChild(desc2);
    description.appendChild(desc3);

       // Conteneur quantité et bouton
     
      // Créer un label pour la quantité
      const label = document.createElement("label");
      label.textContent = "Quantité : ";
      label.style.marginRight = "10px";
      label.style.color = "white";
      label.style.paddingLeft = "20px";

   
       // Créer un input de type number
       const input = document.createElement("input");
       input.type = "number";
       input.value = 0; // Initialise à 0
       input.readOnly = true; // Empêche l'utilisateur de changer manuellement
       input.style.width = "500px";
       input.classList="form-control text-white bg-green1"; 
       input.style.marginLeft = "20px";

    // Bouton "Ajouter au panier"
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Ajouter au panier";
    addToCartButton.style.marginTop = "10px";
    addToCartButton.style.padding = "10px";
    addToCartButton.style.cursor = "pointer";
    addToCartButton.classList="text-white bg-green1";
    addToCartButton.style.marginLeft = "20px";
    addToCartButton.addEventListener("click", (event) => {
        event.preventDefault();
        addToCart(produit.id,input);
    });

    // Assembler les éléments
    infoDiv.appendChild(titre);
    infoDiv.appendChild(prix);
    infoDiv.appendChild(label);
    infoDiv.appendChild(input);
    infoDiv.appendChild(description);
    infoDiv.appendChild(addToCartButton)

    

    textArea2.appendChild(infoDiv);
}



// Fonction pour ajouter un produit au panier
function addToCart(productId) {
    const product = infosProduits.find(p => p.id === productId);

    // Si le produit est déjà dans le panier, on augmente la quantité
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        // Sinon, on l'ajoute avec une quantité initiale de 1
        cart[productId] = {
            name: product.nom, // utiliser "nom" comme clé
            price: product.prix, // utiliser "prix" comme clé
            quantity: 1
        };
    }

    console.log(`Produit ajouté: ${product.nom}`);
    displayCart(); // Mettre à jour l'affichage du panier
}

// Fonction pour calculer le total du panier et afficher les détails
function displayCart() {
    let totalAmount = 0;

    // réinitialiser l'affichage du panier
    panier.innerHTML = "";

    const cartContainer = document.createElement("div");

    for (const productId in cart) {
        const item = cart[productId];
        const totalItemPrice = item.quantity * item.price;
        totalAmount += totalItemPrice;

        const cartItem = document.createElement("p");
        cartItem.className = "description";
        cartItem.style.width= "200px";
        cartItem.textContent = `${item.quantity} x ${item.name} - ${totalItemPrice.toFixed(2)}€`;
        cartItem.style.paddingLeft = "20px";
        cartItem.style.color = "white";
        cartContainer.appendChild(cartItem);
    }

    // Afficher le total
    const totalDisplay = document.createElement("p");
    totalDisplay.style.fontWeight = "bold";
    totalDisplay.textContent = `Total : ${totalAmount.toFixed(2)}€`;
    totalDisplay.style.paddingLeft = "400px";
    cartContainer.appendChild(totalDisplay);

    panier.appendChild(cartContainer);
}

