$(function(){
        $('#clickBtn').on('click', function(){ // Appel de la fonction au clic
            var $nombre = $('#clickNmb').text();
            $nombre++;
            $('#clickNmb').text($nombre);
        });
});
