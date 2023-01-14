var range = 100;
var number = 5;
var lengthofmultiples = range/number;

document.write("Multiples of "+number+":<br>")
for (let i = 1; i <= lengthofmultiples; i++) {
    var multiplyResult = number*i;
    
    document.write(multiplyResult+",");
    
}
