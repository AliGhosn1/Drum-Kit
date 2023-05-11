var buttons = document.getElementsByTagName("button");
var sounds = [new Audio("sounds/crash.mp3"), new Audio("sounds/kick-bass.mp3"), new Audio("sounds/snare.mp3"), new Audio("sounds/tom-1.mp3"), new Audio("sounds/tom-2.mp3"), new Audio("sounds/tom-3.mp3"), new Audio("sounds/tom-4.mp3")];

document.addEventListener("keydown", function keyClick(event){
    clciked(event.key);
    pressedKey(event.key);
});

for(button of buttons){
    button.addEventListener("click", function mouseClick(){
        clciked(this.innerHTML);
        pressedKey(this.innerHTML);
    });
}


function clciked(key){
    switch (key) {
        case 'w':
            sounds[0].play();
        break;

        case 'a':
            sounds[1].play();
        break;

        case 's':
            sounds[2].play();
        break;

        case 'd':
            sounds[3].play();
        break;

        case 'j':
            sounds[4].play();
        break;

        case 'k':
            sounds[5].play();
        break;

        case 'l':
            sounds[6].play();
        break;
    
        default:
        break;
    }
}

function pressedKey(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function restoreClick(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 200);
}
