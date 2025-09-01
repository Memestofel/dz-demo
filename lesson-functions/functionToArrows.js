/* Переписать функцию в стрелочную */

function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));


const tp = (num, power) => num ** power;
console.log(tp(2,3));