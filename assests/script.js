//windows scroll
$(window).on("scroll",function(){
    var scrollTop= $(window).scrollTop();
    if(scrollTop>=80){
      $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
})
//document ready

$(window).ready(function(){
  //typing animation
  new Typed('#type-it', {
    strings: ['Designer', 'Developer'],
    typeSpeed: 100,
    loop:true,
  });
})