//typage explicite
let nom = "Sarah";
let age = 25;
let isConnected = true;
let gigaNombre = 90000000000000000000000000n;
let variableUndifined = undefined;
let variableNulle = null;
let maintenant = new Date();
//type implicite
let maDate = new Date(); //Type pas besoin de préciser grâce à la méthode new Date 
//type union peut prendre plusieurs types
let variable = 42;
variable = variable || 42; //si la variable n'est pas définie, on lui assigne 42 pa défaut
//attention, les types doivent être compatibles pour être assignés
let valeur;
//pas obligé de donner le type, mais déconseillé car alors la valeur est possiblement inexistante
// valeur.toISOString();
//cette méthode doit être utilisée si la variable accèpte la méthode, les types string et number pas.
if (typeof valeur === "string") {
    console.log(valeur.repeat(5));
}
//instanceof vérifier si c'est une date
if (valeur instanceof Date) {
    console.log(valeur.toISOString());
}
let age2;
//age2.toFixed(); erreur possible si age2 est undefined
let monTableau = ['a']; //je préise que c'est un tableau de chaine de char
let monTableau2; //on a créé un tableau qui peut prendre n'importe quel type de valeur, non recommandé
//let a = JSON.parse() renvoie un type any
let tableauMixte = [];
//seconde syntaxe pour créer un tableau
let nombres = [1, 2, 3, 4, 5];
let prenoms = ["Alice", "Bob", "Charlie"];
let tab = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; //je me fais kiffer je trouve ça sexy
//on passe aux fonctions
// let maFonction : Function = (a: number) => {
//     console.log("Coucou");
// }
// let maFonction = (a: number) => { //typage implicite je suis obligée de passer un paramètre
//     console.log("Coucou");
// }
// (<paramètre>:<type>) => <typeDeRetour>
let maFonction = (a) => {
    console.log("Coucou", a);
};
maFonction(42);
