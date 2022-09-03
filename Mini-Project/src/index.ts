interface Todo {
    title: string,
    completed: boolean
}





const btn = document.getElementById('btn')! as HTMLButtonElement //暫且type是HTMLButtonElement
// const btn = document.getElementById('btn')!  //!強調btn絕對不會是null

// its type is Document

const input = document.getElementById('input') as HTMLInputElement
//在input上按右鍵 go to type defination 可以看到很多詳細的type

const form = document.querySelector('form')!
const li = document.querySelector('ul')!


//或是js的方式 ?代表如過btn不存在 不執行
// btn.addEventListener("click",function(){
//     alert('You clicked!')
//     input.value=''
// })

const toDoList:Todo[]=getToDoList()
toDoList.forEach(getToDoList)

function getToDoList():Todo[]{
const toDoListJSON = localStorage.getItem("toDoList")
    if(toDoListJSON===null) return []
    return JSON.parse(toDoListJSON)

}


function handleSubmit(e:SubmitEvent){
e.preventDefault()
const newToDoList: Todo = {
    title: input.value ,
    completed: false
}
createTodo(newToDoList) 
toDoList.push(newToDoList)
localStorage.setItem("toDoList",JSON.stringify(toDoList))
input.value = ''
}

function createTodo(todo: Todo) {
    const newInputText = input.value 
    const newLi = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    
    newLi.append(checkbox)
    newLi.append(todo.title)
    li.append(newLi)
}
form.addEventListener("submit",handleSubmit)
