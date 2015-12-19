$(document).ready(function () {

// высота страницы для беграунда
    var page_h= $(window).height()+20;
    $('.header').css('height', page_h);

    $('#button_down').click(function(e){
        e.preventDefault()
        var destination = page_h;
        $('body,html').animate({scrollTop: destination}, 1000, 'linear');
    });


    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }

    //menu drop large
    $('.drop_menu_l').click(function(e){
        e.preventDefault();
        var page_h= $(window).height();
        if(page_h<714){
            $('.drop_menu_large').css("position","absolute");
            // определим высоту по вертикали
            var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var drop_menu_large = $('.drop_menu_large').scrollTop();

            if(posTop>drop_menu_large){
                posTop = posTop-79;
                $('.drop_menu_large').css("margin-top",posTop);
                //var i = $('.drop_menu_l i').hasClass('fa-close');
                //if(!i){
                //    $('.drop_menu_l i').remove();
                //    $('.drop_menu_l').prepend("<i class='fa fa-close'></i>");
                //    $('.drop_menu_l i').css('color', 'black');
                //
                //}else{
                //    $('.drop_menu_l i').remove();
                //    $('.drop_menu_l').prepend("<i class='fa fa-bars'></i>");
                //}
            }else{
                $('.drop_menu_large').css("margin-top","-79px");
            }

          //  console.log(drop_menu_large);
        

        }
        $(this).toggleClass('blak_nav');
        $('.drop_menu_l i').toggleClass('blak_nav');
        $('.drop_menu_large').slideToggle('fast');

    });


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


    // поиск верхний и нижний  и для маленького меню

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


    $('.apps_sm').click(function(e){
        e.preventDefault();
        $('.search_form_up').slideToggle('fast',function(){
            var i = $('.apps_sm i').hasClass('fa-close');
            if(!i){
                $('.apps_sm i').remove();
                $('.apps_sm').prepend("<i class='fa fa-close'></i>");
                $('.apps_sm i').css('color', 'black');

            }else{
                $('.apps_sm i').remove();
                $('.apps_sm').prepend("<i class='fa fa-search'></i>");
            }
        });
        $('.apps_sm').toggleClass('blak_nav');
        $('.apps_sm i').toggleClass('blak_nav');

    });



    // выезжание итемок
      $(".items").hover(function () {
        var slide = $(this).attr('id');
        $("." + slide).slideToggle("normal");
        return false;
    });


});



