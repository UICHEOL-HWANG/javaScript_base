// 클래스 메소드 
// add : 지정한 클래스 값 추가 ex) add("new_class")
// remove : 지정한 클래스 값 제거 ex) remove("old_class")
// item : 인덱스를 이용해 클래스 값 반환 ex) item(1)
// toggle : 클래스 값 토글링 ex) toggle("some_value")
// contains : 지정 클래스 값 존재 여부 확인 ex) cotains("is_contains")
// replace : 기존 클래스를 새 클래스로 대체 ex) replace("old","new")

const h1 = document.querySelector("h1")
const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")
const toggleBtn = document.querySelector("#toggle")

console.log(h1.classList) // 클래스가 가지고 있는 속성을 반환 시켜줌 

addBtn.addEventListener("click",function(){
    h1.classList.add("text")
}) // 주어진 문자열을 텍스트를 추가한다 

removeBtn.addEventListener("click",function(){
    h1.classList.remove("text")
}) // 텍스트 클래스를 지우고 해당 색을 지움

toggleBtn.addEventListener("click",function(){
    h1.classList.toggle("text")
}) // 있으면 제거하고 없으면 만든다 없으면 클래스 값 생성 , 있으면 없앤다. 스위치 