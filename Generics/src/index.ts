const inputEl = document.querySelector<HTMLInputElement>('#username')!
//HTMLInputElement != HTMLElement

console.log(inputEl)
inputEl.value = 'HELLO'

const btn = document.querySelector<HTMLButtonElement>('.btn')!

function stringIdentify(item:string):string{
    return item
}

function numberIdentify(item:number):number{
    return item
}


// generics function 👍
function identify<Type>(item:Type):Type{
    return item
}

identify<number>(7)
identify<string>('7')
identify<boolean>(true)

//
function getRandomElement<T>(list:T[]):T{
    return list[Math.floor(Math.random()*list.length)];
}
console.log(getRandomElement<string>(['a','b','c','z']))
console.log(getRandomElement<number>([123,22,41,44222]))
console.log(getRandomElement<any>([123,'22',41,44222,'hi']))
console.log(getRandomElement<boolean>([true,false,true]))
//                             ^
//                             |
//------------------------------ no need to give type
console.log(getRandomElement([123,'22',41,44222,'hi']))

//🖐️ Generics With Multiple Types
function merge<T,U>(object1:T,object2:U){
    return {
        ...object1,
        ...object2,
    }
}
const comboObj = merge({name:'Lisa'},{age:20, gender:['female','male']})
console.log(comboObj)

function merge2<T extends object,U extends object>(object1:T,object2:U){
    return {
        ...object1,
        ...object2,
    }
}
// const comboObj2 = merge2({name:'Lisa'},999) //👎 999必須是obj
const comboObj2 = merge2({name:'Lisa'},{num:999}) 


//🖐️ Adding Type Constraints
interface Lengthy {
    length:number
}

//以下方法也可以
// function printDoubleLength<T extends Lengthy>(thing:T):number{
//     return thing.length * 2
// }

//以下用interface
function printDoubleLength(thing: Lengthy):number{
    return thing.length * 2
}
printDoubleLength('wdjf')

//🖐️ Default Type Parameters
function makeEmptyArray<T = number>():T[]{
    return []
}
const numbers = makeEmptyArray()
const booleans = makeEmptyArray<boolean>()

//🖐️ Writing Generic Classes

// A Generic Class Example
interface Song {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: string;
}

// class VideoPlaylist {
//     public videos: Video [] = []
// }
  
// class SongPlaylist {
//     public songs: Video [] = []
// }
  
class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
      this.queue.push(el);
    }
}
  
const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

console.log(songs)