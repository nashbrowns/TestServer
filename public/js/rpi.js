$(document).ready(function() {

    $('#newRpi').on('click', function(){

        $.post("/api/rpi/", function(){
            console.log('added new Rpi');
        });
    });
});