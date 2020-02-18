$(".header__burger").click(function(event) {
  $(".header__burger,.header-nav,.header-nav__logo").toggleClass("active");
  $("body").toggleClass("lock");
});

function ibg() {
  document.querySelectorAll(".ibg").forEach(el => {
    if (el.querySelector("img")) {
      el.style.backgroundImage =
        "url(" + el.querySelector("img").getAttribute("src") + ")";
    }
  });
}

ibg();
