const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")
//초기 기본설정 

//배열 
const lottoNumbers = [] 
const colors = ['tomato','teal','orange','purple','blue'] // 색을 구분시키기 위한 colors 빈 배열 



function paintNumber(number){ // 랜덤숫자를 출력하기 위해 div와 class를 생성하여 넣어줌
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number / 10) // 주어진 번호에 따라 색을 다르게 지정 floor로 소수점 제거  
    eachNumDiv.classList.add("eachnum")
    eachNumDiv.style.backgroundColor = colors[colorIndex] // 색깔 대입
    eachNumDiv.textContent = number // 추첨번호 가시화를 위한 컨텐츠
    numbersDiv.appendChild(eachNumDiv) //여섯 번 추가
} //새 div,class를 만들어 줌

//기능 만들기

drawButton.addEventListener("click",function(){
    while(lottoNumbers.length < 6 ){//로또번호의 개수가 6개보다 작은 것들이 반복 
        let ran = Math.floor(Math.random() * 45) + 1 //0~랜덤 숫자 추출 0~45추출 
        //Math.floor 소수점 제거 메소드
        if(lottoNumbers.indexOf(ran) === -1){ // indexOf 메소드는 주어진 값이 배열에 몇 번 인덱스에 존재 하는지를 반환 
            lottoNumbers.push(ran)// push : append와 비슷함 넣어준다.
            //랜덤 숫자 만들 때 동일 번호가 연속으로 나오지 않게 만들어줘야 한다.
            // -1은 INDEX에 아무것도 존재하지 않는다는 뜻 
            // 아무것도 존재하지 않게 해야 동일 번호가 연속적으로 나오지 않음을 의미
            paintNumber(ran) // 숫자를 표시하기 위한 함수
        }

    }
    console.log(lottoNumbers)
})

resetButton.addEventListener("click",function(){
    numbersDiv.innerHTML = "" // html 코드를 아예 삭제 시키는 명령어 
    lottoNumbers.splice(0,6) // 주어진 인자를 가지고 몇번 인덱스부터 몇번 인덱스까지 지우는 메소드
    
})// reset 끝 