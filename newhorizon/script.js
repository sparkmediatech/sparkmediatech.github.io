//user verification




var sect1inputbox = document.querySelector('.sect1-input-box').value;
var sect2inputbox = document.getElementById('sect1-email-box').value;
var submitBTN = document.querySelector('.submitBTN');
var userName = document.querySelector('.userName');



submitBTN.addEventListener('click', () =>{
    var sect1inputbox = document.querySelector('.sect1-input-box').value;
    var sect1emailBox = document.getElementById('sect1-email-box').value;
    
    

  if(sect1inputbox.trim() == "" || sect1emailBox.trim() == ""){
      alert('Please enter a valid name')
      document.querySelector('.form').reset();
  }
  
else{
   localStorage.setItem('textvalue', sect1inputbox);
   location.href = 'table.html'
   
   
}

})
















//codes for counter


function myCounter(){
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
}
var m = 1
window.addEventListener('scroll', () =>{
    var slide = document.querySelector('.sect5');
    var slidePosition = slide.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1;
    if(slidePosition < screenPosition && m <= 2 ){
        m++;
        myCounter();
    }
    else{
        
    }
  });
  

  