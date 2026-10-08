
let clock=document.getElementById("clock");
function setclock(){
    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    clock.innerHTML=`${hours}:${minutes}:${seconds}`;
}
setclock();
setInterval(setclock,1000);