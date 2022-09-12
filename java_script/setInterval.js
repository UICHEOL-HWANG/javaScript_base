// setTimeout(function(){
//     console.log(1234)
// },2000) //  2초 뒤에 실행 

// 주어진 시간 안에 한 번만 실행 
const button = document.querySelector('button') //html에 있는 버튼을 선택 
let interId;

interId = setInterval(function(){
    console.log("Hello")
},1000) //5000초 마다 반응 

console.log(interId) //0이 아닌 랜덤 숫자를 반환한다.

button.addEventListener('click',function(){
    clearInterval(interId)
})