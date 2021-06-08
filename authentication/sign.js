function refresh(){
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
    ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
    
    var a = letters[Math.floor(Math.random() * 71)];
    var b = letters[Math.floor(Math.random() * 71)];
    var c = letters[Math.floor(Math.random() * 71)];
    var d = letters[Math.floor(Math.random() * 71)];
    var e = letters[Math.floor(Math.random() * 71)];
    var f = letters[Math.floor(Math.random() * 71)];
   

    var sum = a+b+c+d+e+f;
    capt = document.getElementById("captcha").value = sum;
}

    
    
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
    ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
    
    var a = letters[Math.floor(Math.random() * 71)];
    var b = letters[Math.floor(Math.random() * 71)];
    var c = letters[Math.floor(Math.random() * 71)];
    var d = letters[Math.floor(Math.random() * 71)];
    var e = letters[Math.floor(Math.random() * 71)];
    var f = letters[Math.floor(Math.random() * 71)];
   

    var sum = a+b+c+d+e+f;
    capt = document.getElementById("captcha").value = sum;
    
   
   

function pop(){
    var action1 = document.getElementById("captcha").value;
    var action2 = document.getElementById("input-box").value;

    if(action1 == action2){
        var c = 0;
        if(c == 0){
        document.getElementById("alert-box").style.display = "block";
        c = 1;
        
    }     
        
    }else{
        document.getElementById("alert-box2").style.display = "block";
           
        }
      
    }

    