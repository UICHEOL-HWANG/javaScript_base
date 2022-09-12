// console.log(document.querySelector("h1"))
// console.log(document.querySelector("p"))
// console.log(document.querySelector("#text"))
// console.log(document.querySelector(".paragraph")) 선택한 요소들을 반환 해줌 

// console.log(document.getElementById("text"))
// console.log(document.getElementById("p")) id인 요소들을 반환 해줌

// const h1 = document.querySelector("h1")
// const p = document.getElementById("text")

// console.log(h1.textContent) // 큰 제목입니다를 가져옴
// h1.textContent = "헬로우 여러분"// h1 컨텐츠 이름이 변경됨 

// p.textContent = "겟엘리먼트바이아이디!"
// console.log(p.textContent) p태그가 변한다

// const inputType = document.querySelector("#typing")
// const inputClick = document.querySelector("#push")

// const handleTyping = function(){
//     console.log("타이핑 중...")
// }

// const handleClick= function(){
//     console.log("클릭 중 .. ")

// }

//  inputType.onkeydown = handleTyping //키보드가 눌렸을 때 핸들 타이핑이 실행 됨
//  inputClick.onclick = handleClick // 인풋이 클릭될 때마다 동작 됨 콘솔창에 클릭된 개수가 나옴

// 주의사항! 함수를 집어넣지 않는 이상 함수 수식어 ()를 붙이면 안됨 

// inputType.onkeydown = function(){
//     console.log("타이핑 중 ...")
// }
// inputClick.onclick = function(){
//     console.log("클릭 중...")
// }
// 위 인풋타입,인풋클릭과 같은 기능을 한다. 

// adEventListener 

// const btn1 = document.getElementById("one")
// const btn2 = document.getElementById("two")
// const btn3 = document.getElementById("three")

// const handleClick = function(event){
//     console.log(event.target) //이벤트가 발생한 버튼의 타겟을 출력
// } // 이벤트 객체 

// btn1.addEventListener("click",handleClick) //클릭이 발생할 수 있는 인자명 
// btn2.addEventListener("click",handleClick) //클릭이 발생할 수 있는 인자명 
// btn3.addEventListener("click",handleClick) //클릭이 발생할 수 있는 인자명 


// // btn2.addEventListener("click",function(){
// //     console.log("또 다른 핸들러 추가 등록!")
// // }) //여러개의 등록된 핸들러 추가 가능

// //btn2.removeEventListener("click",handleClick) // 핸들 클릭의 이벤트를 제거 할 때 사용
