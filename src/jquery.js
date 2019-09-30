$(document).ready(function() {
  // init
  $('#github').fadeOut();
  $('#discord').fadeOut();
  $('#gmail').fadeOut();
  $('#outlook').fadeOut();
  $('#youtube').fadeOut();
  highlightNav();

  if (screen.width <= 699) {
    alert("It seems like you're on a mobile phone :)\nPlease use a web browser like Chrome instead, thanks!");
  }

  // highlight navbar on scroll
  $(window).scroll(function() {
    highlightNav();
  });

  // highlight navbar on hover
  $('.nava').hover(
    function() {
      $(this).css('color', '#9e81c5');
      $(this).css('font-weight', 'bold');
    },
    function() {
      $(this).css('color', '#ffffff');
      $(this).css('font-weight', 'none');
    }
  );

});

function highlightNav() {
  var scrollMax = $(document).height() - $(window).height();
  $('.nava').css('color', '#ffffff');
  if ($(window).scrollTop() < scrollMax * 0.1) {
    $('#a-home').css('color', '#8A2BE2');
    $('#a-home').css('font-weight', 'bold');
  } else if ($(window).scrollTop() >= scrollMax * 0.1 && $(window).scrollTop() < scrollMax * 0.275) {
    $('#a-intro').css('color', '#8A2BE2');
    $('#a-intro').css('font-weight', 'bold');
  } else if ($(window).scrollTop() >= scrollMax * 0.275 && $(window).scrollTop() < scrollMax * 0.4225) {
    $('#a-resume').css('color', '#8A2BE2');
    $('#a-resume').css('font-weight', 'bold');
  } else if ($(window).scrollTop() >= scrollMax * 0.4225 && $(window).scrollTop() < scrollMax * 0.53) {
    $('#a-projects').css('color', '#8A2BE2');
    $('#a-projects').css('font-weight', 'bold');
  } else if ($(window).scrollTop() >= scrollMax * 0.53 && $(window).scrollTop() < scrollMax * 0.92) {
    $('#a-game').css('color', '#8A2BE2');
    $('#a-game').css('font-weight', 'bold');
  } else {
    $('#a-contact').css('color', '#8A2BE2');
    $('#a-contact').css('font-weight', 'bold');
  }
}

function copy(text, id) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  id = '#' + id;
  $(id).fadeIn(1000);
  $(id).fadeOut(2500);
}
