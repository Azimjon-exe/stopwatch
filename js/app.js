let hour = 0;
let min = 0;
let sec = 0;
let width = 0;

document.getElementById("sec").innerText = sec;
document.getElementById("min").innerText = min;
document.getElementById("hour").innerText = hour;   



setInterval(() => {
    sec+=1;
    width+=15;
    document.getElementById("sa2").style.width = width+"px";
    document.getElementById("sec").innerText = sec; 
if(sec==60){
    sec = 0;
    width=0;
    document.getElementById("sec").innerText = sec;  
    min+=1
    document.getElementById("min").innerText = min;
}; 
if(min==60){
    min = 0;
    document.getElementById("min").innerText = min;
    hour+=1
    document.getElementById("hour").innerText = hour;
}; 
}, 1000);