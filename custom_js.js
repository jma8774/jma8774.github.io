// Sliding Helper Functions
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
function add_slide_in(tag, idx) {
  $(tag).each(function (i, el) {
    if ($(el).isInViewport()) {
      setTimeout(function () {
        $(el).addClass("slide-up");
      }, 100 * i);
    }
  });
}
// function add_border_anim() {
//   tags = ["#about", "#project", "#contact"];
//   $(tags).each(function(i, el) {
//     if($(el + " > h1").isInViewport()) {
//       $(el + " > h1").addClass("border-slide");
//     }
//   });
// }
function title_slide(isScroll, offset) {
  var delay = 1100;
  if (isScroll) delay = 500;
  $(".title-anim").each(function (i, el) {
    setTimeout(function () {
      if ($(el).isInViewport()) $(el).addClass("title-slide-up");
    }, delay + offset + 200 * i);
  });
}
function navbar_slide() {
  $(".left-nav-anim").each(function (i, el) {
    setTimeout(function () {
      $(el).addClass("slide-down");
    }, 150 * i);
  });
  $(".right-nav-anim").each(function (i, el) {
    setTimeout(function () {
      $(el).addClass("slide-down");
    }, 300 + 150 * i);
  });
  setTimeout(function () {
    $(".mobile-right-nav-anim").addClass("slide-down");
  }, 300);
}

// Copy to Clipboard
function copyToClipboard(element, attr) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).attr(attr)).select();
  document.execCommand("copy");
  $temp.remove();
}

