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
//le type never est un type qui ne contient aucune valeur.
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
//maFonction(42); 
//automatiquement mon this et typé, this donne le context de la fonction
function monAutreFonction() {
}
//paramètre optionnels :
function addition(a, b, print) {
    if (print) {
        console.log(a + b);
    }
    return a + b;
}
//addition(5,5, true);
//addition(5,5); //print est optionnel
function addition2(a, b, print) {
    console.log(a + b);
}
//addition (5, 5, undefined); //il attend un troisème paramètre, on doit absolument préciser si print est undefined ou true ou false dans ce cas ci
//nombre de paramètre illimité grâce à '...parametres :'
function additionInfinie(...parametres) {
    let a = 0;
    for (const param of parametres) { //dans foreach l'index est passé en plus automatiquement
        a += a + param;
    }
    return a;
}
//tjrs mettre les paramètres de nombre indéfinis doivent être mis en derniers
function soustractionPasFinie(message, ...params) {
}
const result = additionInfinie(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
//---------------------------------------------------------------------------------//
//tuples : tableau avec un nombre fixe d'éléments avec des types précis
const tuple = ["Sarah", 25];
//le tuple est ordonné, on ne peut pas inverser les types
const coord = [0.255, 1.58]; //chouette aussi pour les coordonnées
//tuple avec un nombre variable d'éléments
const tuple2 = ["Sarah", 25, 30, 35, 40]; //le premier élément est une string et le reste des nombres
//le typescript n'a normalement aucun impact sur le js, si on change le nom du type d'une variable en ts, ça ne bouge pas en js. donc le fait le changer juste le type n'a normalement pas 'impact sur le code exécuté.
//---------------------------------------------------------------------------------//
//types unknown, never et any :
function log(trucALogger) {
    //c'est donc à nous d'affiner son type dans la fonction
    if (typeof trucALogger === "string") {
        console.log("C'est un string");
    }
    else if (typeof trucALogger === "number") {
        console.log("C'est un number");
    }
    else {
        console.log("Type non géré");
    }
}
//never représente un truc qui n'arrive jamais, bcp utilisé pour le testing, never désactive typescript juste à cet endroit là, on fait ça pour pas que ts nous embête, attention il diffère de any
//any c'est le truant, il désactive toute la vérification de type, à utiliser avec parcimonie, on perd tout l'intérêt de typescript
//très déconseillé d'utiliser any, mieux de le remplacer par le unknown
let anything = 'bonjour';
anything.test; //pas d'erreur même si test n'existe pas sur string
//retenir : any pas bien, unknown bien
//---------------------------------------------------------------------------------//
//casting : Le casting permet de convertir une valeur d'un type vers un autre. (Lorsque ils sont compatibles)
let variableCast;
console.log(variableCast.toFixed());
function logAnyThing(param) {
    param.toUpperCase();
}
const main = async () => {
    const fetchResult = await fetch('https://google.com');
    const js = await fetchResult.json(); //type any
}; //dans la dernière version, pas besoin de faire une fonction asynchrone pour utiliser await dans le main
export {};
