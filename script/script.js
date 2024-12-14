
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('submitButton');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('close-modal');
  const resetButton = document.getElementById('reset-button');

  // Fonction pour valider les champs
  /*const validateField = (input, regex, errorMsg) => {
  const errorSpan = document.getElementById(`error-${input.id}`);
  if (!regex.test(input.value)) {
  errorSpan.textContent = errorMsg;
  return false;
  } else {
  errorSpan.textContent = '';
  return true;
  };*/
});



  const nameInput = document.getElementById('lname');
  const firstnameInput = document.getElementById('fname');
  const regexVerifName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/;
  const dateNaissance = document.getElementById('date-naissance');
  const regexVerifDateNaiss =  /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  const eMail = document.getElementById('email');
  const regexFormatEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const codeConfidentiel = document.getElementById('code confidentiel');
  const regexFormatCodeConfid = /^FR\d{5}[A-Z.\-_]{3}x$/;



  submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la soumission par défaut

              // Contrôle du nom et prénom
              document.getElementById('lname').addEventListener('input', (e) => {
              e.target.value = e.target.value.toUpperCase();
              });

              document.getElementById('fname').addEventListener('input', (e) => {
              e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
          });
              const nameQuery = nameInput.value.trim();
              const firstnameQuery = firstnameInput.value.trim();
              const datenaissanceQuery = dateNaissance.value.trim();
              const emailQuery = eMail.value.trim();
              const codeconfidQuery = codeConfidentiel.value.trim();


              // Vérification des champs avec la regex
              if (!regexVerifName.test(nameQuery)) {
                  alert('3 caractères alphanumériques au minimum pour le Nom!!!');
                  event.preventDefault(); // Empêche la soumission du formulaire
                  return;
              }

              // Vérification des champs avec la regex
              if (!regexVerifName.test(firstnameQuery)) {
                  alert('3 caractères alphanumériques au minimum pour le Prenom!!!');
                  event.preventDefault(); // Empêche la soumission du formulaire
                  return;
              }


              if (!regexVerifDateNaiss.test(datenaissanceQuery)) {
                  alert('Format Date non valide \nFormat date valide : jj/mm/aaaa');
                  event.preventDefault(); // Empêche la soumission du formulaire
                 return;
              }

              if (!regexFormatEmail.test(emailQuery)) {
                  alert('Format e-mail non valide');
                  event.preventDefault(); // Empêche la soumission du formulaire
                 return;
              }

              if (!regexFormatCodeConfid.test(codeconfidQuery)) {
                  alert('Format Code Confidentiel non valide');
                  event.preventDefault(); // Empêche la soumission du formulaire
                 return;
              }
              else {
                modal.classList.remove('hidden');
              }
            


        // Si tout est valide, continuer la soumission
         //alert('Les données sont valides, le formulaire peut être soumis.');


        /* if (nameQuery && firstnameQuery && datenaissanceQuery && emailQuery && codeconfidQuery) {
          modal.classList.remove('hidden');
          }*/
        });


         // Fermeture de la modale
closeModalButton.addEventListener('click', () => {
modal.classList.add('hidden');
form.submit();
});

// Réinitialisation du formulaire
resetButton.addEventListener('click', () => {
document.querySelectorAll('.error-message').forEach((span) => (span.textContent = ''));
});