let n = 4;

run(n);
function run (n){
let weird = "";

if (n%2 !== 0) {
weird = "Weird";
} 
else if (n<5) {
weird ="Not Weird"
} 
else if (n<20) {
weird = "Weird"
} else {
weird = "Not Weird"
}

console.log(weird)

}