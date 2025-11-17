// Exercice: Tuples 

// Crée une fonction qui accepte un tableau de tuples contenant un nom (string) et un âge (number).
// Stocker le typage du tuple dans un type alias nommé `Personne`.

type Personnes = [string, number]; 

const tuples: Array<Personnes> = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 35],
];


// La fonction doit trier les tuples par âge croissant et retourner le tableau trié. 

function trierParAge(personnes: Array<Personnes>) : Array<Personnes> {
    let personnesTriees : Personnes[] = personnes.sort(([, ageA], [, ageB]) => ageA - ageB); //déstructuration des tuples pour accéder directement aux âges, c'est typé donc il sait que la seconde position c'est un nombre
    //si on veut une copie on utilise la méthode slice ou ça :
    //[...personnes] => on fait une copie du tableau en le déstructurant
    //ensuite on trie la copie et on la renvoie
    return personnesTriees;
}

console.log(trierParAge(tuples));