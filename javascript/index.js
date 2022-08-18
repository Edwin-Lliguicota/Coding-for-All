let slide1 = document.getElementById('slide_container1');
let slide2= document.getElementById('slide_container2');
let slide3 = document.getElementById('slide_container3');

let slideArray = [slide1,slide2,slide3]

let slide = 1;


const forwardbuttonElement = document.getElementById('forward');
const backwardbuttonElement = document.getElementById('backward');

function hideAll(){
for (let sd of slideArray ){
    sd.classList.add("hide")
}
}

function onClick(e) {
hideAll();
 let id = "slide_container"
 if(e.target.id== "forward") 
 slide +=1
 
 else {
    slide -= 1
 }
 
 if (slide==4 ) 
    slide = 1
     
    let tempSlide = document.getElementById(id + slide.toString())
    tempSlide.classList.toggle("hide")
}
// to string returns a string version of a number

forwardbuttonElement.addEventListener('click', onClick)
backwardbuttonElement.addEventListener('click', onClick)









