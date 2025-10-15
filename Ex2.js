const prompt = require("prompt-sync")();
let n = prompt("entrez un nombre :");
console.log("n= ");
if (n%1!=0 && n%n !=0){
    console.log("le nombre est premier ");
} else {
    console.log("le nombre est non premier ");
}