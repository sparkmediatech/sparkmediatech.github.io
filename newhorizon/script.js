
//codes for counter
var count = 1;
setInterval(() => {
    if(count <= 370){
    
        document.querySelector('.visitor').innerHTML = count;
        count++;
    } 
}, 10);
var a = 1;
setInterval(() => {
    if(a <= 120){
    
        document.querySelector('.cert').innerHTML = a;
        a++;
    } 
}, 35);

var b = 1;
setInterval(() => {
    if(b <= 79){
    
        document.querySelector('.student').innerHTML = b;
        b++;
    } 
}, 55);

var c = 1;
setInterval(() => {
    if(c <= 40){
    
        document.querySelector('.course').innerHTML = c;
        c++;
    } 
}, 100);