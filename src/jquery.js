$(document).ready(function() {
  $('#discord').fadeOut();
  $('#gmail').fadeOut();
  $('#outlook').fadeOut();
  alert('again');

  if (screen.width <= 699) {
    alert("on mobile");
  }
});


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


$(document).ready(function() {
  $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var height = $(window).height();
      $(".fade-scroll").css({"opacity": ((height-scrollTop) / height)});
  });
});
