var num1 = ['0', '1', '2', '3', '4', '5'];
var num2 = ['6', '7', '8', '9', '10', '11'];

var a = [Math.floor(Math.random() * num1.length)];
var b = [Math.floor(Math.random() * num2.length)];

var box1 = document.getElementById("agent").value=a;
var box2 = document.getElementById("agent2").value=b;
var box3 = document.getElementById("agent3").value;
var box4 = parseFloat(a) + parseFloat(b);



function result() {
    var box1 = document.getElementById("agent").value=a;
    var box2 = document.getElementById("agent2").value=b;
    var box3 = document.getElementById("agent3").value;
    var box4 = parseFloat(a)+ parseFloat(b);
    if(box3 == box4){
        alert("Successful");
        
    }else{
        alert("not valid");
    }


}
