//typage explicite

let nom : string = "Sarah";
let age : number = 25;
let isConnected : boolean = true;
let gigaNombre : bigint = 90000000000000000000000000n;
let variableUndifined : undefined= undefined;
let variableNulle : null = null;
let maintenant : Date = new Date();

//type implicite
let maDate = new Date(); //Type pas besoin de préciser grâce à la méthode new Date 

//type union peut prendre plusieurs types
let variable : string | number | undefined = 42;
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

let age2 : number | undefined;
//age2.toFixed(); erreur possible si age2 est undefined

let monTableau : string[] = ['a']; //je préise que c'est un tableau de chaine de char
let monTableau2 : []; //on a créé un tableau qui peut prendre n'importe quel type de valeur, non recommandé
//let a = JSON.parse() renvoie un type any

let tableauMixte : (string | number)[] = [];
//seconde syntaxe pour créer un tableau
let nombres: Array<number> = [1, 2, 3, 4, 5];
let prenoms: Array<string> = ["Alice", "Bob", "Charlie"];
let tab : Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] //je me fais kiffer je trouve ça sexy

//on passe aux fonctions
// let maFonction : Function = (a: number) => {
//     console.log("Coucou");
// }

// let maFonction = (a: number) => { //typage implicite je suis obligée de passer un paramètre
//     console.log("Coucou");
// }


// (<paramètre>:<type>) => <typeDeRetour>
let maFonction : (a: number) => void = (a) => { //il faut préciser le a dans le void sinon il retourne une erreur
    console.log("Coucou", a);
}

maFonction(42); 


function monAutreFonction() { //différence avec le mot clé this, les flèchées sont anonymes sans contexte, ici on peut utiliser le this

}
