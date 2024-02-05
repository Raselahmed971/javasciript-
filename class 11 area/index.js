var num = parseFloat(prompt("enter you number: "));

if(num >= 80 && num <= 100) {
    document.write("you got A+ ");
}
else if(num >=50 && num <=79 ){
    document.write("you got B ");
}
else if(num >= 30 && num <=49){
    document.write("you got c");
}
else{
    document.write("you fail");
}