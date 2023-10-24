let timer = false;
let open_play_spacebar = true;
let po = true;


//dark-mode
let invert;
let color_font_input;
let color_label = "rgb(39, 39, 39)";
let color_font_label = "#fff";
let box_shadow_label;

           // variable of timer
           let minutes_1 = 0; /* : */  let seconds_1 = 0; let seconds_2_1 = 0;
        
           //            0 0 : 0 0
       
document.getElementById("timer").onclick = function(){

    if(timer){
        // off timer
        document.getElementById("timertest").style.cssText = "display : none;";
        document.getElementById("timer").style.cssText = 'margin-left : 0px; transition : 0.5s;';
        document.getElementById("button-reset").style.cssText = "visibility : hidden;" + invert;
        document.getElementById("on-2").innerHTML = "Off";
        document.getElementById("time-time").innerHTML = "00:00";
        document.getElementById("timerbutton").style.cssText = '';
        document.getElementById("input-words-2").value = "";
        document.getElementById("caution").style.display = "flex";
        timer = false;
    }
    else{
        // on timer
        document.getElementById("timertest").style.cssText = "display : flex;";
        document.getElementById("timer").style.cssText = 'margin-left : 25px; transition : 0.5s;';
        document.getElementById("button-reset").style.cssText = "visibility : visible;" + invert;
        document.getElementById("on-2").innerHTML = "On";
        document.getElementById("caution").style.display = 'flex;';
        document.getElementById("timerbutton").style.cssText = 'display : flex;';
        timer = true;
    }
}

//arrays words
const all_words_1 = ["abadone" , "abadonement" , "ability" , "able" , "about" , "above"];
const all_words_2 = ["abroad" , "adsolute" , "absolutely" , "academic" , "accept" , "acceptable" , "access" , "accessory"];
const all_words_3 = ["accident" , "account" , "accountant" , "accurate" , "classify"];
const all_words_4 = ["accuse" , "achieve" , "achievement" , "acknowledge" , "acquire" , "across" , "act" , "action"];
const all_words_5 = ["frequantly" , "suspiciously" , "ambition" , "journalist" , "rediment"];

// random words
const randoms_words = [];

window.open("")

open = true;

// random all words 1
randoms_words[0] = all_words_1[Math.floor(Math.random()*all_words_1.length)];
// random all words 2
randoms_words[1] = all_words_2[Math.floor(Math.random()*all_words_2.length)];
// random all words 3
randoms_words[2] = all_words_3[Math.floor(Math.random()*all_words_3.length)];
// random all words 4
randoms_words[3] = all_words_4[Math.floor(Math.random()*all_words_4.length)];
// random all words 5
randoms_words[4] = all_words_5[Math.floor(Math.random()*all_words_5.length)];

let countnumbervalue = 0;
let wrong_score = 0;
let correct_score = 0;
let input_true = false;
let play_true = false;




document.getElementById("input-words-2").onclick = function(){
    input_true = true;
    play_true = true;
}

