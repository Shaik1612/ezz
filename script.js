const scenes = document.querySelectorAll(".scene");

function show(scene){
scenes.forEach(s=>s.classList.remove("active"));
scene.classList.add("active");
}

/* Hacker typing */

const hackText = document.getElementById("hackText");

let hackMsg = "Scanning emotions... Locating heart owner... Accessing memories...";
let i = 0;

function hackTyping(){
if(i < hackMsg.length){
hackText.textContent += hackMsg[i];
i++;
setTimeout(hackTyping,40);
}else{
setTimeout(()=>show(passwordScene),2000);
}
}

hackTyping();

/* Password */

const passwordScene = document.getElementById("passwordScene");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

const memoryScene = document.getElementById("memoryScene");

unlockBtn.onclick = ()=>{

let val = passwordInput.value.toLowerCase().trim();

if(val === "nov 9" || val === "november 9"){
show(memoryScene);
memoryStory();
music.play();
}else{
error.textContent="Wrong memory 💔";
}

};

/* Memory Story */

const memoryText = document.getElementById("memoryText");

let memories = [
"The day you entered my life...",
"Everything felt softer...",
"Smiles felt brighter...",
"And my heart quietly chose you..."
];

let m = 0;

function memoryStory(){

if(m < memories.length){
memoryText.textContent = memories[m];
m++;
setTimeout(memoryStory,2500);
}else{
show(envelopeScene);
}

}

/* Envelope */

const envelopeScene = document.getElementById("envelopeScene");
const envelope = document.getElementById("envelope");

envelope.onclick = ()=>{
show(letterScene);
typeLetter();
};

/* Letter */

const letterScene = document.getElementById("letterScene");
const title = document.getElementById("title");

let letterMsg = `My Dearest Shavi...
You turned ordinary days into magic.
Would you make me the happiest soul
and be my Valentine? ❤️`;

let t = 0;

function typeLetter(){
if(t < letterMsg.length){
title.textContent += letterMsg[t];
t++;
setTimeout(typeLetter,35);
}
}

/* Buttons */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalText = document.getElementById("finalText");
const cat = document.getElementById("cat");

/* NO escape */

noBtn.onmouseover = ()=>{
noBtn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
};

/* YES */

yesBtn.onclick = ()=>{

    /* Update title with romantic message */
    title.textContent = "You just made my heart the happiest place in the universe 💖";

    /* Change cat animation */
    cat.src = "cat_dance.gif";

    /* Fade out buttons smoothly */
    const btnContainer = document.querySelector(".buttons");
    btnContainer.style.transition = "opacity 0.3s ease";
    btnContainer.style.opacity = "0";

    setTimeout(()=>{
        btnContainer.style.display = "none";
    },300);

    /* Show final message with better formatting */
    finalText.style.display = "block";
    finalText.innerText = `
You are the poetry my heart never knew how to write ✨

Valentine Date 🌹
Meow Restaurant — 7PM

I will be the one looking at you
like you are my entire universe ❤️`;

    startCountdown();
    confetti();
};

/* Countdown */

function startCountdown(){

let date = new Date("Feb 14 2026 19:00:00");

setInterval(()=>{

let now = new Date();
let diff = date-now;

let d = Math.floor(diff/1000/60/60/24);
let h = Math.floor(diff/1000/60/60)%24;
let m = Math.floor(diff/1000/60)%60;

document.getElementById("countdown").textContent =
`Our date begins in ${d}d ${h}h ${m}m`;

},1000);

}

/* Confetti */

function confetti(){

for(let i=0;i<60;i++){

let c=document.createElement("div");
c.style.position="fixed";
c.style.width="8px";
c.style.height="8px";
c.style.background="pink";
c.style.top="50%";
c.style.left="50%";

c.style.transform=`translate(${Math.random()*600-300}px,${Math.random()*600-300}px)`;

document.body.appendChild(c);

setTimeout(()=>c.remove(),1000);
}
}

/* Particles */

setInterval(()=>{
let p=document.createElement("div");
p.style.left=Math.random()*100+"vw";
document.getElementById("particles").appendChild(p);

setTimeout(()=>p.remove(),6000);
},300);