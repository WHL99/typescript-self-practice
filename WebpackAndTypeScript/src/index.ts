import Dog from './Dog'
import SchelterDog from './ShelterDog'

import { add, divide, multiply } from './utils'

console.log('相加', add(1, 2))

const myDog = new Dog('Cutie', 'Husky', 10)

const mySchelterDog = new SchelterDog('Albert', 'Border', 7, 'City Schelter')

myDog.bark()

mySchelterDog.bark()
