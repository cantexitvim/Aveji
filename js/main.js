$(function () {

    $(".scroll-link").on('click', function (e) {
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 700)
        $('.header__menu').toggleClass('header__menu--active')
        $('.burger').toggleClass('burger--active')
        $('.overlay').toggleClass('overlay--active')
    })

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__menu').toggleClass('header__menu--active')
        $('.overlay').toggleClass('overlay--active')
    })

})