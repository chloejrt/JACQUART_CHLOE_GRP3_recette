"use strict";

let body = document.getElementById("body");
let darkActive= false;
let btDark=document.getElementById("button_darkMode");
let elementsDark=document.getElementsByClassName("dark_mode");
let menu_burger=document.getElementsByClassName("burger-menu")[0];
let menu_burger_list = document.getElementById("menu");

function dark(){
    if(darkActive==false){
        body.style.background="#CDCDCD";
        body.style.color="white";
        menu_burger.style.background ="gray";
        menu_burger.style.color ="white";
        menu_burger_list.style.background ="gray";

        for (var e=0; e<elementsDark.length; e++) {
            elementsDark[e].style.background = "#949494";
            elementsDark[e].style.color = "white";
        }
        darkActive=true;
    }else{
        body.style.background="antiquewhite";
        body.style.color="black";
        menu_burger.style.background="rgb(214, 168, 108)";
        menu_burger.style.color="black";
        menu_burger_list.style.background ="rgb(214, 168, 108)";

        for (var e=0; e<elementsDark.length; e++) {
            elementsDark[e].style.background = "burlywood";
            elementsDark[e].style.color = "black";
        }

        darkActive=false;
    }
}
btDark.addEventListener('click',dark);
