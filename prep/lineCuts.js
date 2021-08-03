let qOne = [1,2,3,4,5,6,7,8,9];
let qTwo = [1,2,3,4,5,6,8,7,9];
let qThree = [1,2,3,4,5,8,6,7,9];
// should no longer be good from here 
let qFour = [1,2,3,4,8,5,6,7,9];
let qFive = [1,2,3,8,4,5,6,7,9];

let q = qFive
let checked = "ok";

check();
function check() {

    for (let i = 0; i < q.length; i++) {
    
    let element = q[i];
    let d = i-1;
    let down = q[d];

   if (element - down > 3) {
    checked = "too far"  
   } 

}

}

console.log(checked)

