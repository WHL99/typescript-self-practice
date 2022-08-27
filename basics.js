"use strict";
exports.__esModule = true;
exports.expressionsMatter = exports.checkForFactor = exports.between = void 0;
Math.round(2);
console.log('hello');
console.log(Math.round(2));
var a = 2;
var b = [1, 2, 3, 4, 5];
var movieTitle = 'Hello!';
movieTitle = 'bye!';
var setMovieTitle = movieTitle.toUpperCase();
var abc = 'i am abc';
var houseNumber = 10;
var hi = true;
var show = "good morning";
var theThing = 'a string';
function plus(num) {
    return num + num;
}
plus(3);
function newPlus(num) {
    return num + num;
}
newPlus(5);
function makeSentence(num, word) {
    return "".concat(num) + "".concat(word);
}
makeSentence(5, 'hi');
function between(a, b) {
    var res = [a];
    while (a < b) {
        a++;
        res.push(a);
    }
    return res;
}
exports.between = between;
function checkForFactor(base, factor) {
    return base % factor === 0;
}
exports.checkForFactor = checkForFactor;
function expressionsMatter(a, b, c) {
    return Math.max(a * (b + c), a * b * c, a + (b * c), (a + b) * c);
}
exports.expressionsMatter = expressionsMatter;
function printName(person) { }
printName({ first: 'Wen' });
function math() {
    return { x: Math.random(), y: Math.random() };
}
math();
var houseData = {
    city: 'Berlin',
    NumberOfRooms: 4,
    address: {
        postCode: 13334,
        street: 'Hello Str.'
    },
    hasGarden: true,
    rent: 1600
};
console.log(houseData);
function printHouseData(houseData) {
    return houseData;
}
printHouseData(houseData);
function printAddress(houseData) {
    return "".concat(houseData.address.postCode) + ", " + "".concat(houseData.address.street);
}
printAddress(houseData);
var name = ['Andy', 'Ben', 'Shelly'];
name.push('Kevin');
var yesOrNo = [];
var trueOrFalse = [];
var computerSize = [];
computerSize.push({ w: 100, h: 200, t: 20 });
computerSize.push({ w: 100, h: 200 });
console.log(computerSize);
