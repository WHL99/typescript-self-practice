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


export function grabscrab(anagram: string, dictionary: string[]): string[] {
    let toArr :string [] = []
     let sortedAna:string = anagram.split('').sort().join('')
     let sortedDictionary = dictionary.map(function(e){
       let sortedE:string = e.split('').sort().join('')
       
       return sortedE
       
     })
     for(let i=0; i<sortedDictionary.length; i++ ){
       
       if(sortedDictionary[i] === sortedAna ){
          toArr.push(dictionary[i])
         
       }
     }   
    return toArr
  }
  


  //Unions - Narrowing the Type
function checkPrice(price:number | string):void{
    if(typeof price === 'string'){
    `The Price is`+`${price}`

    }else{
        price*2
    }

}
checkPrice(30)

const stuffs:(number|string)[]=[2,4,3,'apple',2,'cake']

const sache1: number[] | string[] = [1,2,3]

const sache2: number[] | string[] = ['1','2','3']

//Literal Types
let zero:0 = 0

let mood:'happy'|'sad'|'angry'
mood='happy'

type Day = 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'|'Sun'
let today:Day = 'Mon'

//Tuples
const color1:number[]=[1,2,3,4,5,6,]
const color2:[number,number,number]=[1,2,3]

type Res = [number,string]
const goodRes:Res=[200,'Perfect!']
//const badRes:Res=['Not found!',404] //the order is wrong

console.log(goodRes[0])
goodRes[0]=400
console.log(goodRes[0])

goodRes.push('test')

//Enums (It doesnt exist in JS.)
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
  }

const myStatus = OrderStatus.DELIVERED;
  
function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
  }
  
isDelivered(OrderStatus.RETURNED);

const enum FamilyStatus {    //const!
    SINGLE,
    DIVORCED,
    MARRIED,
  }

//Interface
interface PersonInterface {
    readonly id:number,
    first:string,
    last:string,
    nickname?:string,
    sayHi():string
}

type PersonType = {
    readonly id:number,
    first:string,
    last:string,
    nickname?:string,
    sayHi():string
}

//what is the difference between type and interface???
const kevin: PersonInterface={
    first:'Kevin',
    last:'Muller',
    id:39824,
    sayHi:()=>{return 'Hi!'}
}


const alice: PersonType={
    first:'Alice',
    last:'Chen',
    id:39672,
    sayHi:()=>{return 'Hi!'}
}

interface Produce{
    name:string,
    price:number,
    giveDiscount(discount:number):number
    // giveDiscount(discount:number):number{
    //   return this.price * this.discount
    // }
    // Can't implement a function inside interface!
}

const shoes: Produce = {
    name:'Running shoes',
    price:100,
    // giveDiscount(0.8){
    //     return price*0.8
    // }
    giveDiscount(percent){
        return this.price * percent
    }
}

// console.log(shoes)
shoes.giveDiscount(0.8)