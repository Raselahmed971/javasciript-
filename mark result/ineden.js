 var number = parseInt(prompt("Enter the first number: "));
var number2 = parseInt(prompt("Enter the second number: "));

var sum = 0;

for(var i = number; i<= number2; i++ ){
    sum += i;
}

document.write("Sum: " + sum);