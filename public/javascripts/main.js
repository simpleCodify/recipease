$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
});

$('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
});