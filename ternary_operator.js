// let result;

// result = 3 > 2 ? "true" : "false" // 거짓과 참이 result로 대입 됨 

// console.log(result)

const select = document.querySelector("select")
const button = document.querySelector("button")

button.addEventListener("click",function(){
    console.log(select.value)
    let result
    result = select.value == "foot" ? 
    "축구를 선택했는가?":
    "축구를 선택하지 않았네요?"
    alert(result)
}) // 선택한 셀렉터의 value의 값이 나옴

// 참거짓의 활용도로 사용 가능