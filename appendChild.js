// createElement 메소드 

// appendChild 호출 된 후 자기가 추가한 자식을 반환 
// append는 반환되는 값 없이 호출 문자를 출력받지 못함

const button = document.getElementById("push")
const div = document.getElementById("area")

// 생성 

button.addEventListener("click",function(){
    console.log("div 생성")
    const newDiv = document.createElement("div")
    
    newDiv.style.backgroundColor = "red"
    newDiv.style.width = "200px"
    newDiv.style.height = "200px" 
    // 높이 길이 빨간색인 200 스타일 속성을 가진 div를 계속적으로 생성
    
    
    div.appendChild(newDiv) //새로운 div 노드를 추가해준다. 
}) // div를 새로 생성시켜준다 


