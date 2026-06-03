console.log("Hello world i am starting to learn about tsc --> type script compiler!!");

// This is an industrial-grade general-purpose greeter function:
function greet(person : string, date : Date) : void {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan", new Date());



type id = string | number;

let rollNo : id = 21;
let houseNo : id = '1q2sk750q2e9';  // can use methods which are common for both numbers and strings

interface Animal {
  name : string;
  age : number;
}

let giff : Animal = {
  name : 'Giraffe',
  age : 4
}

interface Tiger extends Animal {
  predator : boolean
}

let gappu : Tiger = {
  name : 'Cheetah',
  age : 2,
  predator : true
}


//this is wrong

// function makepredator(ani : Animal) : Tiger{
//   ani.predator = true;
//   return ani;
// }


function makepredator(ani : Animal) : Tiger{
  return {
    ...ani,
    predator : true
  }
}

console.log(makepredator({name : "crocodile", age : 2}));



