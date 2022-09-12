import { add, sample, a } from './utils.js'; // export
import { times as newNameOfTimes } from './utils.js'; // export, and use 'as' to rename the function
import anyName from './User.js'; // export default
import { Admin } from './User.js'; // export
console.log(sample([12, 23, 14, 3, 2]));
console.log(add(1, 2));
console.log(newNameOfTimes(8, 9));
console.log('hello', a);
console.log(anyName);
console.log(Admin);
