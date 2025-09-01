// Дан список задач

// const tasks = ['Задача 1'];
// Сделать функции:

// Добавление задачи в конец
// Удаление задачи по названию
// Перенос задачи в начало списка по названию
// !Всегда меняем исходный массив

const tasks = ['Задача 1'];
console.log(tasks);
addToArrayEnd(tasks, 'Задача 2');
console.log(tasks);
deleteNameFromArray(tasks, 'Задача 1');
console.log(tasks);
addToArrayStart(tasks, 'Dragon')
console.log(tasks);

function addToArrayEnd(array, element) {
    return array.push(element)
}
function deleteNameFromArray(array, name) {
    const calculate = array.indexOf(name);
    if (calculate >= 0) {
        return array.splice(calculate, 1)
    }
    return
}
function addToArrayStart(array, name) {
    return array.unshift(name)
}