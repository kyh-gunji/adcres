$(function() {
    $('.js-faq__answer').hide();
    $('.js-faq__item').click(function() {
        if($(this).hasClass('open')) {
            $(this).children('.js-faq__answer').stop().slideUp();
            $(this).removeClass('open');
            $(this).children().children().children('span:first-of-type').css("transform", "rotate(45deg)");
            $(this).children().children().children('span:nth-of-type(2)').css("transform", "rotate(135deg)");
        } else {
            $(this).children('.js-faq__answer').stop().slideDown();
            $(this).addClass('open');
            $(this).children().children().children('span:first-of-type').css("transform", "rotate(-45deg)");
            $(this).children().children().children('span:nth-of-type(2)').css("transform", "rotate(-135deg)");
        }
    });
});