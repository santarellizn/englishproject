$(document).ready(function(){
    
   $('#giving').hide();
   $('#work').hide();
   $('#crime').hide();
   $('#freedom').hide();
   $('#friendship').hide();
   $('#death').hide();
   
   $('#givingli').on('click', function(){
       
        $('#home').hide();
        $('#giving').show();
        $('#work').hide();
        $('#crime').hide();
        $('#freedom').hide();
        $('#friendship').hide();
        $('#death').hide();
       
   });
   
   $('#workli').on('click', function(){
       
        $('#home').hide();
        $('#giving').hide();
        $('#work').show();
        $('#crime').hide();
        $('#freedom').hide();
        $('#friendship').hide();
        $('#death').hide();
       
   });
   
   $('#crimeli').on('click', function(){
       
        $('#home').hide();
        $('#giving').hide();
        $('#work').hide();
        $('#crime').show();
        $('#freedom').hide();
        $('#friendship').hide();
        $('#death').hide();
       
   });
   
   $('#freedomli').on('click', function(){
       
        $('#home').hide();
        $('#giving').hide();
        $('#work').hide();
        $('#crime').hide();
        $('#freedom').show();
        $('#friendship').hide();
        $('#death').hide();
       
   });
   
   $('#friendshipli').on('click', function(){
       
        $('#home').hide();
        $('#giving').hide();
        $('#work').hide();
        $('#crime').hide();
        $('#freedom').hide();
        $('#friendship').show();
        $('#death').hide();
       
   });
   
   $('#deathli').on('click', function(){
       
        $('#home').hide();
        $('#giving').hide();
        $('#work').hide();
        $('#crime').hide();
        $('#freedom').hide();
        $('#friendship').hide();
        $('#death').show();
       
   });
});