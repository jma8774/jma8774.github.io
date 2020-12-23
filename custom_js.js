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

// Navbar
  // Navbar Scrolling Options
var dropdown_open = false;
var lastScrollTop = 0;
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

jQuery(function() {
  $("#navbarDropdown").on("click", function() {
    if(!dropdown_open) {
      dropdown_open = true;
    } else {
      dropdown_open = false;
    }
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

// Body
// function add_come_in(tag, idx) {
//   $(tag).each(function(i, el) {
//     if ($(el).visible()) {
//       setTimeout(function() { 
//         $(el).addClass("come-in");
//       }, 150 * i);
//     }
//   });
// }

function add_come_in(tag, idx) {
  $(tag).each(function(i, el) {
    setTimeout(function() { 
      $(el).addClass("come-in");
    }, 150 * i);
  });
}
  // Start At The Top and Animations
jQuery(function() {
  let tags = ['.navhover', '.part1', '.part2', '.part3', '.part4', '.part5']
  tags.forEach(add_come_in)
});

  // Body Scrolling Options
  jQuery(function() {
  $(window).on("scroll", function (event) {
    let tags = ['.part1', '.part2', '.part3', '.part4', '.part5']
    tags.forEach(add_come_in)
  });
});


  