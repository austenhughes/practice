// switch case matches what is being passed in 
// can be read as 
//  conditional === case 
let s = "z";

getLetter(s);
function getLetter(s) {

    let letter;
    console.log(s);

    switch(true) {
    case 'aeiou'.includes(s[0]):
    letter = 'A';
    break;
    case 'bcdfg'.includes(s[0]):
    letter = 'B';
    break;
    case 'hjklm'.includes(s[0]):
    letter = 'C';
    break;
    case 'npqrstvwxyz'.includes(s[0]):
    letter = 'D'; 
    break;
    default:
    return undefined;

}
    
console.log(letter);

}