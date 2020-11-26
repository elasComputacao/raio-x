$(window).on('scroll', function (e) {
    $('.navbar').toggleClass('fixed-top', $(window).scrollTop() < 600);
  })