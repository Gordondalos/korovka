$(document).ready(function () {

 // растягивание всей формы в ширину
    var ww= $(window).width();
    //$('.searchbardiv').css('width', ww);




    var page_h= $(window).height();
    //alert(page_h);
    $('header').css('height', page_h);


    // появление меню на мобильных устройствах во всю ширину
    $('.hidden-drop-menu-button').click(function(){
        var page_w = $("html").width();
        if(page_w < "480"){

            $('.hidden-drop-menu').slideToggle('fast');

        }else{
            $('.hidden-drop-menu').css("display", "none");

        }

    });


 //приклеивание меню
 
 
    $("#sticker").sticky({topSpacing:20});
	 //приклеивание меню
	
    $(".toogle-img-partners").click(function(){
        var id = $(this).attr('id');
        $("#"+id).toggleClass("rotate");
       $("."+id).slideToggle("fast", function(){
           $("."+id).attr("display","none");
       });
    });


    $('#buttonsearch').click(function(){
        $('#formsearch').slideToggle( "fast",function(){
        //    $( '#content' ).toggleClass( "moremargin" );
        } );
        $('#searchbox').focus();
        $('.openclosesearch').toggle();
    });

    $('#buttonsearch1').click(function(){
        $('#formsearch1').slideToggle( "fast",function(){
       //     $( '#content' ).toggleClass( "moremargin" );
        } );
        $('.openclosesearch1').toggle();
        $('#searchbox1').focus();

    });

    $('#buttonsearch3').click(function(){
        $('#formsearch3').slideToggle( "fast",function(){
            $( '#content' ).toggleClass( "moremargin" );
        } );
        $('.openclosesearch3').toggle();
        $('#searchbox3').focus();
    });


    // выезд слайда

    $(document).ready(function () {
        $(".clicks").hover(function () {
            var slide = $(this).attr('id');
            $("." + slide).slideToggle("normal");
            return false;
        });
    });




    $(".scroll_to").click(function (e) {
        e.preventDefault();
        var page_hh = $(window).height();

        var destination = page_hh;
        $('body,html').animate({scrollTop: destination}, 1000, 'linear');

        return false;
    });


// манипуляции с итемками при изменении размера
    var winwidth = $(window).width();
    if (winwidth < 480) {
        $('p.item1').css("display", "block !important");
        $('p.item2').css("display", "block !important");

        $('.text_item > p').removeClass();
        $('.down_item  p').remove();

    }


    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", (function () {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {

                $("#form").trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});

$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});


