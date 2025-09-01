/*
Написать функцию, которая получает на вход 3 параметра:

суммой средств - 1000
валютой средств - руб
целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет. 
Ставки конвертации хранятся внутри функции.
*/


const wallet = { sum: 1000, currency: `RUB` };
const targetCurrency = `RUB`;

console.log(currencyConverter(wallet, targetCurrency));

function currencyConverter(money, currency) {
    const USDCOURSE = { USD: 1, EUR: 0.854701, BYN: 2.974359, CNY: 7.170940, TRY: 40.837607, RUB: 79.538462 };
    const EUROCOURSE = { USD: 1.170000, EUR: 1, BYN: 3.480000, CNY: 8.390000, TRY: 47.780000, RUB: 93.060000 };
    const BYNCOURSE = { USD: 0.336207, EUR: 0.287356, BYN: 1, CNY: 2.410920, TRY: 13.729885, RUB: 26.741379 };
    const CNYCOURSE = { USD: 0.139452, EUR: 0.119190, BYN: 0.414779, CNY: 1, TRY: 5.694875, RUB: 11.091776 };
    const TRYCOURSE = { USD: 0.024487, EUR: 0.020929, BYN: 0.072834, CNY: 0.175596, TRY: 1, RUB: 1.947677 };
    const RUBCOURSE = { USD: 0.012573, EUR: 0.010746, BYN: 0.037395, CNY: 0.090157, TRY: 0.513432, RUB: 1 };

    const walletCurrency = money.currency == 'USD' ? USDCOURSE
        : money.currency == 'RUB' ? RUBCOURSE
            : money.currency == 'EUR' ? EUROCOURSE
                : money.currency == 'BYN' ? BYNCOURSE
                    : money.currency == 'CNY' ? CNYCOURSE
                        : money.currency == 'TRY' ? TRYCOURSE : null
    if (!walletCurrency) return null;
    if (!['USD', 'EUR', 'BYN', 'CNY', 'TRY', 'RUB'].includes(currency)) return null;

    return money.sum * walletCurrency[currency]

}
