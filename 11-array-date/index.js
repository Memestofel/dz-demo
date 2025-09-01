// Дан массива строк[‘10-02 - 2022’, ‘тест’, ‘11 / 12 / 2023’, ‘00 / 13 / 2022’, ‘41 / 12 / 2023’];

// Необходимо написать функцию, которая бы удаляла бы из массива все строки, которые 
// нельзя перевести в дату(можно: 10-02 - 2022 и 11 / 12 / 2023) и возвращала новый массив вида:

// [‘10-02 - 2022’, ‘12 - 11 - 2023’]
// Конспект
// Цель: Создание функции для обработки массива строк, содержащих потенциальные даты.

// Контекст задания:

// Вы работаете с парсером или API, который предоставляет строки, потенциально содержащие даты.
// Некоторые строки действительно являются датами, другие нет.
// Примеры входных данных:

// Верные даты: "10.02.22", "11.12.23"
// Неверные данные: "0.13.22", "41.12"
// Задание:

// Разработайте функцию, принимающую массив строк.
// Функция должна анализировать каждую строку:
// Отфильтровать невалидные даты.
// Преобразовать валидные даты к единому формату.
// Условия валидации дат:

// Форматы дат: DD.MM.YY или MM / DD / YY.
// День не может быть больше 31.
// Месяц не может быть больше 12.
// Учитывать високосные года для февраля(опционально).
//     Результат:

// Отфильтрованный и преобразованный массив содержащий только даты в едином формате.

let usersDate = [`10-02 - 2022`, `тест`, `11 / 12 / 2023`, `00 / 13 / 2022`, `41 / 12 / 2023`]

console.log(dateFormatter(usersDate));

function dateFormatter(array) {
    let filteredDates = [];
    for (element of array) {
        let formattedDate = findSeparator(element);
        if (formattedDate === undefined) continue;
        if (!dateCheck(formattedDate)) continue;
        filteredDates.push(formattedDate.join('/'));
    }
    return filteredDates;
}


function findSeparator(dateStr) {
    const separators = ['.', '/', '-'];

    for (const sep of separators) {
        let count = 0;
        for (const ch of dateStr) {
            if (ch === sep) count++;
        }
        if (count === 2) {
            return dateSplitter(dateStr, sep);
        }
    }

    return undefined;
}

function dateSplitter(str, sep) {
    if (!sep) return undefined;

    const parts = String(str)
        .split(sep)
        .map(p => p.trim());

    if (parts.length !== 3) return undefined;

    const nums = parts.map(n => Number(n));
    if (nums.some(n => Number.isNaN(n))) return undefined;

    let [a, b, y] = nums;

    if (sep === '/') {

        const m = a, d = b;
        return [d, m, y];
    } else {

        const d = a, m = b;
        return [d, m, y];
    }
}



function dateCheck(arr) {
    // Форматы дат: DD.MM.YY или MM / DD / YY.
    // День не может быть больше 31.
    // Месяц не может быть больше 12.
    // Учитывать високосные года для февраля(опционально).

    let [d, m, y] = arr;

    if (m < 1 || m > 12) return false;

    let daysInMonth = [31, (isVisokosniGod(y) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return d > 0 && d <= daysInMonth[m - 1];
}

function isVisokosniGod(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
