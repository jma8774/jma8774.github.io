// Detect Mobile
var isMobile = false;

$(document).ready(function(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#a1-v').prop('controls',true);
    $('#a2-v').prop('controls',true);
    $('#a3-v').prop('controls',true);
    $('#a4-v').prop('controls',true);
    isMobile = true;
  }
});

// Enable popovers and tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

// Navbar
  // Navbar Scrolling Options
var pulldown_open = false;
var lastScrollTop = 0;
$(document).ready(function(){
  $(window).scroll(function (event) {
    var curScrollTop = $(window).scrollTop();
    if(curScrollTop > lastScrollTop || curScrollTop + $(window).height() >= $(document).height()) {
      $(".navbar").addClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
      $('.navbar').removeClass("shadow-lg");
      if(pulldown_open) {
        $("#navbarDropdown").dropdown('toggle');
        pulldown_open = false;
      }
    } else {
      $(".navbar").addClass("nav-trans-in");
      $(".navbar").removeClass("nav-trans-out");
      $('.navbar').addClass("shadow-lg");
    }
    if(curScrollTop <= 0){
      $('.navbar').removeClass("shadow-lg");
      $(".navbar").removeClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
    }
    lastScrollTop = curScrollTop;
  });
});

$(document).ready(function(){
  $("#navbarDropdown").click(function() {
    if(!pulldown_open) {
      pulldown_open = true;
    } else {
      pulldown_open = false;
    }
  });
});

  // Navbar Width Options
$(document).ready(function(){
  if($(window).width() < 800 || isMobile){
    $('.desktop-nav').addClass("d-none");
    $('.mobile-nav').removeClass("d-none");
  }
});

$(document).ready(function(){
  $(window).on('resize', function() {
    if($(window).width() < 800 || isMobile) {
      $('.desktop-nav').addClass("d-none");
    $('.mobile-nav').removeClass("d-none");
    } else {
      $('.desktop-nav').removeClass("d-none");
    $('.mobile-nav').addClass("d-none");
    }
  });
});

  // GitHub Button
$(document).ready(function(){
  $("#btn-github").click(function(){
    window.open('https://github.com/jma8774', '_blank');
  });
});

  // Resume Button
  $(document).ready(function(){
    $(".btn-resume").click(function(){
      window.open('resume.pdf', '_blank');
    });
  });