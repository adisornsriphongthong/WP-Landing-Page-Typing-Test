let arrow_down = false;
let color_arrow_donw;
document.getElementById("arrow-down").onclick = function(){
    if(arrow_down == true){
        document.getElementById("rorate-arrowdown").style.transform = '';
        document.getElementById("menu-keyboard").style.display = "";
        document.getElementById("menu-keyboard").style.marginTop = "";
        document.getElementById("menu-keyboard").style.transition = "";
        document.getElementById("rorate-arrowdown").style.transition = "0.5s";
        arrow_down = false;
    }
    else{
        document.getElementById("rorate-arrowdown").style.transform = "rotate(180deg)"
        document.getElementById("rorate-arrowdown").style.transition = "0.5s";
        document.getElementById("menu-keyboard").style.display = "flex";
        document.getElementById("menu-keyboard").style.marginTop = "-60px";
        document.getElementById("menu-keyboard").style.transition = "0.5s";

        arrow_down = true;
    }
}
