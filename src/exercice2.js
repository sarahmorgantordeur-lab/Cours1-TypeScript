"use strict";
// Exercice: Tuples 
const tuples = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 35],
];
// La fonction doit trier les tuples par âge croissant et retourner le tableau trié. 
function trierParAge(personnes) {
    let personnesTriees = personnes.sort((a, b) => b[1] - a[1]);
    return personnesTriees;
}
console.log(trierParAge(tuples));
