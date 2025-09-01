/*
Задача вывести в консоль строку "Я люблю JS !" из массива,
проходя циклом в обратном порядке, не используя метод reverse.
const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
let text = '';

for (let i = arr.length - 1; i > -1; i--) {
    text += `${arr[i]} `
};
console.log(text);