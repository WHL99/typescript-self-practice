import { type Person } from './types.js' //不同版本會有問題 所以最好加上 'type'

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!`)
  }
}

export class Admin {
  constructor(public username: string, public email: string) {}
  deleteFile() {
    console.log(`Admin ${this.username} deletes file!`)
  }
}