// Document.Ready()
jQuery(function () {
  // Initial
  // Detect Mobile
  var isMobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }
  // Viewport
  viewportHeight = $(window).height();
  $("#title").css(
    "margin-top",
    (viewportHeight - $("#title").outerHeight()) * 0.25
  );
  $("#title").css(
    "margin-bottom",
    (viewportHeight - $("#title").outerHeight()) * 0.65
  );
  // Determine Mobile/Desktop Navbar
  if ($(window).width() < 800 || isMobile) {
    $(".desktop-nav").addClass("d-none");
    $(".mobile-nav").removeClass("d-none");
  }
  // Slide In
  let tags = [".about", ".project", ".contact"];
  tags.forEach(add_slide_in);
  // add_border_anim();
  navbar_slide();
  if ($(window).width() < 800 || isMobile) title_slide(false, 0);
  else {
    title_slide(false, 450);
  }
  // Margin of Sections
  $("#about").css("margin-bottom", Math.min(viewportHeight * 0.5, 400));
  $("#project").css("margin-bottom", Math.min(viewportHeight * 0.5, 400));
  $("#contact").css("margin-bottom", Math.min(viewportHeight * 0.5, 400));

  // On Resize
  $(window).on("resize", function () {
    // Determine Mobile/Desktop Navbar
    if ($(window).width() < 800 || isMobile) {
      $(".desktop-nav").addClass("d-none");
      $(".mobile-nav").removeClass("d-none");
    } else {
      $(".desktop-nav").removeClass("d-none");
      $(".mobile-nav").addClass("d-none");
    }
    // Margin/Padding of Title
    viewportHeight = $(window).height();
    $("#title").css(
      "margin-top",
      (viewportHeight - $("#title").outerHeight()) * 0.25
    );
    $("#title").css(
      "margin-bottom",
      (viewportHeight - $("#title").outerHeight()) * 0.65
    );
    // Margin of Sections
    $("#about").css("margin-bottom", Math.min(viewportHeight * 0.5, 400));
    $("#project").css("margin-bottom", Math.min(viewportHeight * 0.5, 400));
    $("#contact").css("margin-bottom", Math.min(viewportHeight * 0.5, 400));
  });

  // On Scroll
  var lastScrollTop = Number.MAX_VALUE;
  $(window).on("scroll", function (event) {
    // Popover
    $("#btn-heart").popover("hide");
    $(".hover-purple-icons").each(function (i, el) {
      $(el).popover("hide");
    });
    // Toggle Navbar/Dropdown
    var curScrollTop = $(window).scrollTop();
    if (curScrollTop > lastScrollTop) {
      $(".navbar").addClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
      $(".navbar").removeClass("shadow-lg");
      $("#navbarDropdown").dropdown("hide");
    } else {
      $(".navbar").addClass("nav-trans-in");
      $(".navbar").removeClass("nav-trans-out");
      $(".navbar").addClass("shadow-lg");
    }
    if (curScrollTop <= 50) {
      $(".navbar").removeClass("shadow-lg");
      $(".navbar").removeClass("nav-trans-out");
      $(".navbar").removeClass("nav-trans-in");
    }
    lastScrollTop = curScrollTop;
    // Slide In
    let tags = [".about", ".project", ".contact"];
    tags.forEach(add_slide_in);
    // add_border_anim();
    title_slide(true, 0);
  });

  // On Click
  // GitHub Button
  $("#btn-github").on("click", function () {
    window.open("https://github.com/jma8774", "_blank");
  });
  // Resume Button
  $(".btn-resume").on("click", function () {
    window.open("resume.pdf", "_blank");
  });
  // Proceed Button
  $("#btn-proceed").on("click", function () {
    $("html,body").animate(
      { scrollTop: $(".about").offset().top - viewportHeight * 0.2 },
      250
    );
  });

  // Snackies Collapse Button
  $("#btn-snackies-collapse").on("click", function () {
    var classes = $("#snackies-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#snackies-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#snackies-collapse").addClass("d-inline");
      $("#snackies-collapse").removeClass("d-none");
    } else {
      $("#snackies-collapse").addClass("d-none");
      $("#snackies-collapse").removeClass("d-inline");
    }
  });
  // Snackies GH Button
  $("#btn-snackies-gh").on("click", function () {
    window.open("https://github.com/jma8774/Snackies", "_blank");
  });
  // Snackies Release Button
  $("#btn-snackies-release").on("click", function () {
    window.open("https://snackies.xyz/", "_blank");
  });

  // Pathfinding Collapse Button
  $("#btn-pathfinding-collapse").on("click", function () {
    var classes = $("#pathfinding-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#pathfinding-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#pathfinding-collapse").addClass("d-inline");
      $("#pathfinding-collapse").removeClass("d-none");
    } else {
      $("#pathfinding-collapse").addClass("d-none");
      $("#pathfinding-collapse").removeClass("d-inline");
    }
  });
  // Pathfinding GH Button
  $("#btn-pathfinding-gh").on("click", function () {
    window.open(
      "https://github.com/jma8774/Pathfinding-Visualization",
      "_blank"
    );
  });
  // Pathfinding Release Button
  $("#btn-pathfinding-release").on("click", function () {
    window.open(
      "https://www.jiamingma.me/Pathfinding-Visualization/",
      "_blank"
    );
  });

  // Crypto Collapse Button
  $("#btn-crypto-collapse").on("click", function () {
    var classes = $("#crypto-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#crypto-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#crypto-collapse").addClass("d-inline");
      $("#crypto-collapse").removeClass("d-none");
    } else {
      $("#crypto-collapse").addClass("d-none");
      $("#crypto-collapse").removeClass("d-inline");
    }
  });
  // Crypto GH Button
  $("#btn-crypto-gh").on("click", function () {
    window.open("https://github.com/jma8774/Slot-Machine-Crypto", "_blank");
  });
  // Crypto Release Button
  $("#btn-crypto-release").on("click", function () {
    window.open("https://crypto-slot-machine.herokuapp.com/", "_blank");
  });
  // MTA Collapse Button
  $("#btn-mta-collapse").on("click", function () {
    var classes = $("#mta-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#mta-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#mta-collapse").addClass("d-inline");
      $("#mta-collapse").removeClass("d-none");
    } else {
      $("#mta-collapse").addClass("d-none");
      $("#mta-collapse").removeClass("d-inline");
    }
  });
  // MTA GH Button
  $("#btn-mta-gh").on("click", function () {
    window.open("https://github.com/jma8774/MTA-Tracker", "_blank");
  });
  // MTA Release Button
  $("#btn-mta-release").on("click", function () {
    window.open("https://simplemta.xyz", "_blank");
  });
  // Valorant Collapse Button
  $("#btn-valorant-collapse").on("click", function () {
    var classes = $("#valorant-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#valorant-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#valorant-collapse").addClass("d-inline");
      $("#valorant-collapse").removeClass("d-none");
    } else {
      $("#valorant-collapse").addClass("d-none");
      $("#valorant-collapse").removeClass("d-inline");
    }
  });
  // Valorant GH Button
  $("#btn-valorant-gh").on("click", function () {
    window.open("https://github.com/jma8774/Valorant-Agents-Website", "_blank");
  });
  // Valorant Release Button
  $("#btn-valorant-release").on("click", function () {
    window.open("https://jma8774.github.io/Valorant-Agents-Website/", "_blank");
  });
  // Wordle Collapse Button
  $("#btn-wordle-collapse").on("click", function () {
    var classes = $("#wordle-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#wordle-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#wordle-collapse").addClass("d-inline");
      $("#wordle-collapse").removeClass("d-none");
    } else {
      $("#wordle-collapse").addClass("d-none");
      $("#wordle-collapse").removeClass("d-inline");
    }
  });
  // Wordle GH Button
  $("#btn-wordle-gh").on("click", function () {
    window.open("https://github.com/jma8774/Wordle-TypeScript", "_blank");
  });
  // Wordle Release Button
  $("#btn-wordle-release").on("click", function () {
    window.open("https://www.jiamingma.me/Wordle-TypeScript/", "_blank");
  });
  // Smallify Collapse Button
  $("#btn-smallify-collapse").on("click", function () {
    var classes = $("#smallify-collapse")[0].classList;
    if (classes[0] == undefined) {
      $("#smallify-collapse").addClass("d-none");
      let tags = [".about", ".project", ".contact"];
      tags.forEach(add_slide_in);
    } else if (classes[0] == "d-none") {
      $("#smallify-collapse").addClass("d-inline");
      $("#smallify-collapse").removeClass("d-none");
    } else {
      $("#smallify-collapse").addClass("d-none");
      $("#smallify-collapse").removeClass("d-inline");
    }
  });
  // Smallify GH Button
  $("#btn-smallify-gh").on("click", function () {
    window.open("https://github.com/jma8774/Shortener", "_blank");
  });

  // Smallify Release Button
  $("#btn-smallify-release").on("click", function () {
    window.open("https://url-shortener-fun.herokuapp.com/", "_blank");
  });

  // Coinflip GH Button
  $("#btn-coinflip-gh").on("click", function () {
    window.open("https://github.com/jma8774/Coin-Flip", "_blank");
  });
  // Stock GH Button
  $("#btn-stock-gh").on("click", function () {
    window.open("https://github.com/Chuezhang2278/Stock_prediction", "_blank");
  });
  // Foodies GH Button
  $("#btn-foodies-gh").on("click", function () {
    window.open("https://github.com/Chuezhang2278/Foodies", "_blank");
  });
  // Mortgage GH Button
  $("#btn-mortgage-gh").on("click", function () {
    window.open("https://github.com/jma8774/Mortgage-Calculator", "_blank");
  });
  // Contact GH Button
  $("#btn-contact-gh").on("click", function () {
    window.open("https://github.com/jma8774/Contact-Application", "_blank");
  });
  // Mushroom GH Button
  $("#btn-mushroom-gh").on("click", function () {
    window.open("https://github.com/billyluy/platformerProject", "_blank");
  });
  // Nav-About
  $(".nav-about").on("click", function () {
    $("html,body").animate(
      { scrollTop: $(".about").offset().top - viewportHeight * 0.2 },
      250
    );
  });
  // Nav-Project
  $(".nav-project").on("click", function () {
    $("html,body").animate(
      { scrollTop: $(".project").offset().top - viewportHeight * 0.2 },
      250
    );
  });
  // Nav-Contact
  $(".nav-contact").on("click", function () {
    $("html,body").animate(
      { scrollTop: $(".contact").offset().top - viewportHeight * 0.2 },
      250
    );
  });
  // Contact Button
  $("#btn-contact").on("click", function () {
    $("#btn-contact").addClass("d-none");
    $("#contact-list").addClass("slide-up");
    $("#contact-list").addClass("d-inline-block");
    $("#contact-list").removeClass("d-none");
  });
  $(".contact-icons").each(function (i, el) {
    $(el).on("click", function () {
      copyToClipboard(el, "value");
    });
  });

  // On Mouse Hover
  // Rotate Arrow
  $("#btn-proceed").mouseover(function () {
    $(".arrow-rotate").css("transform", "rotate(90deg)");
  });
  $("#btn-proceed").mouseleave(function () {
    $(".arrow-rotate").css("transform", "rotate(0deg)");
  });
  // Profile Picture
  $("#profile-pic").mouseover(function () {
    $("#profile-pic").css("transform", "scale(1.3)");
  });
  $("#profile-pic").mouseleave(function () {
    $("#profile-pic").css("transform", "scale(1)");
  });

  // Popover Event
  $(".contact-icons").on("show.bs.popover", function () {
    $(".hover-purple-icons").each(function (i, el) {
      $(el).popover("hide");
    });
  });
});

// Enable popovers and tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(function () {
  $('[data-toggle="popover"]').popover();
});
