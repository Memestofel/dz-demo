/*
Пользователь хочет приобрести игру в магазине  
Он может это сделать только если:  
- Его баланс больше 1000 (balance)  
или число бонусов больше 100 (bonusBalance)  
- Он не забанен (isBanned)  
- Игра не куплена (isExist)  
- Игра в продаже (isSelling)  

Напишите условие для покупки и выведите в консоль результат
*/

const userInfo = {usd: 2000, bonuses: 150, isBanned: false};
const gameInfo = {isExist: false, isSelling: true};
let resultText;


if ((userInfo.usd > 1000 || userInfo.bonuses > 100) && !userInfo.isBanned){
    if (!gameInfo.isExist && gameInfo.isSelling) {
        resultText = `Можем покупать!`
    } else {
        resultText = `Не можем купить игру!`
    }
} else {
    resultText = (`Невозможно купить!`)
}
console.log(resultText);
// //alternative version?

const buyerInfo = {name: `gamer228`, usd: 2000, bonuses: 1500, isBanned: false, games: ['ZoV 2', 'Doka 2', 'Ti pidor']};
const item = {name: `ZoV 3`, isSelling: true, price: 1488, bonusesPrice: 228};

const isExist = buyerInfo.games.includes(item.name);
const enoughBonuses = item.bonusesPrice <= buyerInfo.bonuses;

switch (true) {
    case buyerInfo.isBanned:
        alert('Ты забанен, гнида, пошел нахуй!');
        break;
    case isExist:
        alert('У тебя уже есть эта игра!');
        break;
    case enoughBonuses:
            if (confirm(`Хотите купить используя бонусы? 
                Баланс бонусов: ${buyerInfo.bonuses}, цена игры ${item.bonusesPrice}
                После покупки останется: ${buyerInfo.bonuses-item.bonusesPrice}!`)){
                    buyerInfo.bonuses = buyerInfo.bonuses-item.bonusesPrice;
                    buyerInfo.games.push(item.name);
                    alert(`Игра ${item.name} добавлена в библиотеку! Оставшийся баланс бонусов: ${buyerInfo.bonuses}`)
                    console.log(buyerInfo);
                    break;
                }
    case buyerInfo.usd >= item.price:

            if (confirm(`Вы уверены что хотите купить ${item.name}?
                Ваш баланс ${buyerInfo.usd}, игра стоит ${item.price}, после покупки у вас останется ${buyerInfo.usd - item.price}`)){
                    buyerInfo.usd -= item.price;
                    buyerInfo.games.push(item.name);
                    buyerInfo.bonuses += Math.round(item.price / 100)
                    alert(`Игра ${item.name} добавлена в библиотеку! Оставшийся баланс: ${buyerInfo.usd}. 
                        За покупку начислено ${Math.round(item.price / 100)} бонусов! Баланс бонусов: ${buyerInfo.bonuses}`)
                    console.log(buyerInfo);
                } else {
                    alert(`Вы отказались от покупки!`)
                }
        break;

    default:
        alert(`Недостаточно средств или что-то пошло не так!`)
        break;
}