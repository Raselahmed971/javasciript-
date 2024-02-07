// var num = parseFloat(prompt("enter you number: "));

// if(num >= 80 && num <= 100) {
//     document.write("you got A+ ");
// }
// else if(num >=50 && num <=79 ){
//     document.write("you got B ");
// }
// else if(num >= 30 && num <=49){
//     document.write("you got c");
// }
// else{
//     document.write("you fail");
// }


// for( var x = 1; x <= 10; x= x+1){
//     document.write('hi' + "<br>");
// }

// for(let x=10; x>=1; x= x -2){
//     document.write(x + "<br>");
// }

// document.write('end');

// let sum = 0;
// for( let x= 1; x <=5; x++){
//     sum = sum + x;
// }
// document.write(sum);


var firstNumber = parseInt(prompt("Enter the first number"));
var secondNumber = parseInt(prompt("Enter the second number"));

var sum = 0;

for (var i = firstNumber; i <= secondNumber; i++) {
  sum = sum + i;
}

document.write("The sum of numbers from " + firstNumber + " to " + secondNumber + " is: " + sum);
