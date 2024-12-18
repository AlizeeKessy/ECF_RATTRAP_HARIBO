
        // importer mes éléments HTML
        let emballage = document.getElementById("emballage");
        let imageArea = document.getElementById("imageArea");

        // Sources des images de bonbons en sachet et en boîte sous forme de liste
        let bonbons = {
            sachet: [
                { src: "img/Balla-Balla.png", alt: "Bonbon en sachet 1" },
                { src: "img/Color-Rado.png", alt: "Bonbon en sachet 2" },
                { src: "img/Tropi-Frutti.png", alt: "Bonbon en sachet 3" }
            ],
            boite: [
                { src: "img/Schtroumpf-box.png", alt: "Bonbon en boîte 1" },
                { src: "img/boite2.Bande-box.png", alt: "Bonbon en boîte 2" },
                { src: "img/Jelly-box.png", alt: "Bonbon en boîte 3" }
            ]
        };

        // Écouteur d'événement pour le changement de sélection
        emballage.addEventListener("change", function () {
            let liste = emballage.value;

            // zonne d'affichage des images
            imageArea.innerHTML = "";

            // Vérifier si un type d'emballage a été sélectionné
            if (liste && bonbons[liste]) {
                // Afficher les images correspondant au type d'emballage sélectionné
                bonbons[liste].forEach(bonbon => {
                    let img = document.createElement("img");
                    img.src = bonbon.src; // Source de l'image
                    img.alt = bonbon.alt; // Texte alternatif
                    img.title = bonbon.alt; // Info-bulle

                    // Ajouter un événement pour sélectionner/désélectionner l'image
                    img.addEventListener("click", () => {
                        img.classList.toggle("selected");
                    });

                    // Ajouter l'image au conteneur
                    imageArea.appendChild(img);
                });
            }
        });