const prompt = require("prompt-sync")();
let n = prompt("entrez un nombre :");
console.log("le table de multiplication est :")
for (i=1;i<=10;i++){
    console.log(i*n);
}
