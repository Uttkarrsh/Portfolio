const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
const logo=document.getElementById("logo");
const link1=document.getElementById("link1");


const ham=()=>{
   hamburger.classList.toggle("active");
   navmenu.classList.toggle("active");
}
document.querySelectorAll(".nav-item").forEach(n=> n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    }))
window.addEventListener("scroll",()=>{
    var nav=document.querySelector(".nav");
    nav.classList.toggle("sticky",window.scrollY>0)
})
const showProgress=()=>{
let progressBar1=document.querySelector(".circular-progress1");
let valueContainer1=document.querySelector(".value-container1");

let progressBar2=document.querySelector(".circular-progress2");
let valueContainer2=document.querySelector(".value-container2");

let progressBar3=document.querySelector(".circular-progress3");
let valueContainer3=document.querySelector(".value-container3");

let progressBar4=document.querySelector(".circular-progress4");
let valueContainer4=document.querySelector(".value-container4");

let start=0;
let end=85;
let start2=0;
let end2=80;
let start3=0;
let end3=70;
let start4=0;
let end4=65;
let progress1=setInterval(()=>{
    start++;
    valueContainer1.innerHTML=`${start}%`;
    progressBar1.style.background=`conic-gradient(#4d004d ${start*3.6}deg,
        #111 ${start*3.6}deg)`;
        if(start==end){
            clearInterval(progress1);
        }
    
},20);
let progress2=setInterval(()=>{
    start2++;
    
    valueContainer2.innerHTML=`${start2}%`;
     progressBar2.style.background=`conic-gradient(#4d004d ${start2*3.6}deg,
         #111 ${start2*3.6}deg)`;
        if(start2==end2){
            clearInterval(progress2);
        }
    
},20);
let progress3=setInterval(()=>{
    start3++;
    
    valueContainer3.innerHTML=`${start3}%`;
     progressBar3.style.background=`conic-gradient(#4d004d ${start3*3.6}deg,
         #111 ${start3*3.6}deg)`;
        if(start3==end3){
            clearInterval(progress3);
        }
    
},20);
let progress4=setInterval(()=>{
    start4++;
    
    valueContainer4.innerHTML=`${start4}%`;
     progressBar4.style.background=`conic-gradient(#4d004d ${start4*3.6}deg,
         #111 ${start4*3.6}deg)`;
        if(start4==end4){
            clearInterval(progress4);
        }
    
},20);
}

const skills=document.getElementById("skills");

window.addEventListener("scroll",()=>{
    const sectionPos= skills.getBoundingClientRect().top;
    const screenPos=window.innerHeight;
    
    
    if(sectionPos>screenPos){
        showProgress();
    }
})



let links=document.querySelectorAll('.link');

links.forEach(link=>{
    link.addEventListener('click',function(){
        links.forEach(el=>el.classList.remove('linked'));
        this.classList.add('linked');
    });
});

