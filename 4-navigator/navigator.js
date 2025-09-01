// Написать код, рассчитывающий дистанцию о объекта: 

// addressLat - адрес назначения lat (например: 10)
// addressLong - адрес назначения long
// positionLat - текущее положение пользователя lat
// positionLong - текущее положение пользователя long
// В результате на основе этих координат нужно посчитать расстояние от текущего месторасположения 
// до назначения.

let addressLat;
let addressLong;
let positionLat;
let positionLong;

addressLat = 8;
addressLong = 8;
positionLat = 10;
positionLong = 13;

let result = distanceCalculator(addressLat, addressLong, positionLat, positionLong);
console.log(result)

function distanceCalculator(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}