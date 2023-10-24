document.addEventListener("mousemove", events => {
    document.getElementById("label-x").innerHTML = "x : " +  events.clientX;
    document.getElementById("label-y").innerHTML = "y : " +  events.clientY;

    for(let i = 1; i <= 14; i++){
        document.getElementById("mousemove" + i).style.transform = "translateX(" + events.clientX / 100 + "px) translateY(" + events.clientY / 100 + "px)";
    }
});
