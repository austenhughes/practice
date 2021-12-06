let initialAge = 30;

function Person(initialAge){
    // Add some more code to run some checks on initialAge
  this.amIOld=function(){
      if (initialAge<0){
        this.age = 0;
        console.log("Age is not valid, setting age to 0.");
        console.log("You are young.");
      }else if(initialAge<13){
        console.log("You are young.");
      }else if(initialAge<18) {
        console.log("You are a teenager.");
      }else if(initialAge>=18){
        console.log("You are old.");
      }
   // Do some computations in here and print out the correct statement to the console
  };
   this.yearPasses=function(){
       this.age = initialAge++;
          // Increment the age of the person in here
   };
}


function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}
