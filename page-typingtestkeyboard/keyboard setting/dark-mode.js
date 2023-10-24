let dark_mode = false;

document.getElementById("dark-light").onclick = function(){
    if(dark_mode){
        color = "black";
        font_color = "black";

        color_2 = "black";
        font_color_2 = "#fff";

        invert = "filter : invert(0);";

        color_font_input = "black";

        color_label = "black";

        color_font_label = "#fff";

        box_shadow_label = "3px 2px 10px rgb(29, 29, 29)";

        document.getElementById("number-5").style.cssText = "color : transparent;";
        document.getElementById("line-spacebar").style.cssText = "";
        document.getElementById("dark-light").style.cssText = "margin-left : 0px; transition : 0.5s";
        document.getElementById("moon").style.cssText = "visibility : hidden; "
        document.getElementById("sun").style.cssText = "visibility : visible; "
        document.getElementById("dark-light-background").style.cssText = "transtion : 0.3s;";

        // background-dark
        document.getElementById("background-1").style.cssText = "background-color : #fff; transition : 0.3s;";
        dark_mode = false;

        //button - dark mode
        document.getElementById("dark-light-background").style.cssText = "";
        document.getElementById("dark-light").style.backgroundColor = "rgb(22, 22, 22);";

        // text and logo
        document.getElementById("icon-menu-bar").style.filter = "";
        document.getElementById("text-menu-bar").style.cssText = "";

        //rorate button
        document.getElementById("rorate-arrowdown").style.filter = "";

        //arrow
        document.getElementById("arrow-1").style.cssText = "";
        document.getElementById("arrow-2").style.cssText = "";
        document.getElementById("arrow-3").style.cssText = "";

        //button-reset
        document.getElementById("button-reset").style.filter = "";

        //input-words
        document.getElementById("input-words-2").style.border = "";
        document.getElementById("caution").style.color = "";
        document.getElementById("time-time").style.color = "";

        //button play and pause
        document.getElementById("button-pause").style.filter = "";
        document.getElementById("button-play").style.filter = "";

        // color font input
        document.getElementById("input-words-2").style.color = "";

        //box-shadow
        document.getElementById("menu-keyboard").style.boxShadow = "0px 1px 10px rgb(158, 158, 158)";

        //random
        for(let i =  6; i <= 10; i++){
            document.getElementById("label-" + i).style.backgroundColor = "";
            document.getElementById("label-" + i).style.color = "";
        }

        for(let i = 2; i <= 14; i++){
            document.getElementById("colum1-" + i).style.cssText = "";
        }
        for(let i = 2; i <= 13; i++){
            document.getElementById("colum1-" + i).style.cssText = "";
        }
        for(let i = 1; i <= 14; i++){
            document.getElementById("colum2-" + i).style.cssText = "";
        }
        for(let i = 1; i <= 13; i++){
            document.getElementById("colum3-" + i).style.cssText = "";
        }
        for(let i = 1; i <= 12; i++){
            document.getElementById("colum4-" + i).style.cssText = "";
        }
        for(let i = 1; i <= 9; i++){
            document.getElementById("colum5-" + i).style.cssText = "";
        }
    }





    else{
        color = "#fff";
        font_color = "#fff";

        color_2 = "#fff";
        font_color_2 = "black";

        invert = "filter : invert(1);";

        color_font_input = "#fff";

        color_label = "#fff";

        color_font_label = "black";

        box_shadow_label = "3px 2px 10px rgb(0, 0, 0)";

        document.getElementById("number-5").style.cssText = "color : transparent;";
        document.getElementById("line-spacebar").style.cssText = "background-color : #fff;";
        document.getElementById("dark-light").style.cssText = "margin-left : 25px; transition : 0.5s";
        document.getElementById("moon").style.cssText = "visibility : visible; "
        document.getElementById("sun").style.cssText = "visibility : hidden;"

        // background-dark
        document.getElementById("background-1").style.cssText = "background-color : rgb(22, 22, 22); transition : 0.3s;";
        dark_mode = true;

        //button - dark mode
        document.getElementById("dark-light-background").style.cssText = "background-color : transparent; transtion : 0.3s; border : 0.5px solid #fff";
        document.getElementById("dark-light").style.backgroundColor = "#fff";

        // text and logo
        document.getElementById("icon-menu-bar").style.filter = "invert(1)";
        document.getElementById("text-menu-bar").style.cssText = "color : #fff;";

        //rorate button
        document.getElementById("rorate-arrowdown").style.filter = "invert(1)";

        //arrow
        document.getElementById("arrow-1").style.cssText = "background-color : #fff;";
        document.getElementById("arrow-2").style.cssText = "background-color : #fff;";
        document.getElementById("arrow-3").style.cssText = "background-color : #fff;";

        //button-reset
        document.getElementById("button-reset").style.filter = "invert(1)";

        //input-words
        document.getElementById("input-words-2").style.border = "1px solid #fff";
        document.getElementById("caution").style.color = "#fff";
        document.getElementById("time-time").style.color = "#fff";

        //button play and pause
        document.getElementById("button-pause").style.filter = "invert(1)";
        document.getElementById("button-play").style.filter = "invert(1)"; 

        // color font input
        document.getElementById("input-words-2").style.color = "#fff";

        //box-shadow
        document.getElementById("menu-keyboard").style.boxShadow = "3px 1px 10px rgb(0, 0, 0)";

        //random
        for(let i =  6; i <= 10; i++){
            document.getElementById("label-" + i).style.backgroundColor = "#fff";
            document.getElementById("label-" + i).style.color = "black";
            document.getElementById("label-" + i).style.boxShadow = "3px 2px 10px rgb(0, 0, 0)";
        }

        for(let i = 2; i <= 14; i++){
            document.getElementById("colum1-" + i).style.cssText = "border: 0.5px solid #fff;";
        }
        for(let i = 2; i <= 13; i++){
            document.getElementById("colum1-" + i).style.cssText = "border: 0.5px solid #fff;color : #fff;";
        }
        for(let i = 1; i <= 14; i++){
            document.getElementById("colum2-" + i).style.cssText = "border: 0.5px solid #fff; color : #fff;";
        }
        for(let i = 1; i <= 13; i++){
            document.getElementById("colum3-" + i).style.cssText = "border: 0.5px solid #fff; color : #fff;";
        }
        for(let i = 1; i <= 12; i++){
            document.getElementById("colum4-" + i).style.cssText = "border: 0.5px solid #fff; color : #fff;";
        }
        for(let i = 1; i <= 9; i++){
            document.getElementById("colum5-" + i).style.cssText = "border: 0.5px solid #fff; color : #fff;";
        }
                
    }
}