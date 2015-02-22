 var setBgColour = function(id){
   if(id == '#about'){
        $('body').addClass('darkbg');
        $('#menu ul li button.active').addClass('active-dark-bg');
        $('.active-light-bg').removeClass('active-light-bg');
    }
    else{
         $('body').removeClass('darkbg');
         $('#menu ul li button.active').addClass('active-light-bg');
         $('.active-dark-bg').removeClass('active-dark-bg');
    }
};   

$(function(){
   
    
$('#signature-title').hide().delay(500).fadeIn(2000);
$('#menu').hide().delay(850).fadeIn(1500);


/*add new page sections here to hide*/
$('#about').hide();

 $('#menu ul li button').on("click touchstart ",function() {
     
        $('.active').removeClass('active');
        $(this).addClass('active');
        /*find which page is currently active and slide it into view*/ 
        var dataTarget = $(this).attr("data-target");

        
        if( dataTarget != ('#' + $('.selected-page').attr('id'))){
               
            setBgColour(dataTarget);
            
           
            $('.selected-page').animate({
                "marginLeft":"-=100%"
            }, 500);
            $(dataTarget).show()
            $(dataTarget).animate({
                "marginLeft":"0px"
            }, 500);
            $('.selected-page').hide();
            
            /* workaround so the pages do not slide from the left after they are being called for the second time */
             $('.selected-page').animate({
                "marginLeft":"100%"
            }, 500);
           $('.selected-page').removeClass('selected-page');
         
         
            
            $(dataTarget).addClass('selected-page');
        }
        

     
     
     
/*        $( "#landing-page" ).toggle("slide","left",500);
        $('body').toggleClass('darkbg');
        $('#about').toggle("slide","left",500);*/
     
   /*     $('#about').show().animate({
       
       
       "left":"-=100%"},"slow"); */
     
     
     


});
      
    });
    



        
        

