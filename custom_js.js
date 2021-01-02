// Sliding Helper Functions
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
function add_slide_in(tag, idx) {
  $(tag).each(function(i, el) {
    if ($(el).isInViewport()) {
      setTimeout(function() { 
        $(el).addClass("slide-up");
      }, 150 * i);
    }
  });
}
function title_slide(isScroll, offset) {
  var delay = 1100;
  if(isScroll) delay = 500;
  $(".title-anim").each(function(i, el) {
    setTimeout(function() { 
      if($(el).isInViewport())
        $(el).addClass("title-slide-up");
    }, delay + offset + (200 * i));
  });
}
function navbar_slide() {
  $(".left-nav-anim").each(function(i, el) {
    setTimeout(function() { 
      $(el).addClass("slide-down");
    }, 150 * i);
  });
  $(".right-nav-anim").each(function(i, el) {
    setTimeout(function() { 
      $(el).addClass("slide-down");
    }, 300 + (150 * i));
  });
  setTimeout(function() { 
    $('.mobile-right-nav-anim').addClass("slide-down");
  }, 300);
}

// Document.Ready()
jQuery(function() {
  // Initial
    // Detect Mobile
  var isMobile = false;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }
    // Viewport
  viewportHeight = $(window).height();
  $("#title").css("margin-top", (viewportHeight-$("#title").outerHeight()) * 0.25);
  $("#title").css("margin-bottom", (viewportHeight-$("#title").outerHeight()) * 0.65);
    // Determine Mobile/Desktop Navbar
  if($(window).width() < 800 || isMobile){
    $('.desktop-nav').addClass("d-none");
    $('.mobile-nav').removeClass("d-none");
  }
    // Slide In
  let tags = ['.about', '.project', '.contact']
  tags.forEach(add_slide_in)
  navbar_slide();
  if($(window).width() < 800 || isMobile) 
    title_slide(false, 0);
  else {
    title_slide(false, 450);
  }

  
  // On Resize
  $(window).on('resize', function() {
    // Determine Mobile/Desktop Navbar
    if($(window).width() < 800 || isMobile) {
      $('.desktop-nav').addClass("d-none");
      $('.mobile-nav').removeClass("d-none");
    } else {
      $('.desktop-nav').removeClass("d-none");
      $('.mobile-nav').addClass("d-none");
    }
    // Margin/Padding of Title
    viewportHeight = $(window).height();
    $("#title").css("margin-top", (viewportHeight-$("#title").outerHeight()) * 0.25);
    $("#title").css("margin-bottom", (viewportHeight-$("#title").outerHeight()) * 0.65);
  });


  // On Scroll
  var lastScrollTop = Number.MAX_VALUE;
  $(window).on("scroll", function (event) {
    // Popover
    $('#btn-heart').popover('hide');
    // Toggle Navbar/Dropdown
    var curScrollTop = $(window).scrollTop();
    if(curScrollTop > lastScrollTop) {
      $(".navbar").addClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
      $('.navbar').removeClass("shadow-lg");
      $("#navbarDropdown").dropdown('hide');
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
    // Slide In
    let tags = ['.about', '.project', '.contact']
    tags.forEach(add_slide_in)
    title_slide(true, 0);
  });


  // On Click
    // GitHub Button
  $("#btn-github").on("click", function() {
    window.open('https://github.com/jma8774', '_blank');
  });
    // Resume Button
  $(".btn-resume").on("click", function() {
    window.open('resume.pdf', '_blank');
  });
    // Proceed Button
  $("#btn-proceed").on("click", function() {
    $('html,body').animate({scrollTop: $(".about").offset().top}, 250);
  });
    // Nav-About
  $(".nav-about").on("click", function() {
    $('html,body').animate({scrollTop: $(".about").offset().top}, 250);
  });
    // Nav-Project
  $(".nav-project").on("click", function() {
    $('html,body').animate({scrollTop: $(".project").offset().top}, 250);
  });
    // Nav-Contact
  $(".nav-contact").on("click", function() {
    $('html,body').animate({scrollTop: $(".contact").offset().top}, 250);
  });

  // On Mouse Hover
    // Rotate Arrow
  $("#btn-proceed").mouseover(function() {
    $(".arrow-rotate").css("transform", "rotate(90deg)");
  });
  $("#btn-proceed").mouseleave(function() {
    $(".arrow-rotate").css("transform", "rotate(0deg)");
  });
    // Profile Picture
  $("#profile-pic").mouseover(function() {
    $("#profile-pic").css("transform", "scale(1.35)");
  });
  $("#profile-pic").mouseleave(function() {
    $("#profile-pic").css("transform", "scale(1)");
  });
});


// Enable popovers and tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(function () {
  $('[data-toggle="popover"]').popover()
})


  