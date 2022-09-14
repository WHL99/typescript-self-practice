"use strict";
const inputEl = document.querySelector('#username');
//HTMLInputElement != HTMLElement
console.log(inputEl);
inputEl.value = 'HELLO';
const btn = document.querySelector('.btn');
function stringIdentify(item) {
    return item;
}
function numberIdentify(item) {
    return item;
}
// generics function 👍
function identify(item) {
    return item;
}
identify(7);
identify('7');
identify(true);
//
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}
console.log(getRandomElement(['a', 'b', 'c', 'z']));
console.log(getRandomElement([123, 22, 41, 44222]));
console.log(getRandomElement([123, '22', 41, 44222, 'hi']));
console.log(getRandomElement([true, false, true]));
//                             ^
//                             |
//------------------------------ no need to give type
console.log(getRandomElement([123, '22', 41, 44222, 'hi']));
//🖐️ Generics With Multiple Types
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'Lisa' }, { age: 20, gender: ['female', 'male'] });
console.log(comboObj);
function merge2(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
// const comboObj2 = merge2({name:'Lisa'},999) //👎 999必須是obj
const comboObj2 = merge2({ name: 'Lisa' }, { num: 999 });
//以下方法也可以
// function printDoubleLength<T extends Lengthy>(thing:T):number{
//     return thing.length * 2
// }
//以下用interface
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('wdjf');
//🖐️ Default Type Parameters
function makeEmptyArray() {
    return [];
}
const numbers = makeEmptyArray();
const booleans = makeEmptyArray();
// class VideoPlaylist {
//     public videos: Video [] = []
// }
// class SongPlaylist {
//     public songs: Video [] = []
// }
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
console.log(songs);
const persons = [
    {
        type: 'user',
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball',
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator',
    },
];
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
function logPerson(person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
function filterUsers(persons, criteria) {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
console.log('Users of age 23:');
filterUsers(persons, {
    age: 23,
}).forEach(logPerson);
// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
