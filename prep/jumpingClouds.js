// 0 means jump
// 1 means dont jump

let path = [0,1,0,0,0,1,0];
let hops = 0;

for (let i = 1; i < path.length; i++) {
    const element = path[i];
    if(element===0){
        hops = hops +1;
    }else if(element===1){
        hops = hops;
    }
}

console.log(hops)