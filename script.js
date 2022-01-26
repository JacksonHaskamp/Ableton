
//Code Source:  https://codepen.io/marcelo2605/pen/BXQVOO

var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var stickybar = $('#secondary-links');
  setTimeout(function(){
    if (st > lastScrollTop){
      stickybar.addClass('hide');
    } else {
      stickybar.removeClass('hide');
    }
    lastScrollTop = st;
  }, 100);
});

