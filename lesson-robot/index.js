// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". 
// Если ответ верен, выведите в консоли "Успех", 
// если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".

let userPropmt = prompt('Сколько будет 7 + или - 15?');

switch (true) {
    case Number(userPropmt) === 7+15:
    case Number(userPropmt) === 7-15:
    case userPropmt == 'Я не робот':
        console.log(`Успех!`);    
        break;

    default:
        console.log('Пошел нахуй робот!')
        break;
}