let path = "UUDDDDDUUUUUUDDDDUUDUDUUUD";
let array = [...path];
let count = 0;
let valleys = 0;

// if counter = 0 it is at sea level 
// if the counter hits -1 on the D you are entering a valley

setPath ();
function setPath(){
array.forEach(element => {
    if(element === "D"){
        count = count - 1;
            if (count === -1 ){
                valleys = valleys +1; 
           }
    }else if(element ==="U"){
        count = count + 1;
    }
});
};

console.log(valleys);