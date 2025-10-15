const prompt = require("prompt-sync")();
let n = prompt("Entrez un suite de nombre ou de caractere:");

let inverse = "";
for (let i = n.length - 1; i >= 0; i--) {
    inverse = inverse + n[i];
}

console.log("Le nombre inverse est :", inverse);
