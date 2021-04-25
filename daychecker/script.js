var txtContainer = document.querySelector(".txt-container");
var name = document.getElementById("namefieldID")
var box2 = document.querySelector(".box2");
var time = document.querySelector(".time");
var btn2 = document.querySelector(".btn2");

//codes to run when window load. These codes controls the opacity of some elements//

function load() {
    txtContainer.style.opacity = "1"
    
}
load();
//codes to control the name validation process. I used 'return false' in the html form section to prevent the page from reloading //
//this made the else statement to work. I called the fuction 'doAction' in the else statement.
//That is once a user fills name, perform the else satement.//
//The .trim is built inside javascript to check white spaces in string. x is the value of the form//

function nameValidation() {
    var x = document.forms["formName"]["nameInput"].value;
    if ( x.trim()=="") {
      alert("Name must be filled out");
      return false;
    }
    else{
        doAction();
    }
  }
   

//Codes that runs the interactive phase after user has input name//
let clickState = 0;
function doAction() {
    clickState++;

    if (clickState == 1 ){
        var namefield = document.querySelector(".namefield").value;
        var displayName = "Hello" + " " + namefield + "," + " " + "please, click the Next Button to continue"
        document.querySelector(".propmt-text").innerHTML = displayName;
        box2.style.display = 'none';
        btnMain.style.display = 'block'
    }
    else if (clickState == 2 ){
    var namefield = document.querySelector(".namefield").value;
    var displayName2 = namefield + ", " + "what says your time?";
    document.querySelector(".propmt-text").innerHTML = displayName2;
    time.style.display = 'grid';
    btn2.style.display = 'block'
    btnMain.style.display = 'none' 
      
}

}


//codes to control the second phase about time selection //
function check(){
    var namefield = document.querySelector(".namefield").value;
    var hourSelector = document.getElementById('hourSelector').value;
    var minuteSelector = document.querySelector('.minuteSelector').value;
    var timeSelector = document.querySelector('.timeSelector').value;


   if(hourSelector <= 'l' && minuteSelector <= '59' && timeSelector === 'AM' ){
    var displayNext = "Hello" + " " + namefield + "," + " " + "Good Morning, it's a bright day, do have a great day :)"
    document.querySelector(".propmt-text").innerHTML = displayNext;
   }
    else if((hourSelector == 'm' || hourSelector == 'n' || hourSelector == 'o' || hourSelector == 'p'
    || hourSelector == 'q' || hourSelector == 'r') && minuteSelector <= '59' && timeSelector === 'PM'){
        var displayNext2 = "Hello" + " " + namefield + "," + " " + "Good Afternoon, it's sunny right now, take some water :)"
        document.querySelector(".propmt-text").innerHTML = displayNext2;
    }
    else if((hourSelector == 's'|| hourSelector == 't') && minuteSelector <= '59' && timeSelector === 'PM'){
        var displayNext3 = "Hello" + " " + namefield + "," + " " + "Good Evening, it's getting dark, time to go home :)"
        document.querySelector(".propmt-text").innerHTML = displayNext3;

    }
    else if((hourSelector == 'u'|| hourSelector == 'v' || hourSelector == 'w' || hourSelector == 'x') && minuteSelector <= '59' && timeSelector === 'PM'){
        var displayNext4 = "Hello" + " " + namefield + "," + " " + "it's night already, time to go to bed, goodnight :)"
        document.querySelector(".propmt-text").innerHTML = displayNext4;

    }
    else {
        var displayNext5 = "Hello" + " " + namefield + "," + " " + "it is an invalid input, please try again :("
        document.querySelector(".propmt-text").innerHTML = displayNext5;

    }
 
   
}
 