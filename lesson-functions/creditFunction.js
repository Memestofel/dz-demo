/*Пользователь:
- Возраст
- Наличие работы
- Деньги

Нужно проверить может ли он купить новый MacBook за 2000$?
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет 
и 0 в ином случае.

Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false;
*/

const userInfo = {age: 15, hasWork: false, cash: 150};
const MacBookCost = 2000;

console.log(possibleToBuy(userInfo, MacBookCost))

function creditCalculator(age, work) {
    if (age >= 24){
        return work ? 500 : 100
    }
    return 0
}

function possibleToBuy(user, cost) {
    if (user.cash < cost) {
        user.cash +=creditCalculator(user.age, user.work)
    }
    return(user.cash >= cost);

}


