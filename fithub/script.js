//section 1 slides animation starts here//
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide1box1 = document.querySelector('.slide1box1');
var slide1box2 = document.querySelector(".slide1box2")
var slide1BTN = document.getElementById("slide1BTN");


var delayPause = 4000;
var myPauseDelay;

var firstInterval = 1000
var delayInterval;

var btndelay = 800;
var btnpalse;

mySection1Slide1()
function mySection1Slide1(){
    slide1.style.left = "-30vw";
    slide1box1.style.opacity = "1";
    slide1box1.style.top = "100px"
    slide1BTN.style.opacity = "1";
    myPauseDelay = setTimeout(mySection1Slide1Out, delayPause);
}

function mySection1Slide1Out(){
    slide1.style.left = "-100vw";
    slide1box1.style.opacity = "0";
    slide1box1.style.top = "70px"
    slide1BTN.style.opacity = "0";
    delayInterval = setTimeout(mySection1Slide2, firstInterval);
  }

  function mySection1Slide2(){
    slide2.style.left = "-35vw";
    slide1box2.style.opacity = "1"
  }


  //Lines of codes that control the section1 Arrows to slide the animation//


function arrowRightSlide1(){
    slide2.style.left = "-100vw";
    slide1box2.style.opacity = "0";

    btnpalse = setTimeout(arrowRightSlide1In, btndelay);
  }
  function arrowRightSlide1In(){
  slide1.style.left = "-30vw";
  slide1box1.style.top = "100px"
  slide1box1.style.opacity = "1"
  slide1BTN.style.opacity = "1";
}

  function arrowRightSlide2(){
    slide1.style.left = "-100vw";
    slide1box1.style.top = "70px"
    slide1box1.style.opacity = "0"
    
    btnpalse = setTimeout(arrowRightSlide2In, btndelay);

  }
  function arrowRightSlide2In(){
    slide2.style.left = "-35vw";
    slide1box2.style.opacity = "1";
    
}
   
  function automateSlide(){
    if(slide2.style.left == "-35vw"){
      arrowRightSlide1();
    }
    else if(slide1.style.left == "-30vw"){
      arrowRightSlide2()
    }
  }

//section2 slide3 scroll animation//

window.addEventListener('scroll', () =>{
  var slide = document.querySelector('.slide3');
  var slidePosition = slide.getBoundingClientRect().top;
  var screenPosition = window.innerHeight /1;
  if(slidePosition < screenPosition){
      slide.classList.add('add');
  }
  else{
      slide.classList.remove('add');
  }
});


//section4 scroll animation//

window.addEventListener('scroll', () =>{
  var slide = document.querySelector('.slide4container');
  var slidePosition = slide.getBoundingClientRect().top;
  var screenPosition = window.innerHeight /1;
  if(slidePosition < screenPosition){
      slide.classList.add('plus');
  }
  else{
      slide.classList.remove('plus');
  }
});

//section 5 slide5 auto button animation //
var section5slides = document.querySelector('.section5slides')
var section5slidersa = document.getElementById("section5slidersa");
var section5slidersb = document.getElementById("section5slidersb");
var section5slidersc = document.getElementById("section5slidersc");
var interval = 3000;
var myVar;

var section5container = document.getElementsByClassName(".section5container");
var rightBtn = document.getElementById("rightBtn");
var leftBtn = document.getElementById("leftBtn");


slideRight();
function slideLeft() {
  section5slidersa.style.left = " -500px";
  section5slidersb.style.left = "-500px";
  section5slidersc.style.left = "530px";
  myVar = setTimeout(slideRight, interval);
  rightBtn.style.background = "#E84C3D"
  leftBtn.style.background = "white"
}

function slideRight() {
  section5slidersc.style.left = "1190px";
  section5slidersb.style.left = "0px";
  section5slidersa.style.left = " 0px";
  myVar = setTimeout(slideLeft, interval);
  leftBtn.style.background = "#E84C3D"
  rightBtn.style.background = "white"
}


//codes to pause the sliders on mouse enter and leave//

rightBtn.addEventListener ('mouseenter', () =>{
  clearTimeout(myVar)
})


rightBtn.addEventListener('mouseleave', () =>{
myVar = setTimeout(slideLeft, interval);
}) 

leftBtn.addEventListener('mouseenter', () =>{
clearTimeout(myVar);
});

