//user verification




var sect1inputbox = document.querySelector('.sect1-input-box').value;
var sect2inputbox = document.getElementById('sect1-email-box').value;
var submitBTN = document.querySelector('.submitBTN');
var userName = document.querySelector('.userName');
var numbers = /^[0-9]+$/
var mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;


var submitEmailBTN = document.querySelector('.submitEmailBTN')



submitBTN.addEventListener('click', () =>{
    var sect1inputbox = document.querySelector('.sect1-input-box').value;
    var sect1emailBox = document.getElementById('sect1-email-box').value;
    
    

  if(sect1inputbox.trim() == "" || sect1emailBox.trim() == "" || sect1inputbox.match(numbers)){
      alert('Please enter a valid name')
      document.querySelector('.form').reset();
  }
  else if(!(sect1emailBox.match(mail))){
    alert('Enter a valid Email')

}
  
else{
   localStorage.setItem('textvalue', sect1inputbox);
   localStorage.setItem('emailvalue', sect1emailBox);
   location.href = 'table.html'
   
   
}

})

submitEmailBTN.addEventListener('click', () =>{
    var sect7inputbox = document.querySelector('.sect7-input-box').value;
    var sect7emailbox = document.getElementById('sect7-email-box').value;

    if(sect7inputbox.trim() == "" || sect7emailbox.trim() == "" || sect7inputbox.match(numbers)  ){
        alert('Please enter a valid name')
        document.querySelector('.form').reset();
    }
    else if(!(sect7emailbox.match(mail))){
        alert('Enter a valid Email')

    }
    else{
        localStorage.setItem('textvalue', sect7inputbox);
        localStorage.setItem('emailvalue', sect7emailbox);
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
  

  