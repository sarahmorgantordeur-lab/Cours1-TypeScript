// EXERCICE: convertir le code JavaScript en TypeScript en typant correctement les variables et les fonctions. Pour l'instant, ne supporte que les tableaux de nombres.
/*!
 * arr-diff <https://github.com/jonschlinkert/arr-diff>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
'use strict';
function diff(arr) {
    let len = arguments.length;
    let idx = 0;
    while (++idx < len) {
        arr = diffArray(arr, arguments[idx]);
    }
    return arr;
}
;
function diffArray(one, two) {
    if (!Array.isArray(two)) {
        return one.slice();
    }
    let tlen = two.length;
    let olen = one.length;
    let idx = -1;
    let arr = [];
    while (++idx < olen) {
        let ele = one[idx];
        let hasEle = false;
        for (let i = 0; i < tlen; i++) {
            let val = two[i];
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
