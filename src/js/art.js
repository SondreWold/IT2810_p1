var colours = ["#6f3e3e", "#904041", "#84544c", "#98655d", "#a96a28", "#ce9961"];
var colours2 = ["#445626", "#52682d", "#6e8b3d", "	#7c9d45", "	#96b85d", "#96b85d"];
var isHidden = false;

// Show/Hide functionality for documentation
$(document).ready(function() {
    $('#docuContent').hide();
});

$('#docuClick').click(function(){
    if(isHidden){
        $('#docuContent').show();
        isHidden = false;
    } else {
        $('#docuContent').hide();
        isHidden = true;
    }
});

/*** Interactiveness for elements in art work. ***/

// Colour changes
$('.blackCircle').mouseover(function() {
    let randomInt = Math.floor(Math.random() * 6); 
    $(".blackCircle").css({ fill: colours[randomInt] });   
});

$('.blackCircle2').mouseover(function() {
    let randomInt = Math.floor(Math.random() * 6); 
    $(".blackCircle2").css({ fill: colours2[randomInt] });   
});

$('.blackRect').mouseover(function() {
    let randomInt = Math.floor(Math.random() * 6); 
    $(".blackRect").css({ fill: colours[randomInt] });
    $(".blackEl").css({ fill: colours[randomInt] });   
});

$('.blackRect2').mouseover(function() {
    let randomInt = Math.floor(Math.random() * 6); 
    $(".blackRect2").css({ fill: colours2[randomInt] });
    $(".blackEl2").css({ fill: colours2[randomInt] });   
});

$('#blueCircle').mouseover(function() {
    $("#blueCircle").hide();
});

$('#blueCircle').mouseout(function() {
    $("#blueCircle").show();
});

// Click actions (modification of x,y values)
$(".blackRect").mousedown(function() {
    let x = parseInt($(".blackRect").attr('x'));
    if(x < 600){
        $(".blackRect").attr('x', parseInt(x) + 10);
    } else if( x > 0){
        $(".blackRect").attr('x', parseInt(x) - 10);
        
    }
});
$(".blackRect2").mousedown(function() {
    let x = parseInt($(".blackRect2").attr('x'));
    if(x < 600){
        $(".blackRect2").attr('x', parseInt(x) - 10);
    } else if( x > 0){
        $(".blackRect2").attr('x', parseInt(x) + 10);  
    }
});

$('.blackLine').mousedown(function() {
    let x1 = parseInt($(".blackLine").attr('x1'));
    let x2 = parseInt($(".blackLine").attr('x2'));
    if(x1 < x2){
        $('.blackLine').attr('x1', x2);
    }
    if(x1 >= x2){
        $('.blackLine').attr('x1', x1 -10);
    }
});

$('.blackLine2').mousedown(function() {
    let x1 = parseInt($(".blackLine2").attr('x1'));
    let x2 = parseInt($(".blackLine2").attr('x2'));
    if(x1 < x2){
        $('.blackLine2').attr('x1', x2);
    }
    if(x1 >= x2){
        $('.blackLine2').attr('x1', x1 -10);
    }
});
