"use strict";
//✋ Typeof Guards
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    else {
        return value * 3;
    }
}
//✋ Truthiness Guards
const el = document.getElementById('guest');
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        // word   <--- false, it could be 1. Empty string 2. Undefined
        console.log('You did not pass in a word!');
    }
};
//✋ Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase(); //<- typeof x is string
    }
}
function getRuntime(media) {
    if ('episodeDuration' in media) {
        return media.episodeDuration * media.numEpisodes;
    }
    return media.duration;
}
console.log(getRuntime({ title: 'Hello World!', duration: 187 }));
console.log(getRuntime({ title: 'Hello World!', episodeDuration: 37, numEpisodes: 10 }));
//✋ Instanceof Narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
console.log(printFullDate(new Date()));
console.log(printFullDate('12-30-2022'));
console.log(printFullDate('05.17.2022'));
console.log(printFullDate('09/28/2023'));
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(theName) {
    if (theName instanceof User) {
        //   if ('username' in User) {     // <- 如果兩個class裡面都有username 則行不通
        return theName.username;
    }
    return theName.name;
}
// Type Prediacte
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return 'Meow';
    }
    else {
        animal;
    }
}
function getFarmAnimalSound(animal) {
    animal;
    switch (animal.kind) {
        case 'rooster':
            return 'Kerker!';
        case 'cow':
            return 'Miea!';
        case 'pig':
            return 'Oink!';
        case 'sheep':
            return 'Hahaha!';
        default:
            //   const shouldNeverGetHere: never = animal
            //   return shouldNeverGetHere
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const steve = {
    name: 'Steve',
    age: 20,
    weight: 100,
    kind: 'rooster',
};
