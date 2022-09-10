//✋ Typeof Guards

function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3)
  } else {
    return value * 3
  }
}

//✋ Truthiness Guards

const el = document.getElementById('guest')
if (el) {
  el
} else {
  el
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char)
    }
  } else {
    // word   <--- false, it could be 1. Empty string 2. Undefined
    console.log('You did not pass in a word!')
  }
}

//✋ Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase() //<- typeof x is string
  }
}

//✋ Narrowing With The In Operator

interface Movie {
  title: string
  duration: number
}

interface TVShow {
  title: string
  numEpisodes: number
  episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
  if ('episodeDuration' in media) {
    return media.episodeDuration * media.numEpisodes
  }
  return media.duration
}
console.log(getRuntime({ title: 'Hello World!', duration: 187 }))
console.log(
  getRuntime({ title: 'Hello World!', episodeDuration: 37, numEpisodes: 10 }),
)

//✋ Instanceof Narrowing

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString())
  } else {
    console.log(new Date(date).toUTCString())
  }
}

console.log(printFullDate(new Date()))
console.log(printFullDate('12-30-2022'))
console.log(printFullDate('05.17.2022'))
console.log(printFullDate('09/28/2023'))

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(theName: User | Company) {
  if (theName instanceof User) {
    //   if ('username' in User) {     // <- 如果兩個class裡面都有username 則行不通
    return theName.username
  }
  return theName.name
}

//✋ Working With Type Predicates

interface Cat {
  name: string
  numLives: number
}

interface Dog {
  name: string
  breed: string
}

// Type Prediacte
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal
    return 'Meow'
  } else {
    animal
  }
}

//✋ Discriminated Unions
//✋ Exhaustiveness Checks With Never

interface Rooster {
  name: string
  age: number
  weight: number
  kind: 'rooster'
}

interface Cow {
  name: string
  age: number
  weight: number
  kind: 'cow'
}

interface Pig {
  name: string
  age: number
  weight: number
  kind: 'pig'
}

interface Sheep {
  name: string
  age: number
  weight: number
  kind: 'sheep'
}

type FarmAnimal = Rooster | Cow | Pig | Sheep
function getFarmAnimalSound(animal: FarmAnimal) {
  animal
  switch (animal.kind) {
    case 'rooster':
      return 'Kerker!'
    case 'cow':
      return 'Miea!'
    case 'pig':
      return 'Oink!'
    case 'sheep':
      return 'Hahaha!'
    default:
      //   const shouldNeverGetHere: never = animal
      //   return shouldNeverGetHere
      const _exhaustiveCheck: never = animal
      return _exhaustiveCheck
  }
}

const steve: Rooster = {
  name: 'Steve',
  age: 20,
  weight: 100,
  kind: 'rooster',
}
