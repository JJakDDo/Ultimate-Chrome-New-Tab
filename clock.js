const clockDiv = document.querySelector(".clock");
const time = clockDiv.querySelector(".time");
const second = clockDiv.querySelector(".sec");
const today = document.querySelector(".date");

function getCurrentTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const yoil = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const arrYoil = ["일", "월", "화", "수", "목", "금", "토"];

    time.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`;
    second.innerText = `${sec < 10 ? `0${sec}` : sec}`;
    today.innerText = `${year}년 ${month < 10 ? `0${month+1}` : month+1}월 ${day < 10 ? `0${day}` : day}일 ${arrYoil[yoil]}요일`;

}

function init(){
    setInterval(getCurrentTime, 1000);
}

init();