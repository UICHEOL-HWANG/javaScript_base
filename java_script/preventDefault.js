// const textInput = document.getElementById("text")
// const button = document.getElementById("button")

// button.addEventListener("click",function(){
//     textInput.value = "클릭하면 이렇게 바뀝니다."
// }) 

const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault() //기존의 기능을 차단한다 
    console.log(form.name.value)
    console.log(form.town.value)// redirection 기능이 default로 들어옴 
}) 