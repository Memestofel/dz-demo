/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчёта:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчёт среднего расхода и среднего дохода
*/
const operations = [1000, -700, 300, -500, 10000];
const balance = 100;

console.log(getBalance(operations, balance));
console.log(checkOperations(operations, balance));
console.log(averageOperations(operations));

function getBalance(op, bal) {
    // Принимает массив операций и начальный баланс.
    // Считает итоговый баланс, учитывая все операции.
    // Возвращает итоговый баланс.
    let num = bal;
    for (let element of op) {
        num += element;
        // console.log(num)
    }
    return num
}
function checkOperations(op, bal) {
    // Принимает массив операций и начальный баланс.
    // Проверяет, не уходит ли баланс в минус после каждой операции.
    // Возвращает true(если баланс не уходит в минус) или false(если баланс уходит в минус).
    let num = bal;
    let result = true;
    for (let element of op) {

        num += element
        if (num < 0) {
            result = false;
            break
        }
        console.log(num)
    }
    return result;

}
function averageOperations(op) {
    // Принимает массив операций.
    // Рассчитывает средний доход(среднее положительных значений) и средний расход(среднее отрицательных значений).
    // Возвращает массив из двух значений: средний доход и средний расход.
    let positive = [];
    let negative = [];
    for (let element of op) {
        if (element === 0 || Number.isNaN(element)) {
            continue
        } else if (element >= 1) {
            positive.push(element)
        } else {
            negative.push(element)
        }
    }

    let avPos = 0;
    let avNeg = 0;
    if (positive.length != -1) {
        for (let element of positive) {
            avPos += element
        }
    }
    if (negative.length != -1) {
        for (let element of negative) {
            avNeg += element
        }
    }
    avPos = avPos / positive.length;
    avNeg = avNeg / negative.length;
    return [avPos, avNeg]

}