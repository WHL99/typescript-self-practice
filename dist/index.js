"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadable = exports.Kata = exports.xo2 = exports.xo = exports.xo3 = exports.number = exports.generateShape = exports.breakChocolate = exports.add = void 0;
const dog = {
    breed: 'Husky',
    name: 'Kevin',
    age: 12
};
console.log(dog);
function add(num1, num2) {
    let num01 = num1.toString().split('').reverse();
    let num02 = num2.toString().split('').reverse();
    let res = [];
    for (let i = 0; i < num01.length; i++) {
        for (let j = 0; j < num02.length; j++) {
            let eachSum = Number(num01[i]) + Number(num02[j]);
            i++;
            res.push(eachSum);
        }
        return Number(res.reverse().join(''));
    }
}
exports.add = add;
add(12, 34);
function breakChocolate(n, m) {
    return n * m - 1;
}
exports.breakChocolate = breakChocolate;
function generateShape(int) {
    let res = int * int;
    if (res === 1) {
        return '+'.repeat(res);
    }
    else {
        return '+'.repeat(int) + ('\n' + '+'.repeat(int)).repeat(int - 1);
    }
}
exports.generateShape = generateShape;
function number(array) {
    let res = [];
    array.map(function (ele, index) {
        let order = index + 1;
        return res.push(order + ':' + ele);
    });
    return res;
}
exports.number = number;
function xo3(str) {
    let newStr = str.toLowerCase();
    if (newStr.match(/x/g) !== null) {
        let xMatchNum = newStr.match(/x/g).length;
    }
    let xMatchNum = newStr.match(/x/g).length;
    let oMatchNum = newStr.match(/o/g).length;
    return xMatchNum === oMatchNum;
}
exports.xo3 = xo3;
function xo(str) {
    let newStr = str.toLowerCase();
    let checkX = new RegExp(/x/g);
    let checkO = new RegExp(/o/g);
    if (newStr.match(/x/g) === null && newStr.match(/o/g) === null) {
        return true;
    }
    else if (newStr.match(/x/g) === null || newStr.match(/o/g) === null) {
        return false;
    }
    else {
        return checkX.test(str).length === checkO.test(str).length;
        // return checkX.test(str)
    }
}
exports.xo = xo;
function xo2(str) {
    return (str.match(/o/gi) === null && str.match(/x/gi) === null) ? true : (str.match(/o/gi) === null || str.match(/x/gi) === null) ? false : (str.match(/o/gi).length === str.match(/x/gi).length) ? true : false;
}
exports.xo2 = xo2;
class Kata {
    static validatePin(pin) {
        return Kata.pinFormat.test(pin);
    }
}
exports.Kata = Kata;
Kata.pinFormat = new RegExp(/^\d{4}(\d{2})?$/);
//   export function humanReadable(seconds:number) {
//     let quo1:number = Math.floor(seconds / 60)
//     let rem1:number = seconds % 60
//     let quo2:number = Math.floor(quo1 / 60)
//     let rem2:number = quo1 % 60
//     if(quo1 === 0 ){
//         if(rem1>9){
//             return '00:00:'+rem1.toString()
//         }else{
//             return '00:00:0'+rem1.toString()
//         }
//     }else if(quo2>9 ){
//         if(rem2>9){
//             return '00:'+quo2.toString()+':'+rem2.toString()
//         }else{
//             return '00:'+quo2.toString()+':0'+rem2.toString()
//         }
//     }else if(quo2<10 ){
//         if(rem2>9){
//             return '00:0'+quo2.toString()+':'+rem2.toString()
//         }else{
//             return '00:0'+quo2.toString()+':0'+rem2.toString()
//         }
//     }
//   }
function humanReadable(seconds) {
    if (seconds <= 86399) {
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    }
    else {
        let quo = Math.floor(seconds / 3600);
        return quo.toString() + new Date(seconds * 1000).toISOString().slice(13, 19);
    }
}
exports.humanReadable = humanReadable;
