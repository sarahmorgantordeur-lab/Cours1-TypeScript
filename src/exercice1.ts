// EXERCICE: convertir le code JavaScript en TypeScript en typant correctement les variables et les fonctions. Pour l'instant, ne supporte que les tableaux de nombres.
/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
'use strict';
function diff(arr : number[]) : number[]{
    let len : number = arguments.length;
    let idx : number = 0;
    while (++idx < len) {
        arr = diffArray(arr, arguments[idx]);
    }
    return arr;
}
;

function diffArray(one : number[], two : number[]) : number[] {
    if (!Array.isArray(two)) {
        return one.slice();
    }
    let tlen : number = two.length;
    let olen : number = one.length;
    let idx : number = -1;
    let arr : Array<number> = [];
    while (++idx < olen) {
        let ele : number = one[idx];
        let hasEle : boolean = false;
        for (let i : number = 0; i < tlen; i++) {
            let val : number = two[i];
            if (ele === val) {
                hasEle = true;
                break;
            }
        }
        if (hasEle === false) {
            arr.push(ele);
        }
    }
    return arr;
}


const result1 : Array<number> = diff([1, 2, 3, 4]);
console.log(result1); // Output: [1, 2, 3, 4]

const result2 : Array<number> = diffArray([10, 20, 30, 40, 50], [20, 50, 60]);
console.log(result2); // Output: [10, 30, 40]