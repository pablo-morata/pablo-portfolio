$('.full-lengh-portraits').click(function(){
    $('.img').removeClass(['show-big','hide'])

    $('.toggle').addClass('hide')
    $('.full-lengh-portraits-imgs').removeClass('hide').addClass('show');
})
$('.portraits').click(function(){
    $('.img').removeClass(['show-big','hide'])
    $('.toggle').addClass('hide')
    $('.portraits-imgs').removeClass('hide').addClass('show');
})
$('.contact').click(function(){
    $('.img').removeClass(['show-big','hide'])
    $('.toggle').addClass('hide')
    $('.contact-info').removeClass('hide').addClass('show');
})
$('.img').click(function(){
    $('.img').removeClass('show-big').addClass('hide')
    $(this).removeClass('hide').addClass('show-big');
})

