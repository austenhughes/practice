// let n = 12; this was a given with the question but not needed to create the answer
// good example of how to use reduce ... notice the [] at the end of the reduce that is setting the type ... it could also be a string or object if you wanted 
let ar = [1,2,1,2,1,2,3,1,2,3,1,2];
let answer = 0;

let sockCounts = ar.reduce(function(obj, sock){
    if (!obj[sock]) {
        obj[sock] = .5;
    } else {
        obj[sock]+=.5;
    }
    return obj;
}, []);

sort ();
function sort() {
 
    for (let i = 1; i < sockCounts.length; i++) {
        const element = sockCounts[i];
        let sorted = Math.trunc(element)
        answer = answer + sorted 
    }

}

console.log(answer)

// get kinds of socks 
// get #s of each kind
// divide each by 2 
// remove remainders
// add together 

