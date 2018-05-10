$(document).ready(function( $ ) {

    $(".card-subtitle").hide();//hide time remaining and question before Start pressed
    $("#buttons").hide();
    $("#startBtn").click(function() { //start pressed, start button hides, time remaining and question display
    $(this).hide('fast', function(){
           $(".card-subtitle").show('fast', function(){
               $("#buttons").show('fast', function(){

               });//this hide
           });//coutdonw show
       });//question show

     });//start button click
     
    
    


}); //end doc ready