active_2(countnumbervalue , wrong_score , correct_score);
function active_2(p_2 , correct , wrong){
    document.getElementById("button-off-from-menuscore").onclick = function(){
        document.getElementById("caution").style.display = "flex;" + invert;
        document.getElementById("time-time").style.display = "flex";
        document.getElementById("button-play").style.cssText = "visibility : visible;" + invert;
        document.getElementById("input-words-2").style.display  = "flex" ;
        document.getElementById("input-words-2").style.color = ""+ color_font_input;
        document.getElementById("menu-score").style.cssText = 'visibility : hidden';
        document.getElementById("background-2").style.cssText = 'visibility: hidden;';
        document.getElementById("time-time").innerHTML = "00:00";
    
        minutes_1 = 0;
        seconds_1 = 0;
        seconds_2_1 = 0;
        wrong = 0;
        correct = 0;

        document.getElementById("wrong-score").innerHTML = wrong;
        document.getElementById("correct-score").innerHTML = correct;
    }

addEventListener("keydown" , randominterval);
function randominterval(event){
    let input_random_values = document.getElementById("input-words-2").value;
    input_random_values = input_random_values.replaceAll(" " , "");
    if(play_true && input_true){
    if(event.key == " "){
        document.getElementById("input-words-2").value = "";
        if(input_random_values == randoms_words[0]){
            document.getElementById("label-6").style.cssText = 'display : none;';
            document.getElementById("input-words-2").value = "";
            console.log(p_2)
            p_2 += 1;
            correct += 1;
        }
        else{
            if(input_random_values == randoms_words[1]){
                document.getElementById("label-7").style.cssText = 'display : none;';
                document.getElementById("input-words-2").value = "";
                p_2 += 1;
                correct += 1;
            }
            else{
                if(input_random_values == randoms_words[2]){
                    document.getElementById("label-8").style.cssText = 'display : none;';
                    document.getElementById("input-words-2").value = "";
                    p_2 += 1;
                    correct += 1;
                }
                else{
                    if(input_random_values == randoms_words[3]){
                        document.getElementById("label-9").style.cssText = 'display : none;';
                        document.getElementById("input-words-2").value = "";
                        p_2 += 1;
                        correct += 1;
                    }
                    else{
                        if(input_random_values == randoms_words[4]){
                            document.getElementById("label-10").style.cssText = 'display : none;';
                            document.getElementById("input-words-2").value = "";
                            p_2 += 1;
                            correct += 1;
                        }
                        else{
                            if(input_random_values == ""){

                            }
                            else{
                               if(input_random_values != ""){
                                wrong += 1;
                                document.getElementById("input-words-2").value = "";
                                let u = setInterval(interval , 100);
                                let number = 0; 
                                 for(let i = 6; i <= 10; i++){
                                    document.getElementById("label-" + i).style.backgroundColor = "#FF0045";
                                    document.getElementById("label-" + i).style.color = "#fff"
                                }
                                function interval(){
                                    number += 1;
                                    if(number == 2){
                                        for(let i = 6; i <= 10; i++){
                                            document.getElementById("label-" + i).style.backgroundColor = color_label;
                                            document.getElementById("label-" + i).style.color = color_font_label ;
                                        }
                                        clearInterval(u);
                                    }
                                }
                            }}}}}}}}

    document.getElementById("correct-score").innerHTML = correct;
    document.getElementById("wrong-score").innerHTML = wrong;
        console.log(p_2);
        if(p_2 == 5){
            p_2 = 0;
            randoms_words[0] = all_words_1[Math.floor(Math.random()*all_words_1.length)];
            randoms_words[1] = all_words_2[Math.floor(Math.random()*all_words_2.length)];
            randoms_words[2] = all_words_3[Math.floor(Math.random()*all_words_3.length)];
            randoms_words[3] = all_words_4[Math.floor(Math.random()*all_words_4.length)];
            randoms_words[4] = all_words_5[Math.floor(Math.random()*all_words_5.length)];
            

            document.getElementById("label-6").innerHTML = randoms_words[0];
            document.getElementById("label-7").innerHTML = randoms_words[1];
            document.getElementById("label-8").innerHTML = randoms_words[2];
            document.getElementById("label-9").innerHTML = randoms_words[3];
            document.getElementById("label-10").innerHTML = randoms_words[4];

            for(let i = 6; i <= 10; i++){
                document.getElementById("label-" + i).style.backgroundColor = ' ' + color_label;
                document.getElementById("label-" + i).style.boxShadow = "3px 2px 10px rgb(0, 0, 0)";
                document.getElementById("label-" + i).style.color = "" + color_font_label;
                document.getElementById("label-" + i).style.color = "" + color_font_label;
                document.getElementById("label-" + i).style.display = "flex";
            }
        }
    }
}
}

