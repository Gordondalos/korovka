$(document).ready(function () {

// высота страницы для беграунда
    var page_h= $(window).height();
    $('header').css('height', page_h);


    //menu drop
    $('.app').click(function(e){
        e.preventDefault();
        $(this).toggleClass('blak_nav');
        $('.app i').toggleClass('blak_nav');
        $('.drop_menu').slideToggle('fast');

    });


    $('.down').click(function(e){
        e.preventDefault();
        $(this).toggleClass('blak_nav');
        $('.down i').toggleClass('blak_nav');
        $('.drop_menu_down').slideToggle('fast');

    });


    // поиск верхний и нижний

    $('.apps').click(function(e){
        e.preventDefault();
        $('.search_form').slideToggle('fast',function(){
                var i = $('.apps i').hasClass('fa-close');
                if(!i){
                    $('.apps i').remove();
                    $('.apps').prepend("<i class='fa fa-close'></i>");
                    $('.apps i').css('color', 'black');

                }else{
                    $('.apps i').remove();
                    $('.apps').prepend("<i class='fa fa-search'></i>");
                }
            });
            $('.apps').toggleClass('blak_nav');
            $('.apps i').toggleClass('blak_nav');

    });


    $('.downs').click(function(e){
        e.preventDefault();
        $('.search_form_down').slideToggle('fast',function(){
            var i = $('.downs i').hasClass('fa-close');
            if(!i){
                $('.downs i').remove();
                $('.downs').prepend("<i class='fa fa-close'></i>");
                $('.downs i').css('color', 'black');

            }else{
                $('.downs i').remove();
                $('.downs').prepend("<i class='fa fa-search'></i>");
            }
        });
        $('.downs').toggleClass('blak_nav');
        $('.downs i').toggleClass('blak_nav');

    });



    // выезжание итемок
      $(".items").hover(function () {
        var slide = $(this).attr('id');
        $("." + slide).slideToggle("normal");
        return false;
    });


});