leftBtn.addEventListener('mouseleave', () =>{
myVar = setTimeout(slideRight, interval);
}) 

//Codes to control the slider through the left and right buttons//
  
rightBtn.addEventListener('click', () =>{
  section5slidersa.style.left = " -500px";
  section5slidersb.style.left = "-500px";
  section5slidersc.style.left = "540px";
  rightBtn.style.background = "#E84C3D"
  leftBtn.style.background = "white"
})

leftBtn.addEventListener('click', () =>{
  section5slidersc.style.left = "1190px";
  section5slidersb.style.left = "0px";
  section5slidersa.style.left = " 0px";
  leftBtn.style.background = "#E84C3D"
  rightBtn.style.background = "white" 
})

//Section 9 starts codes that control the onfocus action on the input mail box//
var onfocus = document.querySelector(".sect9inputbox");

onfocus.addEventListener("focus", () =>{
  onfocus.style.boxShadow = "1px 0 5px 1px  white";
});
onfocus.addEventListener("focusout", () =>{
  onfocus.style.boxShadow = "";
});



//Section 10 starts//

const sect10cont = document.querySelector(".section10inputbox1");

sect10cont.addEventListener("focus", () =>{
  sect10cont.style.border = "0.1px white solid";
});
sect10cont.addEventListener("focusout", () =>{
  sect10cont.style.border = "";
});

const sect10cont2 = document.querySelector(".section10con2");

sect10cont2.addEventListener("focus", () =>{
  sect10cont2.style.border = "0.2px white solid";
});
sect10cont2.addEventListener("focusout", () =>{
  sect10cont2.style.border = "";
});

const sect10cont3 = document.querySelector(".section10inputbox2");
sect10cont3.addEventListener("focus", () =>{
  sect10cont3.style.border = "0.2px white solid";
});
sect10cont3.addEventListener("focusout", () =>{
  sect10cont3.style.border = "";
});

const sect10cont4 = document.querySelector(".section10inputbox3");
sect10cont4.addEventListener("focus", () =>{
  sect10cont4.style.border = "0.2px white solid";
});
sect10cont4.addEventListener("focusout", () =>{
  sect10cont4.style.border = "";
});



































  //Lines of codes that control the Tablet responsive animation//

  var x = window.matchMedia("(max-width: 768px)")
  if(x.matches){
    slide1.style.left = "-25vw";
    slide1box1.style.opacity = "1";
    slide1box1.style.top = "100px"
    slide1BTN.style.opacity = "1";
    myPauseDelay = setTimeout(mySection1Slide1Out, delayPause);


    function mySection1Slide1Out(){
        slide1.style.left = "-100vw";
        slide1box1.style.opacity = "0";
        slide1box1.style.top = "70px"
        slide1BTN.style.opacity = "0";
        delayInterval = setTimeout(mySection1Slide2, firstInterval);
      }
    
      function mySection1Slide2(){
        slide2.style.left = "-35vw";
        slide1box2.style.opacity = "1"
        slide1box2.style.bottom = "-30px"
      }


//Lines of codes that control the section1 Arrows to slide the animation//
      function arrowRightSlide1(){
        slide2.style.left = "-100vw";
        slide1box2.style.opacity = "0";
        
    
        btnpalse = setTimeout(arrowRightSlide1In, btndelay);
      }
      function arrowRightSlide1In(){
      slide1.style.left = "-25vw";
      slide1box1.style.top = "100px"
      slide1box1.style.opacity = "1"
      slide1BTN.style.opacity = "1";
    }
    
      function arrowRightSlide2(){
        slide1.style.left = "-100vw";
        slide1box1.style.top = "70px"
        slide1box1.style.opacity = "0"
        
        btnpalse = setTimeout(arrowRightSlide2In, btndelay);
    
      }
      function arrowRightSlide2In(){
      slide2.style.left = "-35vw";
        slide1box2.style.opacity = "1";
    }
       
      function automateSlide(){
        if(slide2.style.left == "-35vw"){
          arrowRightSlide1();
        }
        else if(slide1.style.left == "-25vw"){
          arrowRightSlide2()
        }
      }   
  }


  //codes to pause the sliders on mouse enter and leave Tablet device//
  if(x.matches){
    slideRight();
function slideLeft() {
  section5slidersa.style.left = " -600px";
  section5slidersb.style.left = "-550px";
  section5slidersc.style.left = "180px";
  myVar = setTimeout(slideRight, interval);
  rightBtn.style.background = "#E84C3D"
  leftBtn.style.background = "white"
}

function slideRight() {
  section5slidersc.style.left = "800px";
  section5slidersb.style.left = "-130px";
  section5slidersa.style.left = " -140px";
  myVar = setTimeout(slideLeft, interval);
  leftBtn.style.background = "#E84C3D"
  rightBtn.style.background = "white"
}

//Codes to control the slider through the left and right buttons//
  
rightBtn.addEventListener('click', () =>{
  section5slidersa.style.left = " -600px";
  section5slidersb.style.left = "-550px";
  section5slidersc.style.left = "180px";
  rightBtn.style.background = "#E84C3D"
  leftBtn.style.background = "white"
})

leftBtn.addEventListener('click', () =>{
  section5slidersc.style.left = "800px";
  section5slidersb.style.left = "-130px";
  section5slidersa.style.left = " -140px";
  leftBtn.style.background = "#E84C3D"
  rightBtn.style.background = "white" 
})


  }










   //Lines of codes that control the Mobile responsive animation//

