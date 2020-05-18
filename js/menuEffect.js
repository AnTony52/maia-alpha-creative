// scroll menu effect

var last_scroll = 0;
var scroll_delta = 0;

function scrollFunction() {
  let scroll_pos = 0;
  if (document.body.scrollTop > scroll_pos || document.documentElement.scrollTop > scroll_pos) {
    document.getElementById("header__menu").classList.add("change__css");
    $(".change__css").fadeIn(300);//fadeIn because it's been fadeOut


  } else {
    $(".change__css").fadeOut(300);//fadeOut is a opacity animation
    setTimeout(() => { 
        document.getElementById("header__menu").classList.remove("change__css");
      }, 500);
  }
    }


window.onscroll = function() {scrollFunction()}

