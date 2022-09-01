"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grabscrab = exports.expressionsMatter = exports.checkForFactor = exports.between = void 0;
Math.round(2);
console.log('hello');
console.log(Math.round(2));
let a = 2;
const b = [1, 2, 3, 4, 5];
let movieTitle = 'Hello!';
movieTitle = 'bye!';
let setMovieTitle = movieTitle.toUpperCase();
var abc = 'i am abc';
let houseNumber = 10;
let hi = true;
let show = "good morning";
let theThing = 'a string';
function plus(num) {
    return num + num;
}
plus(3);
function newPlus(num) {
    return num + num;
}
newPlus(5);
function makeSentence(num, word) {
    return `${num}` + `${word}`;
}
makeSentence(5, 'hi');
function between(a, b) {
    const res = [a];
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
const houseData = {
    city: 'Berlin',
    NumberOfRooms: 4,
    address: {
        postCode: 13334,
        street: 'Hello Str.'
    },
    hasGarden: true,
    rent: 1600,
};
console.log(houseData);
function printHouseData(houseData) {
    return houseData;
}
printHouseData(houseData);
function printAddress(houseData) {
    return `${houseData.address.postCode}` + `, ` + `${houseData.address.street}`;
}
printAddress(houseData);
let name = ['Andy', 'Ben', 'Shelly'];
name.push('Kevin');
const yesOrNo = [];
const trueOrFalse = [];
const computerSize = [];
computerSize.push({ brand: 'HP', w: 100, h: 200, t: 20 });
computerSize.push({ brand: 'Apple', w: 100, h: 200 });
console.log(computerSize);
function grabscrab(anagram, dictionary) {
    let toArr = [];
    let sortedAna = anagram.split('').sort().join('');
    let sortedDictionary = dictionary.map(function (e) {
        let sortedE = e.split('').sort().join('');
        return sortedE;
    });
    for (let i = 0; i < sortedDictionary.length; i++) {
        if (sortedDictionary[i] === sortedAna) {
            toArr.push(dictionary[i]);
        }
    }
    return toArr;
}
exports.grabscrab = grabscrab;
//Unions - Narrowing the Type
function checkPrice(price) {
    if (typeof price === 'string') {
        `The Price is` + `${price}`;
    }
    else {
        price * 2;
    }
}
checkPrice(30);
const stuffs = [2, 4, 3, 'apple', 2, 'cake'];
const sache1 = [1, 2, 3];
const sache2 = ['1', '2', '3'];
//Literal Types
let zero = 0;
let mood;
mood = 'happy';
let today = 'Mon';
//Tuples
const color1 = [1, 2, 3, 4, 5, 6,];
const color2 = [1, 2, 3];
const goodRes = [200, 'Perfect!'];
//const badRes:Res=['Not found!',404] //the order is wrong
console.log(goodRes[0]);
goodRes[0] = 400;
console.log(goodRes[0]);
goodRes.push('test');
//Enums (It doesnt exist in JS.)
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
//what is the difference between type and interface???
const kevin = {
    first: 'Kevin',
    last: 'Muller',
    id: 39824,
    sayHi: () => { return 'Hi!'; }
};
const alice = {
    first: 'Alice',
    last: 'Chen',
    id: 39672,
    sayHi: () => { return 'Hi!'; }
};
const shoes = {
    name: 'Running shoes',
    price: 100,
    // giveDiscount(0.8){
    //     return price*0.8
    // }
    giveDiscount(percent) {
        return this.price * percent;
    }
};
// console.log(shoes)
shoes.giveDiscount(0.8);
