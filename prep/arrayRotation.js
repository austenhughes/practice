let ar = [1,2,3,4,5]
let moves = 2;

let movesMade = 0;
let spread = [];
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
    console.log (ar);
    movesMade = movesMade+1;
    console.log(movesMade)
    if (movesMade !== moves) {
        string = "";
        spread = [];
        shift();
    }
}




