import axios from 'axios'
// import lodash from 'lodash'

// lodash.partition()

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

function printUser(user: User) {
  console.log('使用者名稱', user.name)
  console.log('電子信箱', user.email)
  console.log('公司名稱', user.company.name)
}

// 只印一個 .get<User>
axios
  .get<User>('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    console.log(res)
    printUser(res.data)
  })
  .catch((err) => {
    console.log('ERROR!', err)
  })

// 印全部 .get<User[]>
axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users/')
  .then((res) => {
    console.log(res)
    res.data.forEach(printUser)
  })
  .catch((err) => {
    console.log('ERROR!', err)
  })
