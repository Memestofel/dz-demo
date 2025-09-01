// Дан массив чисел: arr = [1, 40, -5, 10, 0]

// Написать функцию, которая сортирует данный массив при помощи циклов.

//     Подсказка:

// Нужно использовать 2 цикла, вложенных друг в друга
// Нужно сравнивать и менять элементы

const arr = [1, 40, -5, 10, 0];
let array = sort(arr);
console.log(array);

function sort(array) {
    const sortedArray = array.slice();

    for (let currentIndex = 0; currentIndex < sortedArray.length - 1; currentIndex++) {
        let minIndex = currentIndex;

        for (let searchIndex = currentIndex + 1; searchIndex < sortedArray.length; searchIndex++) {
            if (sortedArray[searchIndex] < sortedArray[minIndex]) {
                minIndex = searchIndex;
            }
        }

        if (minIndex !== currentIndex) {
            const temp = sortedArray[currentIndex];
            sortedArray[currentIndex] = sortedArray[minIndex];
            sortedArray[minIndex] = temp;
        }
    }

    return sortedArray;
}
