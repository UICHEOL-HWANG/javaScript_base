// object shorthand assignment 

// let name = "cheol";
// let age = "10";

// let peRson ={
//     name , 
//     age
// } 
// console.log(peRson)

//Destructuring 

// let person = {
//     name : "cheol",
//     age : 20
// }

// let {name,age} = person

// console.log(age) 

// let array = [1,2,3,4]
// let [a,b] = array 

// console.log(a,b) // a,b 1,2가 들어감 

// // spread 
// let person = {name : "cheol",age : 12}

// let person2 = {...person} // person의 값을 복사하지만 아예 다른 객체로 인식됨 
// let person3 = person // person과 같음 
// console.log(person2)
// console.log(person3)


// let a = [1,2]
// let b = [...a,3]

// console.log(b)

// let c = [...a,...b]
// console.log(c)

let person = null // 만약 person에 값이 존재한다면 person의 name 값을 출력하지만 

//그렇지 않은 경우 there is no person을 출력시킨다.

if(person){
    console.log(person.name)
}else{
    console.log("there is no person")
} // 조건문 결과

console.log(person? person.name:"there is no person") // 삼항 연산의 결과