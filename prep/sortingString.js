let s = "bobwashere";

vowelsAndConsonants(s);
function vowelsAndConsonants(s) {
    
    let string = "";
    let vow = "";
    let con = "";

    for (let i=0; i<s.length; i++){
    let letter = s[i];
    let vowels = 'aeiou';

       if (vowels.includes(letter)){
        vow = vow + letter;
       } else {
        con = con + letter;
       }
    } 

    string = vow+con ;

    for (let i = 0; i<string.length; i++){
    let display = string[i];

        console.log(display)
    }

    }

