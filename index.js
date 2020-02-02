console.log("Bienvenue");
console.log("Veuillez rentrer le nombre d'etages");
var etage = prompt("nombre d'etages");
console.log(etage);
var nbrd = 1;
if (etage <= 25) {
    for (var i = 1; i <= etage; i++) {

        console.log(" ".repeat(etage - i) + "#".repeat(nbrd));
        nbrd += 2;

    }
}