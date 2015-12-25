$(document).ready(function () {






    // поиск верхний и нижний  и для маленького меню

    $('.apps_sm').click(function(e){
        e.preventDefault();
        $('.search_form_up').slideToggle('fast',function(){
            var text = $('.apps_sm i').text();
            if(text === "A"){
                $('.apps_sm i').text("C");
            }else{
                $('.apps_sm i').text("A");
            }

        });
        $(this).toggleClass('blak_nav');
    });



    $('.apps').click(function(e){
        e.preventDefault();
        $('.search_form').slideToggle('fast',function(){
            var text = $('.apps i').text();
            if(text === "A"){
                $('.apps i').text("C");
            }else{
                $('.apps i').text("A");
            }
        });
        $(this).toggleClass('blak_nav');
    });




    $('.downs').click(function(e){
        e.preventDefault();
        $('.search_form_down').slideToggle('fast',function(){
            var text = $('.downs i').text();
            if(text === "A"){
                $('.downs i').text("C");
            }else{
                $('.downs i').text("A");
            }
        });

    });


    $('.drop_nav i').click(function(e){
        e.preventDefault();
        var text = $(this).text();

        if(text==="B" || text ==="A"){
            $(this).text("C");
        }else{
              $(this).text("B");


        }

        //alert(text);
    });





// высота страницы для беграунда
    var page_h= $(window).height()+20;
    $('.header').css('height', page_h);

    $('#button_down').click(function(e){
        e.preventDefault();
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
                posTop = posTop;
                $('.drop_menu_large').css("margin-top",posTop);

            }else{
                $('.drop_menu_large').css("margin-top","0");
            }

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


    // стикер для горизонтального меню
    $("#sticker").sticky({topSpacing:0});

    // выпадение меню на больших экранах селективно к главной странице

    $('.down').click(function(e){
        e.preventDefault();
        var main_page = $("#sticker").parent().parent().hasClass("dubble_menu");

        if(!main_page){
            $(this).toggleClass('blak_nav');
            $('.down i').toggleClass('blak_nav');
            $('.drop_menu_down').slideToggle('fast');
            var left_position_navbar = $(this).position().left;
            var top_position_navbar = $(this).position().top;
            var width_navbar = $(this).width();
            var heigth_navbar = $(this).height();
            var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            $(".drop_menu_down").offset({top:posTop+heigth_navbar, left:left_position_navbar-167});
        }else{
            $('.down').toggleClass('blak_nav');
            $('.down i').toggleClass('blak_nav');
            $('.drop_menu_down').slideToggle('fast');

            var top_position_min = $("#sticker").parent().parent().position().top;
            var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;



            if(posTop < top_position_min){
                var top_position_navbar = top_position_min;
                var left_position_navbar = $(this).position().left;
                var heigth_navbar = $(this).height();
                $(".drop_menu_down").offset({top:top_position_navbar+heigth_navbar, left:left_position_navbar-167});
            }else{
                var left_position_navbar = $(this).position().left;
                var heigth_navbar = $(this).height();
                $(".drop_menu_down").offset({top:posTop+heigth_navbar, left:left_position_navbar-167});
            }
        }



    });



    window.onscroll = function() {

        var top_position_min = $("#sticker").parent().parent().position().top;
        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var heigth_navbar = $('.down').height();
        var left_position_navbar = $('.down').position().left;
        console.log(posTop);
        if(posTop < top_position_min){
            $(".drop_menu_down").offset({top:top_position_min+heigth_navbar, left:left_position_navbar-167});
        }else{
            $(".drop_menu_down").offset({top:posTop+heigth_navbar, left:left_position_navbar-167});
        }

    };




    // выезжание итемок
    var page_w= $(window).width();
    if(page_w>1022){
        $(".items").hover(function () {
            var slide = $(this).attr('id');
            $("." + slide).slideToggle("normal");
            return false;
        });

    }


    function browserDetectJS() {
        var
            browser = new Array();

//Opera
        if (window.opera) {
            browser[0] = "Opera";
            browser[1] = window.opera.version();
        }
        else
//Chrome	
        if (window.chrome) {
            browser[0] = "Chrome";
        }
        else
//Firefox
        if (window.sidebar) {
            browser[0] = "Firefox";
        }
        else
//Safari 
        if ((!window.external)&&(browser[0]!=="Opera")) {
            browser[0] = "Safari";
        }
        else
//IE
        if (window.ActiveXObject) {
            browser[0] = "MSIE";
            if (window.navigator.userProfile) browser[1] = "6";
            else
            if (window.Storage) browser[1] = "8";
            else
            if ((!window.Storage)&&(!window.navigator.userProfile)) browser[1] = "7";
            else browser[1] = "Unknown";
        }

        if (!browser) return(false);
        else return(browser);
    }
    
    
    var br = browserDetectJS();
    //console.log(br[0]);
    //console.log(br[1]);

    if(br[1]=="8" || br[1]=="9"){

        $('.item_block__wrap').css( "background-size", "cover" );
        $('.item_block__wrap1').css( "background-size", "cover" );
        $('.item_block__wrap3').css( "background-size", "cover" );
        $('.item_block__wrap4').css( "background-size", "cover" );
        $('.item_block__wrap5').css( "background-size", "cover" );
    }


// открывашка партнеров
    $(".toogle-img-partners").click(function(){
        var id = $(this).attr('id');
        $("#"+id).toggleClass("rotate");
        $("."+id).slideToggle("fast", function(){
            $("."+id).attr("display","none");
        });
    });


    // Доработка клика по футеру на мобильных
    $('.panel-title span').click(function(){
        $(this).parent().children("a").trigger('click');

    });



    $(".panel-title a").click(function(e){
        e.preventDefault();
        var triangle_variant = $(this).parent().children("span").hasClass("triangle_down");
        if(triangle_variant){
            $(this).parent().children("span").removeClass("triangle_down");
            $(this).parent().children("span").addClass("triangle_up");

        }else{
            $(this).parent().children("span").removeClass("triangle_up");
            $(this).parent().children("span").addClass("triangle_down");
        }
    });


});



