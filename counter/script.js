var num = [50];
var counter = 1;
var counterdisplay = document.getElementById("displayNum");
var btn = document.getElementById("btn");
var completed = document.querySelector('.completed');
var counterbox = document.querySelector('.counterbox');
var delay = 2000;
var mydelay;

counterDisplay();
function counterDisplay(){
btn.addEventListener ('click', () =>{
var timer = setInterval(() => {
    if(counter < num){
        counter++;
        document.getElementById("displayNum").innerHTML = counter;   
    }
    else if(counter == num ){
        counterbox.style.display = 'none'
        completed.style.display = 'block'
        mydelay =setTimeout(nextcounter, delay)
        clearInterval(timer);

        
    }
}, 200);

         
})

}

function nextcounter(){
    counter = 0
    completed.style.display = 'none'
    counterbox.style.display = 'block'
    document.getElementById("displayNum").innerHTML = counter;
    
}





