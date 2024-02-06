// Mouse Click: Detect mouse click, make sound and animation
$(".drum").click(function() {
    var button = $(this).html();
    makeSound(button);
    buttonAnimation(button);
})

/* Keyboard Button Press: Detect keyboard button press
   Pop-up error message if any button is held too long
   Make sound and animation
*/
$(document).keydown(function(event) {
    if (event.originalEvent.repeat) {
        alert("Error! Button held too long!");
    }
    else {
        makeSound(event.key);
        buttonAnimation(event.key);
    }
});

/* Function that detects specific keyboard buttons
   Switches/activates to make a sound
*/
function makeSound(key) {
    switch (key) {
        case "w":
            drumKit("sounds/tom-1.mp3");
            break;
        case "a":
            drumKit("sounds/tom-2.mp3");
            break;
        case "s":
            drumKit("sounds/tom-3.mp3");
            break;
        case "d":
            drumKit("sounds/tom-4.mp3");
            break;
        case "j":
            drumKit("sounds/snare.mp3");
            break;
        case "k":
            drumKit("sounds/crash.mp3");
            break;
        case "l":
            drumKit("sounds/kick-bass.mp3");
            break;

        // In case another button is pressed, will log it
        default: console.log(key);
    }
}

// Function that plays a new audio sound when called upon AND input is set
function drumKit(drumSound) {
    var audio = new Audio(drumSound);
    audio.play();
}

/* Function that does animation when correct keyboard button pressed / mouse clicked
   Use concatenation and change the image's style to the .pressed class styles.css file...
   Then style is removed using the setTimeout function
*/
function buttonAnimation(currentKey) {
    // Store pressed button / mouse click in a variable
    var activeButton = $("." + currentKey);
    // Add class with pre-defined css style
    activeButton.addClass("pressed");
    // Remove class with pre-defined css style with time duration (in milliseconds, 1000 ms = 1 sec) 
    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 200);
}

