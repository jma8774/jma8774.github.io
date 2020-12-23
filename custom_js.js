// Detect Mobile
var isMobile = false;

jQuery(function() {
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

// Navbar #################################################################################
  // Navbar Scrolling Options
var lastScrollTop = Number.MAX_VALUE;
jQuery(function() {
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
  });
});
  // Navbar Width Options
jQuery(function() {
  if($(window).width() < 800 || isMobile){
    $('.desktop-nav').addClass("d-none");
    $('.mobile-nav').removeClass("d-none");
  }
});
jQuery(function() {
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
jQuery(function() {
  $("#btn-github").on("click", function() {
    window.open('https://github.com/jma8774', '_blank');
  });
});
  // Resume Button
jQuery(function() {
  $(".btn-resume").on("click", function() {
    window.open('resume.pdf', '_blank');
  });
});

// Slide In #################################################################################
  // Check if element is visible in viewport
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
  // Given a tag, make them slide in order
function add_come_in(tag, idx) {
  $(tag).each(function(i, el) {
    if ($(el).isInViewport()) {
      setTimeout(function() { 
        $(el).addClass("come-in");
      }, 150 * i);
    }
  });
}
  // Initial Slide Ins
jQuery(function() {
  let tags = ['.left-nav-anim','.part1', '.part2', '.part3', '.part4', '.part5']
  // mobile right nav
  setTimeout(function() { 
    $('.mobile-right-nav-anim').addClass("come-in");
  }, 300);
  // desktop right nav
  $(".right-nav-anim").each(function(i, el) {
    setTimeout(function() { 
      $(el).addClass("come-in");
    }, 300 + (150 * i));
  });
  tags.forEach(add_come_in)
});
  // Scrolling Slide Ins
jQuery(function() {
  $(window).on("scroll", function (event) {
    let tags = ['.part1', '.part2', '.part3', '.part4', '.part5']
    tags.forEach(add_come_in)
  });
});


  