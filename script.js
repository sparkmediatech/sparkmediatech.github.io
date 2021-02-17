function add() {
    var box1 = document.getElementById("text-box").value;
    var box2 = document.getElementById("text-box2").value;

    var answer = parseInt(box1) + parseInt(box2);
    document.getElementById("display-box").value = answer;
}

function subtract() {
    var box1 = document.getElementById("text-box").value;
    var box2 = document.getElementById("text-box2").value;

    var answer = parseInt(box1) - parseInt(box2);
    document.getElementById("display-box").value = answer;
}

function multiplication() {
    var box1 = document.getElementById("text-box").value;
    var box2 = document.getElementById("text-box2").value;

    var answer = parseInt(box1) * parseInt(box2);
    document.getElementById("display-box").value = answer;
}

function division() {
    var box1 = document.getElementById("text-box").value;
    var box2 = document.getElementById("text-box2").value;

    var answer = parseInt(box1) / parseInt(box2);
    document.getElementById("display-box").value = answer;
}