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
    let personnesTriees : Personnes[] = personnes.sort((a, b) => a[1] - b[1]);
    return personnesTriees;
}

console.log(trierParAge(tuples));