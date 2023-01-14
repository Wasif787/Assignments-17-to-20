var A = [24,53,78,91,12];
document.write("Array items: "+A+"<br>");
var min = A[0];
for (let i = 0; i < A.length; i++) {
    
    if (A[i]<min) {
        min= A[i];
        
    }
}
document.write("The smallest number is: "+min);