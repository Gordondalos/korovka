$(document).ready(function () {


    $('i.fa-bars').click(function(){
        console.log($(this));
        $(this).toggleClass('fa-bars');
        $(this).toggleClass('fa-close')
    });




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

    if(br[1]=="8"){
        $('.cow').css( "background-size", "cover" );
    }


// открывашка партнеров
    $(".toogle-img-partners").click(function(){
        var id = $(this).attr('id');
        $("#"+id).toggleClass("rotate");
        $("."+id).slideToggle("fast", function(){
            $("."+id).attr("display","none");
        });
    });


});



