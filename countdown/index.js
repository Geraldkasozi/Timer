
let paused = false
let IntervalTimer;
// console.log(TargetDate, currentDate, gap)
let retrieved = localStorage.getItem('deadline');

const startTimer = ()=>{
let inputvalue = document.querySelector('.applieddate input').value || retrieved

if(!inputvalue){
    console.log('no input value')
    return
}
localStorage.setItem('deadline', inputvalue)

let TargetDate = new Date(`${inputvalue} 00:00:00`).getTime()
let currentDate = new Date().getTime()
const gap = TargetDate - currentDate
const converted = gap / 1000;

let seconds = 1;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

    let myDays = Math.floor(converted/days)
    let myHr = Math.floor(converted / hours);
    let myMinute =  Math.floor((converted % hours) / minutes);
    let mySecond =  Math.floor(converted % minutes);

console.log(Math.floor(gap%days) / hours)
    document.querySelector(".day span").innerHTML = padding(myDays)
    document.querySelector(".hours span").innerHTML = padding(myHr) 
    document.querySelector(".min span").innerHTML =  padding(myMinute)
    document.querySelector(".seconds span").innerHTML = padding(mySecond) 

    if (converted <= 0) {
        clearInterval(IntervalTimer);
        console.log("Countdown finished!");
    }

 function padding(unit){
    if(unit.toString().length < 2){
        return '0' + unit
    }
    return unit
 }

}


document.querySelector(".start button").addEventListener("click", ()=>{
IntervalTimer = setInterval(startTimer, 1000)
})

document.querySelector(".pause button").addEventListener("click", ()=>{
    paused = true
    clearInterval(IntervalTimer)
})