document.getElementById("input-words-2").onclick = function(){
open_play_spacebar = true;
addEventListener("keydown" , open_play);
function open_play(event){
    if(event.key == " "){
        po = true;
        document.getElementById("caution").style.display = "none";
        play_true = true;
        input_true = true;
        if(open_play_spacebar){
            open_play_spacebar = false
            // style
            document.getElementById("button-play").style.cssText = 'visibility : hidden;' + invert;
            document.getElementById("button-pause").style.cssText = 'visibility : visible;' + invert;
        
            randoms_words[0] = all_words_1[Math.floor(Math.random()*all_words_1.length)];
            randoms_words[1] = all_words_2[Math.floor(Math.random()*all_words_2.length)];
            randoms_words[2] = all_words_3[Math.floor(Math.random()*all_words_3.length)];
            randoms_words[3] = all_words_4[Math.floor(Math.random()*all_words_4.length)];
            randoms_words[4] = all_words_5[Math.floor(Math.random()*all_words_5.length)];
        
            document.getElementById("label-6").innerHTML = randoms_words[0];
            document.getElementById("label-7").innerHTML = randoms_words[1];
            document.getElementById("label-8").innerHTML = randoms_words[2];
            document.getElementById("label-9").innerHTML = randoms_words[3];
            document.getElementById("label-10").innerHTML = randoms_words[4];
        
            // timerinterval that's function for timer
            let timerinterval_1 = setInterval(itm_1 , 1000);


            let L = false;
            document.getElementById("timer").onclick = function(){
                if(L){
                    document.getElementById("timertest").style.cssText = "display : flex;";
                    document.getElementById("timer").style.cssText = 'margin-left : 25px; transition : 0.5s;';
                    document.getElementById("button-reset").style.cssText = "visibility : visible;" + invert;
                    document.getElementById("on-2").innerHTML = "On";
                    document.getElementById("caution").style.display = 'flex;';
                    document.getElementById("timerbutton").style.cssText = 'display : flex;';
                    document.getElementById("button-pause").style.cssText = "visibility : visible;";
                    document.getElementById("button-pause").style.cssText = "visibility : hidden;";
                    L = false;
                }else{
                    document.getElementById("timertest").style.cssText = "display : none;";
                    document.getElementById("timer").style.cssText = 'margin-left : 0px; transition : 0.5s;';
                    document.getElementById("button-reset").style.cssText = "visibility : hidden;" + invert;
                    document.getElementById("on-2").innerHTML = "Off";
                    document.getElementById("time-time").innerHTML = "00:00";
                    document.getElementById("timerbutton").style.cssText = '';
                    document.getElementById("input-words-2").value = "";
                    document.getElementById("caution").style.display = "flex";
                    document.getElementById("button-pause").style.cssText = "visibility : hidden;";
                    document.getElementById("button-pause").style.cssText = "visibility : visible;";

                    minutes_1 = 0;
                    seconds_1 = 0;
                    seconds_2_1 = 0;

                    for(let i = 6; i <= 10; i++){
                        document.getElementById('label-' + i).innerHTML = "?";
                        document.getElementById("label-" + i).style.display = "flex";
                    }
                    L = true;
                    clearInterval(timerinterval_1);
                }
             }

            document.getElementById("button-reset").onclick = function(){
                document.getElementById("time-time").innerHTML = "00:00";
                document.getElementById("button-play").style.cssText = "visibility : visible;" + invert;
                document.getElementById("button-pause").style.cssText = 'visibility : hidden;' + invert;
                document.getElementById("caution").style.display = 'flex';
                for(let i = 6; i <= 10; i++){
                    document.getElementById("label-" + i).innerHTML = "?";
                    document.getElementById("label-" + i).style.display = "flex";
                }
                document.getElementById("input-words-2").value = "";
                play_true = false;
                minutes_1 = 0;
                seconds_1 = 0;
                seconds_2_1 = 0;
                clearInterval(timerinterval_1);
            }

            function itm_1(){
                if(po){
                console.log(seconds_2_1)
                seconds_2_1 += 1;
                if(seconds_2_1 == 10){
                    seconds_1 += 1;
                    seconds_2_1 = 0;
                    if(seconds_1 == 6){
                        seconds_1 = 0
                        minutes_1 += 1;
                        if(minutes_1 == 2){
                            minutes_1 = 0;
                            play_true = false;
                            input_true = false;
                            open_play_spacebar = false;
                            minutes_1 = 0;
                            seconds_1 = 0;
                            seconds_2_1 = 0;

                            clearInterval(timerinterval_1);

                            document.getElementById("time-time").style.display = "none";
                            document.getElementById("input-words-2").style.display = "none";
                            document.getElementById("caution").style.display = 'flex';
                            document.getElementById("menu-score").style.cssText = "visibility : visible; margin-top: -140px; transition : 0.5s";
                            document.getElementById("background-2").style.cssText = "visibility : visible;";
                            document.getElementById("button-pause").style.cssText = "visibility : hidden;" + invert;
                            for(let i = 6; i <= 10; i++){
                                document.getElementById("label-" + i).style.color = color_font_label;
                                document.getElementById("label-" + i).style.boxShadow = box_shadow_label;  
                                document.getElementById("label-" + i).style.backgroundColor = color_label;
                                document.getElementById("label-" + i).innerHTML = "?";
                                document.getElementById("label-" + i).style.display = "flex";
                            }
        
                            //random #3
                            randoms_words[0] = all_words_1[Math.floor(Math.random()*all_words_1.length)];
                            randoms_words[1] = all_words_2[Math.floor(Math.random()*all_words_2.length)];
                            randoms_words[2] = all_words_3[Math.floor(Math.random()*all_words_3.length)];
                            randoms_words[3] = all_words_4[Math.floor(Math.random()*all_words_4.length)];
                            randoms_words[4] = all_words_5[Math.floor(Math.random()*all_words_5.length)];
                        }
                    }
                    }
                    
                }
                document.getElementById("time-time").innerHTML = 0 + "" + minutes_1 + ":" + seconds_1 + "" + seconds_2_1;
            }
            }
        }
    }
}





