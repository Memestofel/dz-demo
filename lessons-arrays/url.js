// Дан произвольный url вида - <https://purpleschool.ru/course/javascript>

//     Нужно сделать функцию, которая выводит в консоль:Протокол (https)
// Доменное имя(purpleschool.ru)
// Путь внутри сайта(/course/javascript)

const initialUrl = `https:/purpleschool.ru/coursejavasc/riptgay`;
returnInfoAboutUrl(initialUrl)

function returnInfoAboutUrl(url) {
    const splitedUrl = url.split('/');
    if (splitedUrl.length - 1 < 3) return console.log('Неверная ссылка');
    //if (splitedUrl[0] != 'http:' || splitedUrl[0] != 'https:') return console.log('Ошибка протокола');
    const [protocol, , domen, ...others] = splitedUrl;

    console.log(`Protocol: ${protocol}, domen: ${domen}, path: ${others}`)
}