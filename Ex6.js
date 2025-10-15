const prompt = require("prompt-sync")();
let n = prompt("Entrez un nombre positif : ");
let x = prompt("Entrez la puissance exposant superieur ou egal a 0 : ");
if (n > 0 && x >= 0) {
    let r = 1;
    let i = 0;
    while (i < x) {
        r =r * n;
        i++;
    }
    console.log(`${n}^${x} = ${r}`);
} else {
    console.log("Erreur : La base doit être > 0 et l'exposant >= 0.");
}
