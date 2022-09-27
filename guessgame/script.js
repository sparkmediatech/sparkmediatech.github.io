var number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
var randomNumber = number[Math.floor(Math.random() * 50)];




var guessInput = document.querySelector('.guessInput').value;
var submitBTN = document.querySelector('.submitBTN');
var congratulationsBox = document.querySelector('.congratulationsBox');
var wrongBox = document.querySelector('.wrongBox')
var gameOverBox = document.querySelector('.gameOverBox')
var tryAgain = document.querySelector('.tryAgain');
var start = document.getElementById("start");
var playAgain = document.querySelector('.playAgain');
var gameover = document.querySelector('.gameover');
var trophy = document.querySelector('.trophy');
var tooLow = document.querySelector('.tooLow');
var section1Text = document.querySelector('.section1-text');
var section1Box = document.querySelector('.section1-box');

var regex = /^[0-9]+$/
var delay = 1000;
var myDelay;

console.log(randomNumber)


let count = 0;

function checkGuess() {
    var guessInput = document.querySelector('.guessInput').value
    
    
    
    if ( guessInput.trim()=="" ) {
        alert("Please, input a number between 1 to 50");
        document.querySelector('.form').reset();
        
      }
    else if (!(guessInput.match(regex))) {
        alert("Invalid characters. Please, input number between 1 - 50");
        document.querySelector('.form').reset();

    }
    else{
        confirm();
    }
}

function confirm(){
    var guessInput = document.querySelector('.guessInput').value
    count++;
     if(guessInput == randomNumber){
        
        congratulationsBox.style.display = 'flex';
        congratulationsBox.style.transform = "scale(1)"
         document.querySelector('.tooLow').innerHTML = 'our secret number is' + randomNumber
        document.querySelector(".section1-text").style.pointerEvents = "none";
        document.querySelector(".section1-box").style.pointerEvents = "none";
        section1Box.style.opacity = '0.3';
        section1Text.style.opacity = '0.3';

        myDelay = setTimeout(wait, delay)
        function wait(){
            playAgain.style.transform = "scale(1)"
        }
        

       playAgain.addEventListener('click', () =>{
        location.reload();
        
         
  });
  
    }
    
    else if( count ==5 && guessInput != randomNumber ){
        
        gameOverBox.style.transform = "scale(1)"
        gameOverBox.style.display = 'flex';
        document.querySelector(".section1-text").style.pointerEvents = "none";
        document.querySelector(".section1-box").style.pointerEvents = "none";
        section1Box.style.opacity = '0.2';
        section1Text.style.opacity = '0.2';
        myDelay = setTimeout(wait2, delay)
        function wait2(){
            gameover.style.transform = "scale(1)"
            document.querySelector('.tooLow').innerHTML = 'our secret number is' + randomNumber
        }


        gameover.addEventListener('click', () =>{
        location.reload();
  });
         
    }

    else{
      
        wrongBox.style.transform = "scale(1)"
        wrongBox.style.display = 'flex';
        document.querySelector(".section1-text").style.pointerEvents = "none";
        document.querySelector(".section1-box").style.pointerEvents = "none";
        section1Box.style.opacity = '0.2';
        section1Text.style.opacity = '0.2';

        myDelay = setTimeout(wait1, delay)
        function wait1(){
            tryAgain.style.transform = "scale(1)" 
        }
        if(guessInput > randomNumber){
            document.querySelector('.tooLow').innerHTML = 'Your guessed number is higher than our SECRET NUMBER'

        }
        else{
            document.querySelector('.tooLow').innerHTML = 'Your guessed number is lower than our SECRET NUMBER'
        }

       

        tryAgain.addEventListener('click', () =>{
            wrongBox.style.transform = "scale(0)"
            tryAgain.style.transform = "scale(0)" 
            document.querySelector(".section1-text").style.pointerEvents = "auto";
            document.querySelector(".section1-box").style.pointerEvents = "auto"; 
            section1Box.style.opacity = '1';
            section1Text.style.opacity = '1';
            document.querySelector('.form').reset();

            
      });
     
      
    }



}