var mobile = window.matchMedia("(max-width: 500px)")

    if(mobile.matches){
    slide1.style.left = "-25vw";
    slide1box1.style.opacity = "1";
    slide1box1.style.top = "-30px"
    slide1BTN.style.opacity = "1";
    myPauseDelay = setTimeout(mySection1Slide1Out, delayPause);


    function mySection1Slide1Out(){
        slide1.style.left = "-100vw";
        slide1box1.style.opacity = "0";
        slide1box1.style.top = "-20px"
        slide1BTN.style.opacity = "0";
        delayInterval = setTimeout(mySection1Slide2, firstInterval);
      }
    
      function mySection1Slide2(){
        slide2.style.left = "-35vw";
        slide1box2.style.opacity = "1"
        
      }

      
      //Lines of codes that control the section1 Arrows to slide the animation//

      function arrowRightSlide1(){
        slide2.style.left = "-100vw";
        slide1box2.style.opacity = "0";
         
    
        btnpalse = setTimeout(arrowRightSlide1In, btndelay);
      }
      function arrowRightSlide1In(){
      slide1.style.left = "-25vw";
      slide1box1.style.top = "10px"
      slide1box1.style.opacity = "1"
      slide1BTN.style.opacity = "1";
    }
    
      function arrowRightSlide2(){
        slide1.style.left = "-100vw";
        slide1box1.style.top = "20px"
        slide1box1.style.opacity = "0"
        
        btnpalse = setTimeout(arrowRightSlide2In, btndelay);
    
      }
      function arrowRightSlide2In(){
      slide2.style.left = "-35vw";
        slide1box2.style.opacity = "1";
    }
       
      function automateSlide(){
        if(slide2.style.left == "-35vw"){
          arrowRightSlide1();
        }
        else if(slide1.style.left == "-25vw"){
          arrowRightSlide2()
        }

      }


      
}


 //Lines of codes that control the section5//
 if(mobile.matches){
 slideRight();
 function slideLeft() {
   section5slidersa.style.left = " -300px";
   section5slidersb.style.left = "-200px";
   section5slidersc.style.left = "230px";
   myVar = setTimeout(slideRight, interval);
   rightBtn.style.background = "#E84C3D"
   leftBtn.style.background = "white"
 }
 
 function slideRight() {
   section5slidersc.style.left = "600px";
   section5slidersb.style.left = "20px";
   section5slidersa.style.left = " 20px";
   myVar = setTimeout(slideLeft, interval);
   leftBtn.style.background = "#E84C3D"
   rightBtn.style.background = "white"
 }
       
  }





  /* Mobile*/
  var m = window.matchMedia("(max-width: 400px) and (min-width: 320px)")
  if(m.matches){
    slide1box1.style.top = "8px"

    

    function mySection1Slide1Out(){
        slide1.style.left = "-100vw";
        slide1box1.style.opacity = "0";
        slide1box1.style.top = "-1px"
        slide1BTN.style.opacity = "0";
        delayInterval = setTimeout(mySection1Slide2, firstInterval);
      }





  }