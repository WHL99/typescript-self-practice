"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.querySelector('form');
const li = document.querySelector('ul');
const toDoList = getToDoList();
Array.from(toDoList).forEach(createTodo);
function getToDoList() {
    const toDoListJSON = localStorage.getItem("toDoList");
    if (toDoListJSON === null)
        return [];
    return JSON.parse(toDoListJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    const newToDoList = {
        title: input.value,
        completed: false
    };
    createTodo(newToDoList);
    toDoList.push(newToDoList);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    input.value = '';
}
function createTodo(todo) {
    const newInputText = input.value;
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.append(checkbox);
    newLi.append(todo.title);
    li.append(newLi);
}
form.addEventListener("submit", handleSubmit);
