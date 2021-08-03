// the goal is to check that no more than two line switches / trades have been made 
// this example tracks the number 8 moving up the line

// no moves at this point
let qOne = [1,2,3,4,5,6,7,8,9];
// 8 switches with 7 here but that is only one move so should still be good 
let qTwo = [1,2,3,4,5,6,8,7,9];
// 8 then switches with 6 here that is a second move and should still be good 
let qThree = [1,2,3,4,5,8,6,7,9];
// fourth and fifth moves ... should no longer be good from here 
let qFour = [1,2,3,4,8,5,6,7,9];
let qFive = [1,2,3,8,4,5,6,7,9];

// a couple examples with a bigger shuffle to test if we can see all cases
let qSix = [1,2,3,4,7,5,6,9,8];
let qSeven = [1,2,3,6,4,5,9,7,8];
let qEight = [1,2,3,5,4,9,6,7,8];

//  a a couple examples of things moving both in front of and behind other numbers
let qNine = [1,2,3,4,5,6,9,7,8,10,13,12,11,14,15,16,17,18,19,20];
let qTen = [1,2,3,4,5,6,7,10,8,9,12,13,11,14,15,16,17,18,19,20];

// set q to the array you want to sets
let q = qNine;
let checked = "ok";

check();
function check() {

    for (let i = 0; i < q.length; i++){

    let element = q[i];
    let d = i-1;
    let u = i+1;
    let uTwo =i+2;
    let down = q[d];
    let up = q[u];
    let upTwo = q[uTwo];
    
        if (element - down > 3){
            if (element - up === 1){
            // do nothing the person behind is right the extra space is due to others around moving an allowed amount
            }else if (element - upTwo === 1){
            // do nothing the person behind is right the extra space is due to others around moving an allowed amount 
            }else{
            checked = "too far"  
            }
        }

     }
}

console.log(checked);

