let age = 18

if (age > 18) {
  console.log(age+' is true')
} else {
  console.log(age+' is not true')
}

let hour = 20
if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}


hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


let a = 10;
let b = 5;
let op = "/";

switch (op) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}

let i=1;
while(i<5){
    console.log(i)
    console.log("\n")
    i++
    }


i = 3;
while (i) console.log(i--);


i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);
