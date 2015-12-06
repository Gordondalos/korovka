$(document).ready(function () {
    //прокрутка
    $(function () {
        $('.curtains').curtain({
            scrollSpeed: 300,
            controls: '.menu',
            curtainLinks: '.curtain-links',
            nextSlide: function () {
                console.log("ok");
            }
        });
    });

    // выезд слайда

    $(document).ready(function () {
        $(".clicks").hover(function () {
            var slide = $(this).attr('id');
            $("." + slide).slideToggle("normal");
            return false;
        });
    });

    ////Обработка нажатия на кнопку "Вниз"
    $(".scroll_to").click(function (e) {
        e.preventDefault();
        var elementClick = $(this).attr("href");


        console.log(elementClick);
        var destination = $('.' + elementClick).offset().top - 70;
        console.log(destination);
        $('body,html').animate({scrollTop: destination}, 2000);

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
// появление поиска
   $('li.search2').hover(function(){
$('#search_form').toggle(function(){
    $('#search_form').css("opacity","1");

   setTimeout(myfunc, 5000);

   })
   });

    function myfunc(){
        if (!$('#search_form input').is(":focus")) {
            $('#search_form').css("opacity","0");
        }
    }




    // появление поиска
    $('li.search2').hover(function(){
        $('#search_form2').toggle(function(){
            $('#search_form2').css("opacity","1");

            setTimeout(myfunc2, 5000);

        })
    });

    function myfunc2(){
        if (!$('#search_form2 input').is(":focus")) {
            $('#search_form2').css("opacity","0");
        }
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
