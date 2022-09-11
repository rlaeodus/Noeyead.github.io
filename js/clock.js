const clock = document.querySelector("#clock"); // html에서 clock id 가져오기

function getClock(){ // 시계 화면 출력
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${second}`;

}

getClock() // 시계표시
setInterval(getClock, 1000); // 1999ms 마다 시계함수 표시