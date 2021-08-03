// function to shift the array to the left 
// moves first number to end
// moves how ever many rotations is set in the moves variable
// set array to any numbers 
// small tweaks needed if you want to store an array of objects or strings instead of numbers 
// those would be to push to an array instead of adding to a string and spreading that string

let ar = [1,2,3,4,5]
let moves = 1;

let movesMade = 0;
// let array = [];
let string = "";

shift();
function shift(){
    for (let i = 1; i < ar.length; i++) {
        const element = ar[i];
        string = string + element;
    }
    cap();
}

function cap(){
    const first = ar[0];
    string = string + first;
    finish();
}

function finish() {
    ar = [...string];
    movesMade = movesMade+1;
    if (movesMade !== moves) {
        string = "";
        // array = [];
        shift();
    } else {
        console.log(ar)
    }
}




