// scroll menu effect
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header__menu").classList.add("header__menu--scroll");

  } else {
    document.getElementById("header__menu").classList.remove("header__menu--scroll")
  }
    }