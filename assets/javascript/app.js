$(document).ready(function( $ ) {

    var gameStart = randomNum()
    function randomNum(){
        var random = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").text(random); 
        return random
    }


}); //end doc ready
