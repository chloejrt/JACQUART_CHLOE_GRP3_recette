"use strict";

sessionStorage.setItem("dark_mode", false)

function carouselImage(){
    let button=document.getElementById("button_recette");
    let image=document.getElementsByClassName("carousel")[0];
    let imageattribute=image.getAttribute('src');
    console.log (image);
    switch(imageattribute){ 
        case 'images/gateau.jpg': 
            image.src='images/tarte_fraise.jpg';
            button.href="tarteFraise.html"
            break;
        case 'images/tarte_fraise.jpg': 
            image.src='images/late_fraise.jpg';
            button.href="lateFraise.html";
            break;
        case 'images/late_fraise.jpg': 
            image.src='images/gateau.jpg';
            button.href="gateauChocolat.html";
            break;
        default:alert("Page introuvable");
    }
}

let bt=document.getElementsByClassName('carousel')[0];  
bt.addEventListener('click',carouselImage);
console.log (bt);

