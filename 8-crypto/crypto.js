// Написать 2 функции:

// шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие - то буквы по заданному
//  алгоритму и возвращает строку.
// проверка пароля - принимает зашифрованный пароль и второй пароль.Воспроизводит алгоритм назад на зашифрованном 
// пароле и возвращает true,
//  если он совпадает со втором паролем и false, если нет.

const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "[", "]", "{", "}", ";",
    ":", "'", '"', ",", ".", "<", ">", "/", "?",
    "\\", "|", "`", "~"
];

const userPassword = 'dragondiCk2400';

const step = 1;
const cryptPass = crypto(userPassword, alphabet, step);
console.log(`Crypted password = ${cryptPass.result}`);
const decryptPass = decrypt(cryptPass.result, alphabet, cryptPass.modifiedSymbols);
console.log(`Decrypted password = ${decryptPass}`);
//decryptPass = 'gay'
const finalThingie = checkPass(decryptPass, userPassword);
console.log(finalThingie)

function crypto(text, symbols, num) {
    let N = symbols.length;
    num = num % N;

    let modifiedSymbols = symbols
        .slice(-num)
        .concat(symbols.slice(0, N - num));

    let result = text.split('').map(char => {
        let idx = symbols.indexOf(char);
        return idx !== -1 ? modifiedSymbols[idx] : char;
    }).join('');

    return { result, modifiedSymbols };
}

function decrypt(text, symbols, modifiedSymbols) {
    return text.split('').map(char => {
        let idx = modifiedSymbols.indexOf(char);
        return idx !== -1 ? symbols[idx] : char;
    }).join('');
}

function checkPass(cryptedPass, ogPass) {
    return cryptedPass === ogPass;
}