//Написать код, который при передаче пользователем языка: en, ru, de 
// выводит в консоль соответствующее приветствие на указанном языке.

//Пример: de -> ‘Gutten tag!’

const languagesUser = navigator.language.split('-')[0];


let response;

switch (languagesUser) {
    case 'ru':
        response = `Привет!`
            break;
    case 'de':
        response = `Gutten tag!`
        break;
    case 'fr':
        response = `Bonjour!`
        break;
    case 'zh':
        response = `你好!`
        break;

    default:
        response = `Hello!`
        break;
}

console.log(response);