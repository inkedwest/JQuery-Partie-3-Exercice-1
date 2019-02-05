$(function(){
   var count = 0;
   $('#button').click(function(){
    count++; // Ajoute 1 au compteur
      $('#text').val(count);// La fonction val permet de définir la valour d'un input (pas forcément que des nombres)
   });
});
