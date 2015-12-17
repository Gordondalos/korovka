$(document).ready(function () {

// высота страницы для беграунда
    var page_h= $(window).height();
    $('header').css('height', page_h);


    //menu drop
    $('.drop_nav').click(function(){
        $('.drop_nav').toggleClass('blak_nav');
        $('.drop_nav i').toggleClass('blak_nav');
        $('.drop_menu').slideToggle('fast');

    });



// search
    $('.search').click(function(){
        $('.search_form').slideToggle('fast',function(){
            var i = $('.search i').hasClass('fa-close');
            if(!i){
                $('.search i').remove();
                $('.search').prepend("<i class='fa fa-close'></i>");
                $('.search i').css('color', 'black');

            }else{
                $('.search i').remove();
                $('.search').prepend("<i class='fa fa-search'></i>");

            }


        });
        $('.search').toggleClass('blak_nav');





        $('.search i').toggleClass('blak_nav');

    });





});



