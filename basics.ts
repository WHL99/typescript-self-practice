Math.round(2)
console.log('hello')
console.log(Math.round(2))
let a:number = 2
const b:object = [1,2,3,4,5]

let movieTitle:string='Hello!'
movieTitle = 'bye!'
let setMovieTitle:string = movieTitle.toUpperCase()

var abc:string = 'i am abc'

let houseNumber:number = 10

let hi:boolean=true

let show = "good morning"

let theThing:any='a string'


function plus(num:number){
    return num + num
}

plus(3)

function newPlus(num:number):number{
     return num + num
}
newPlus(5)

function makeSentence(num:number,word:string):string{
    return `${num}`+`${word}`
}
makeSentence(5,'hi')


export function between(a: number, b: number): number[] {
    const res=[a]
    while(a<b){
      a++
      res.push(a)
    }
    return res;
  }
  
  
  export function checkForFactor(base: number, factor: number) :boolean{
    return base % factor === 0
  
  }

  export function expressionsMatter(a: number, b: number, c: number): number {
return Math.max(a * ( b + c ),a * b * c,a + ( b * c ), ( a + b ) * c)
 }

 function printName(person:{first:string}){}
 printName({first:'Wen'})

 function math():{x:number,y:number}{
    return {x:Math.random(),y:Math.random()}
 }
 math()

 //nested objects

type House={
    city:string,
    NumberOfRooms:number,
    address:{
        postCode:number,
        street:string,
    },
    hasGarden:boolean,
    readonly rent:number
}

 const houseData:House = {
    city: 'Berlin',
    NumberOfRooms:4,
    address:{
        postCode:13334,
        street:'Hello Str.'
    },
    hasGarden: true,
    rent: 1600,
 }

 console.log(houseData)

function printHouseData(houseData:House){
    return houseData
}
printHouseData(houseData)

function printAddress(houseData:House):string{
    return `${houseData.address.postCode}`+`, `+`${houseData.address.street}`
}
printAddress(houseData)

let name:string[] = ['Andy','Ben','Shelly']
name.push('Kevin')

const yesOrNo : boolean[] = []
const trueOrFalse : Array<boolean> = []

type Size = {
    brand:string,
    w:number,
    h:number,
    t?:number,
}

const computerSize: Size[] = []
computerSize.push({brand:'HP',w:100,h:200,t:20})
computerSize.push({brand:'Apple',w:100,h:200})
console.log(computerSize)