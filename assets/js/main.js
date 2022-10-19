$(document).ready(function(){

  $("#close").click(function(){
    $("#fixOffer").hide();
  });

  $(document).on("scroll",function(){
      if ($(document).scrollTop() > 250){
        $(".navbar").addClass("shrink");
      }else {
        $(".navbar").removeClass("shrink");
      }
    });
    $(document).on('click','.navbar-collapse',function(e) {
      if( $(e.target).is('a:not(".dropdown-toggle")') ) {
          $(this).collapse('hide');
      }
  });
    
});
AOS.init();
AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});