/*let open_play_buttonclick = true;
document.getElementById("button-play").onclick = function(){
    if(open_play_buttonclick){
        open_play_buttonclick = false;
        // style
        document.getElementById("button-play").style.cssText = 'visibility : hidden;';
        document.getElementById("button-pause").style.cssText = 'visibility : visible;';
    
        randoms_words[0] = all_words_1[Math.floor(Math.random()*all_words_1.length)];
        randoms_words[1] = all_words_2[Math.floor(Math.random()*all_words_2.length)];
        randoms_words[2] = all_words_3[Math.floor(Math.random()*all_words_3.length)];
        randoms_words[3] = all_words_4[Math.floor(Math.random()*all_words_4.length)];
        randoms_words[4] = all_words_5[Math.floor(Math.random()*all_words_5.length)];
    
        document.getElementById("label-6").innerHTML = randoms_words[0];
        document.getElementById("label-7").innerHTML = randoms_words[1];
        document.getElementById("label-8").innerHTML = randoms_words[2];
        document.getElementById("label-9").innerHTML = randoms_words[3];
        document.getElementById("label-10").innerHTML = randoms_words[4];
    
       // variable of timer
        let minutes = 0; /* : */  //let seconds = 0; let seconds_2 = 0;
    
        //            0 0 : 0 0
    
        // timerinterval that's function for timer
       /* let timerinterval = setInterval(itm , 1000);
        function itm(){
            seconds_2 += 1;
            if(seconds_2 == 10){
                seconds += 1;
                seconds_2 = 0;
                if(seconds == 6){
                    seconds = 0;
                    minutes += 1;
                    if(minutes == 2){
                        minutes = 0;
                        play_true = false;
                        input_true = false
                        document.getElementById("menu-score").style.cssText = "visibility : visible; top : 32%; transition : 0.5s";
                        document.getElementById("background-2").style.cssText = "visibility : visible;";
                        document.getElementById("button-play").style.cssText = "visibility : visible;";
                        document.getElementById("button-pause").style.cssText = "visibility : hidden;";
                        for(let i = 6; i <= 10; i++){
                            document.getElementById("label-" + i).innerHTML = "?";
                            document.getElementById("label-" + i).style.cssText = "display : flex;";
                        }
    
                        //random #3
                        randoms_words[0] = all_words_1[Math.floor(Math.random()*all_words_1.length)];
                        randoms_words[1] = all_words_2[Math.floor(Math.random()*all_words_2.length)];
                        randoms_words[2] = all_words_3[Math.floor(Math.random()*all_words_3.length)];
                        randoms_words[3] = all_words_4[Math.floor(Math.random()*all_words_4.length)];
                        randoms_words[4] = all_words_5[Math.floor(Math.random()*all_words_5.length)];
                        clearInterval(timerinterval);
    
                    }
                }
                
            }
            document.getElementById("time-time").innerHTML = 0 + "" + minutes + ":" + seconds + "" + seconds_2;
        }
    }
} 
*/
