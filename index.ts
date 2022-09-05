interface Animal {
    breed:string,
name:string,
age:number
}

const dog:Animal={
    breed:'Husky',
    name:'Kevin',
    age:12
}

console.log(dog)

export function add(num1: number, num2: number): any {
   let num01:string[]= num1.toString().split('').reverse()
   let num02:string[]= num2.toString().split('').reverse()
   let res:number[] = []

   for(let i=0; i<num01.length; i++){
    for(let j=0; j<num02.length; j++){
        let eachSum:number = Number(num01[i])+Number(num02[j])
         i++
         res.push(eachSum)
    }
    return Number(res.reverse().join(''))
   }
  }

  add(12,34)

  export function breakChocolate(n: number, m: number): number {
    return n*m-1
  }

  export function generateShape(int: number): string {
    let res = int * int
    if(res===1){
    return '+'.repeat(res)
    }else{
      return '+'.repeat(int) +  ('\n' + '+'.repeat(int)).repeat(int-1)
    }
  }

  export function number(array: string[]): string[]{
    let res:string[]=[]
    array.map(function(ele,index){

        let order = index + 1
      return res.push(order +':'+ele)
    })
    return res
  }

  export function xo3(str: string) {

    let newStr:string = str.toLowerCase()
    if( newStr.match(/x/g) !== null){
    let xMatchNum :number  = newStr.match(/x/g)!.length

    }
    let xMatchNum :number  = newStr.match(/x/g)!.length
    let oMatchNum :number = newStr.match(/o/g)!.length
    
    return xMatchNum===oMatchNum
  }


  export function xo(str: string):boolean {

    let newStr:string = str.toLowerCase()

    let checkX: RegExp = new RegExp(/x/g);
    let checkO: RegExp = new RegExp(/o/g);

   
    if(newStr.match(/x/g) === null && newStr.match(/o/g) === null){
        return true
    }
    else if(newStr.match(/x/g) === null || newStr.match(/o/g) === null){
        return false
    }
    else {
        return checkX.test(str).length === checkO.test(str).length 
        // return checkX.test(str)

    }
  }

export function xo2(str: string): boolean{
    return (str.match(/o/gi) === null && str.match(/x/gi) ===null)?  true : (str.match(/o/gi) === null || str.match(/x/gi) === null) ? false : (str.match(/o/gi)!.length === str.match(/x/gi)!.length) ? true : false
  }



  export class Kata {
    static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);
    
    static validatePin(pin: string): boolean {
      return Kata.pinFormat.test(pin);
    }
  }
  
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

export function humanReadable(seconds:number):string {
    if(seconds<=86399){
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    }else{

    let quo:number = Math.floor(seconds / 3600)

        return quo.toString() + new Date(seconds * 1000).toISOString().slice(13, 19);

    }
  }
