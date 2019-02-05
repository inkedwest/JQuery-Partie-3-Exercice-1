$(function(){
        $('#clickBtn').on('click', function(){ // Appel de la fonction au clic
            var $number = $('#clickNmb').text();
            $number++;
            $('#clickNmb').text($number);
        });
});
