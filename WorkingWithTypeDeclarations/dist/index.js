"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    console.log(res);
    printUser(res.data); //<- 只印一個 .get<User>
})
    .catch((err) => {
    console.log('ERROR!', err);
});
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/')
    .then((res) => {
    console.log(res);
    res.data.forEach(printUser); //<- 印全部 .get<User[]>
})
    .catch((err) => {
    console.log('ERROR!', err);
});
function printUser(user) {
    console.log('使用者名稱', user.name);
    console.log('電子信箱', user.email);
    console.log('公司名稱', user.company.name);
}
