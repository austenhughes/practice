let s = "abcac";
let n = 42;
let string = "";
let trim = "";
let letter = "a";
let count = 0;

//  set function to build string of set size filled with the s variable repeating
//  find number of time a particular letter shows ups

buildString();
function buildString() {
   if (string.length < n){
        string = string + s;
        buildString();
   } else if (string.length > n){
        trim = string.slice(0,n)
        filterAs ();
   } else {
        filterAs();
   }
}

function filterAs () {
for (let i = 0; i < trim.length; i++) {
    const element = trim[i];
    if (element === letter) {
       count = count +1;
    }
} 
}

console.log(count);