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
    strings: ['Developer'],
    typeSpeed: 100,
    loop:false,
  });
})
// popup
let popup= document.getElementById("popup");
function openPopup(){
    console.log("h");
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}