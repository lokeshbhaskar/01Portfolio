$(window).on("scroll",function(){
    var scrollTop= $(window).scrollTop();
    if(scrollTop>=80){
      $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
})