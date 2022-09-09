"use strict";
//🖐️ Generics, Arrow Functions, & TSX Files
// function getRandomElementTest<T>(list:T[]):T{
//     return list[Math.floor(Math.random()*list.length)];
// }
//------------------------------
//                             ↓   (syntax in tsx with a 逗號)
const getRandomElementTest = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
