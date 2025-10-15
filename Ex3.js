const prompt = require("prompt-sync")();

let somme = 0;
let max = null;

while (true) {
    let n = prompt("Entrez un nombre positif inferieur 100 et 0 pour terminer le processus : ");
    
    if (n === 0) {
        break;
    }

    if (n > 0 && n < 100) {
        somme = somme + n;
        if (max == null || n > max) {
            max = n;
        }
    } else if (n > 100) {
        console.log("Nombre ignore supérieur a 100");
    } else {
        console.log("Nombre invalide doit être positif");
    }
}

console.log("Somme des valeurs valides:", somme);
if (max === null) {
    console.log("Aucune valeur valide saisie");
} else {
    console.log("Maximum des valeurs valides:", max);
}
