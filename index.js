var len = document.querySelectorAll(".drum").length;
for(var i=0; i<len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var msg = this.innerHTML;
        buttonanimation(msg);
        makesound(msg);
    })
}
document.addEventListener("keypress",function(event) {
    buttonanimation(event.key);
    makesound(event.key);
   
})
function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var kb = new Audio("sounds/kick-bass.mp3");
            kb.play();
        break;
        case "k":
            var sn = new Audio("sounds/snare.mp3");
            sn.play();
        break;
        case "l":
            var cr = new Audio("sounds/crash.mp3");
            cr.play();
        break;
        default:
            break;
    }
}
function buttonanimation(event) {
    var k = document.querySelector("."+event);
    k.classList.add("pressed");
    setTimeout(function(){
        k.classList.remove("pressed");
    },100);
}