const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")

// todayDiv.textContent = "나는 날짜"
// timeDiv.textContent = "나는 시간" 

//매 초마다 시간이 가게끔 하는 동작 구현 

function getTime(){
    let now = new Date(); // Month 값 같은 경우에는 +1을 해줘야한다.
    timeDiv.textContent = now;
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    month = month <= 10 ? `0${month}`: month // 삼항연산자 month가 10보다 작으면 0을 붙이고 
    //아니면 그대로 month를 출력해준다.
    date = date <= 10 ? `0${date}`: date
    hour = hour <= 10 ? `0${hour}`: hour
    minute = minute <= 10 ? `0${minute}`: minute
    second = second <= 10 ? `0${second}`: second

    todayDiv.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`
}

getTime() //지금 초기화 되는 것을 막아줌
setInterval(getTime,1000)
