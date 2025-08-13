// Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. 
// Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада 
// и остаток после покупки.

// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

const initialDeposit = 12000;
const percentPerYear = 0.07;
const depositTime = 24;

const summ = initialDeposit * (1 + percentPerYear/12)**depositTime;

let response;

if (summ < 13500) {
    response = `Вася не может купить дом, ему не хватает денег.`    
} else {
    let remainingMoney = summ - 13500;

    response = `Вася может купить дом!`
    
    if (remainingMoney > 0) response += ` К тому же у него останется ${remainingMoney.toFixed(2)}$!`;
}

console.log(response);