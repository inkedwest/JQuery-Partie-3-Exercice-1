$(function(){
    $(document).ready(function(){
        $('#clickBtn').on('click', function(){ // Appel de la fonction au clic
            var $test = $('#clickNmb').text(); 
            $test++;
            $('#clickNmb').text($test);
        });
    });
});
