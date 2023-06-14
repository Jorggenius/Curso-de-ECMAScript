// arrays destructuring

let fruits = ['apple', 'Banana']
let [a, b] = fruits
console.log(a, b)

// object destructuring

let user = {username: 'oscar', age: 34}
let {username, age} = user
console.log(username, age)

//spread operator

let person = {name: 'Oscar', age: 28}
let country = 'MX'

let data = {...person, country}
console.log(data)
 // rest

 function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
 }

 sum(1, 1, 2, 3)