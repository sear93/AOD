$(".header__burger").click(function(event) {
  $(".header__burger,.header-nav,.header-nav__logo").toggleClass("active");
  $("body").toggleClass("lock");
});

function bg(){
  let bg = document.querySelectorAll(".bg");
  for (var i = 0; i < bg.length; i++) {
  if(bg[i].querySelector('img')){
    bg[i].style.backgroundImage = 'url('+bg[i].querySelector('img').getAttribute('src')+')';
    }
  };
}

bg();