$(document).ready(function () {
  //toggle button
  $('.btn').click(function () {
    $('.primary-links').slideToggle(3000)
    $('.btn').toggleClass('change')
  })

  //smooth scroll
  $('.primary-links a').click(function (link) {
    link.preventDefault()

    let target = $(this).attr('href')
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        3000
      )
  })

  $('.secondary-links a').click(function (link) {
    link.preventDefault()

    let target = $(this).attr('href')
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        3000
      )
  })

  //owl climb
  $('.history-img-slider').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  })
})
