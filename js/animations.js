$(document).ready(function() {
    var $charcount = $('#char-count');

    $('#tweet-controls').hide()
    $('.tweet-compose').click(function(){
     
        $('#tweet-controls').show()
        $('.tweet-compose').innerHeight('5em')  
    }
    )


    
    $('.tweet-compose').keypress(function() {
        var count = $(this).val().length;
        var maxCharacters = 140 - count ;
        $charcount.text(maxCharacters);

        if (maxCharacters <= 10){
            $charcount.css('color', 'red') 
        }

        if (maxCharacters > 140){
            $('#tweet-controls').disabled()
        }else{
            $('#tweet-controls').enabled()
        }
    });   



});