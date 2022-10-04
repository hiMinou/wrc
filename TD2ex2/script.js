// jshint browser:true, eqeqeq:true, undef:true, devel:true, esversion: 6

const form = document.querySelector("form");
form.addEventListener("submit", fVerif);


function fVerif (evt){ 
  let verif = verifForm();
  // si tout n'est pas correct on empêche l'envoi du formulaire

  if (!verif) {
    evt.preventDefault();
  }
}

// fonction qui vérifie la validité de tous les champs
function verifForm(){
  console.log("appel de fVerif");

  let bAge = fAge();
  let bIdentifiant = fIdentifiant();
  let bPass1 = fPass();

  return (bAge && bIdentifiant && bPass1 );

}

// retourne true si l'age est >=18
// sinon retourne false et met en évidence le message d'aide et l'input
function fAge(){
  // A compléter
}

// retourne true si l'identifiant est formé de 4 à 12 lettres
// sinon retourne false et met en évidence le message d'aide et l'input
function fIdentifiant(){
  // A compléter
}

// retourne true si les mots de passe sont les mêmes et sont forts
// sinon retourne false et met en évidence les aides et input concernés
function fPass(){  
  // A compléter
}
