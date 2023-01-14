// a
var Counting = [];
for (let i = 1; i <= 15; i++) {
   Counting.push(i);    
   
}
document.write("Counting:<br>"+Counting+"<br><br>");

// b
var reverseCounting = [];
for (let i = 1; i <= 10; i++) {
   reverseCounting.unshift(i);    
   
}
document.write("Reverse Counting:<br>"+reverseCounting+"<br><br>");

// c
var Even = [];
for (let i = 0; i <= 20; i = i+2) {
   Even.push(i);    
   
}
document.write("Even:<br>"+Even+"<br><br>");

//d
var Odd = [];
for (let i = 1; i <= 20; i = i+2) {
   Odd.push(i);    
   
}
document.write("Odd:<br>"+Odd+"<br><br>");

//e
var Series = [];
for (let i = 2; i <= 20; i = i+2) {
   Series.push(i+"k");    
   
}
document.write("Series:<br>"+Series+"<br><br>");