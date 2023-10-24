let animation_typing  = setInterval(events, 100);

let count = 0;
function events(){
    count += 1;

    const alphabet = ["" , "" , "" ,  "" , "" , "|" , "|" , "|" , "" , "" , "" , "" , "" , "|"  , "|" , "|" , "" , "" , "" , "" , "" ,  "|" , "|" , "|" ,"" , "" , "" , "" , "" ,
    "|" , "w" , "we" , "wel" , "welc" , "welco" , "welcom" , 
    "welcome" , "welcome " , "welcome t" , 
    "welcome to" , "welcome to " , "welcome to m" , "welcome to my" , 
    "welcome to my " , "welcome to my " , "welcome to my w" , 
    "welcome to my we" , "welcome to my web" , "welcome to my webs" , "welcome to my websi"
    , "welcome to my websit" , "welcome to my website",  "" , "" , "",
    "" , "" , "" , "" , "" , "A" , "An" , "And" , "And " , "And I" , "And I " , "And I h" , "And I ho" , "And I hop" , "And I hope" , "And I hope " , "And I hope y" , 
    "And I hope yo" , "And I hope you" , "And I hope you a" , "And I hope you ar" , "And I hope you are" , "And I hope you are " , "And I hope you are h" ,
    "And I hope you are ha" , "And I hope you are hap" , "And I hope you are happ" , "And I hope you are happy" , "" , "" , "",
    "" , "" , "" , "" , "" , "W" , "Wi" , "Wit" , "With" , "With " , "With m" , "With my" , "With my " , "With my w" , "With my we" , "With my web" , "With my webs" , "With my websi" , "With my websit" ,
    "With my website" , "With my website." , "" , "" , "",
    
];
    document.getElementById("animation-typing").innerHTML = alphabet[count];

    if(count == alphabet.length - 1){
        count = 0;
    }
}