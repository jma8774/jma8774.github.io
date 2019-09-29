$(document).ready(function() {
  $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      $(".fade-scroll").css({"opacity": ((height-scrollTop) / height)});
  });
});
