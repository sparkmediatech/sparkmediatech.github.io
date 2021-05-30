var regex = /^[0-9]+$/
var remove;

fillTodo()
function fillTodo(){
$('.inputBox').on('keypress', function(myEvent){
    var userArray = $('.inputBox').val()
    if(myEvent.which == 13 && userArray.trim() === ''){
        $(this).val('');
        alert('Make sure that there is no Space, use only letters')
    }
    else if((userArray.match(regex))){
        $(this).val('');
        alert('Please, do not use any number. Use only letters')

    }
    else if(myEvent.which == 13){
        $(this).val('');
        $('.todo-wrapper').append('<div class="todo-Array  "><span class="material-icons del">delete</span>'  + userArray + '</div>') //how to add a variable inside a div element
           
    }
})

}
$('.close').on('click', function(){
    $('.inputBox').fadeToggle(1000,"linear")
    $('.close').fadeOut(500,"linear", function(){
        $('.open').fadeIn(500, "linear")
    })  
})

$('.open').on('click', function(){
    $('.inputBox').fadeToggle(1000,"linear")
    $('.open').fadeOut(500,"linear", function(){
        $('.close').fadeIn(500, "linear") 
        }) 
   
})

$('.todo-wrapper').on('click', 'span', function(){
    $(this).parent().fadeOut('linear')
})


