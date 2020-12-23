// Detect Mobile
var isMobile = false;

$(document).ready(function(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
var dropdown_open = false;
var lastScrollTop = 0;
$(document).ready(function(){
  $(window).scroll(function (event) {
    // Popover
    $('#btn-heart').popover('hide');
    // Toggle Navbar/Dropdown
    var curScrollTop = $(window).scrollTop();
    if(curScrollTop > lastScrollTop) {
      $(".navbar").addClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
      $('.navbar').removeClass("shadow-lg");
      if(dropdown_open) {
        $("#navbarDropdown").dropdown('toggle');
        dropdown_open = false;
      }
    } else {
      $(".navbar").addClass("nav-trans-in");
      $(".navbar").removeClass("nav-trans-out");
      $('.navbar').addClass("shadow-lg");
    }
    if(curScrollTop <= 50){
      $('.navbar').removeClass("shadow-lg");
      $(".navbar").removeClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
    }
    lastScrollTop = curScrollTop;
  });
});

$(document).ready(function(){
  $("#navbarDropdown").click(function() {
    if(!dropdown_open) {
      dropdown_open = true;
    } else {
      dropdown_open = false;
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

// Body
  // Start At The Top and Animations
jQuery(function(){
  $(".elements").each(function(i, el) {
    if ($(el).visible()) {
      $(el).addClass("come-in"); 
    }
  });
});

  // Body Scrolling Options
$(document).ready(function(){
  $(window).scroll(function (event) {
    $(".elements").each(function(i, el) {
      if ($(el).visible()) {
        $(el).addClass("come-in"); 
      }
    });
  });
});


  