$(document).ready(function(){function e(){var e=new Array;return window.opera?(e[0]="Opera",e[1]=window.opera.version()):window.chrome?e[0]="Chrome":window.sidebar?e[0]="Firefox":window.external||"Opera"===e[0]?window.ActiveXObject&&(e[0]="MSIE",window.navigator.userProfile?e[1]="6":window.Storage?e[1]="8":window.Storage||window.navigator.userProfile?e[1]="Unknown":e[1]="7"):e[0]="Safari",e?e:!1}$(".apps_sm").click(function(e){e.preventDefault(),$(".search_form_up").slideToggle("fast",function(){var e=$(".apps_sm i").text();"A"===e?$(".apps_sm i").text("C"):$(".apps_sm i").text("A")}),$(this).toggleClass("blak_nav")}),$(".apps").click(function(e){e.preventDefault(),$(".search_form").slideToggle("fast",function(){var e=$(".apps i").text();"A"===e?$(".apps i").text("C"):$(".apps i").text("A")}),$(this).toggleClass("blak_nav")}),$(".downs").click(function(e){e.preventDefault(),$(".search_form_down").slideToggle("fast",function(){var e=$(".downs i").text();"A"===e?$(".downs i").text("C"):$(".downs i").text("A")})}),$(".drop_nav i").click(function(e){e.preventDefault();var t=$(this).text();"B"===t||"A"===t?$(this).text("C"):$(this).text("B")});var t=$(window).height()+20;$(".header").css("height",t),$("#button_down").click(function(e){e.preventDefault();var o=t;$("body,html").animate({scrollTop:o},1e3,"linear")}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$(".drop_menu_l").click(function(e){e.preventDefault();var t=$(window).height();if(714>t){$(".drop_menu_large").css("position","absolute");var o=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,n=$(".drop_menu_large").scrollTop();o>n?(o=o,$(".drop_menu_large").css("margin-top",o)):$(".drop_menu_large").css("margin-top","0")}$(this).toggleClass("blak_nav"),$(".drop_menu_l i").toggleClass("blak_nav"),$(".drop_menu_large").slideToggle("fast")}),$(".app").click(function(e){e.preventDefault(),$(this).toggleClass("blak_nav"),$(".app i").toggleClass("blak_nav"),$(".drop_menu").slideToggle("fast")}),$("#sticker").sticky({topSpacing:0}),$(".down").click(function(e){e.preventDefault();var t=$("#sticker").parent().parent().hasClass("dubble_menu");if(t){$(".down").toggleClass("blak_nav"),$(".down i").toggleClass("blak_nav"),$(".drop_menu_down").slideToggle("fast");var o=$("#sticker").parent().parent().position().top,n=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;if(o>n){var i=o,a=$(this).position().left,s=$(this).height();$(".drop_menu_down").offset({top:i+s,left:a-167})}else{var a=$(this).position().left,s=$(this).height();$(".drop_menu_down").offset({top:n+s,left:a-167})}}else{$(this).toggleClass("blak_nav"),$(".down i").toggleClass("blak_nav"),$(".drop_menu_down").slideToggle("fast");var a=$(this).position().left,i=$(this).position().top,s=($(this).width(),$(this).height()),n=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;$(".drop_menu_down").offset({top:n+s,left:a-167})}}),window.onscroll=function(){var e=$("#sticker").parent().parent().position().top,t=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,o=$(".down").height(),n=$(".down").position().left;e>t?($(".drop_menu_down").offset({top:e+o,left:n-167}),$(".search_form_down").offset({top:e+o})):($(".drop_menu_down").offset({top:t+o,left:n-167}),$(".search_form_down").offset({top:t+o}))};var o=$(window).width();o>1022&&$(".items").hover(function(){var e=$(this).attr("id");return $("."+e).slideToggle("normal"),!1});var n=e();("8"==n[1]||"9"==n[1])&&($(".item_block__wrap").css("background-size","cover"),$(".item_block__wrap1").css("background-size","cover"),$(".item_block__wrap3").css("background-size","cover"),$(".item_block__wrap4").css("background-size","cover"),$(".item_block__wrap5").css("background-size","cover")),$(".toogle-img-partners").click(function(){var e=$(this).attr("id");$("#"+e).toggleClass("rotate"),$("."+e).slideToggle("fast",function(){$("."+e).attr("display","none")})}),$(".panel-title span").click(function(){$(this).parent().children("a").trigger("click")}),$(".panel-title a").click(function(e){e.preventDefault();var t=$(this).parent().children("span").hasClass("triangle_down");t?($(this).parent().children("span").removeClass("triangle_down"),$(this).parent().children("span").addClass("triangle_up")):($(this).parent().children("span").removeClass("triangle_up"),$(this).parent().children("span").addClass("triangle_down"))})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJyb3dzZXJEZXRlY3RKUyIsImJyb3dzZXIiLCJBcnJheSIsIndpbmRvdyIsIm9wZXJhIiwidmVyc2lvbiIsImNocm9tZSIsInNpZGViYXIiLCJleHRlcm5hbCIsIkFjdGl2ZVhPYmplY3QiLCJuYXZpZ2F0b3IiLCJ1c2VyUHJvZmlsZSIsIlN0b3JhZ2UiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidGV4dCIsInRoaXMiLCJ0b2dnbGVDbGFzcyIsInBhZ2VfaCIsImhlaWdodCIsImNzcyIsImRlc3RpbmF0aW9uIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIk1vZGVybml6ciIsInN2ZyIsImF0dHIiLCJyZXBsYWNlIiwicG9zVG9wIiwidW5kZWZpbmVkIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImRyb3BfbWVudV9sYXJnZSIsInN0aWNreSIsInRvcFNwYWNpbmciLCJtYWluX3BhZ2UiLCJwYXJlbnQiLCJoYXNDbGFzcyIsInRvcF9wb3NpdGlvbl9taW4iLCJwb3NpdGlvbiIsInRvcCIsInRvcF9wb3NpdGlvbl9uYXZiYXIiLCJsZWZ0X3Bvc2l0aW9uX25hdmJhciIsImxlZnQiLCJoZWlndGhfbmF2YmFyIiwib2Zmc2V0Iiwid2lkdGgiLCJvbnNjcm9sbCIsInBhZ2VfdyIsImhvdmVyIiwic2xpZGUiLCJiciIsImlkIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidHJpYW5nbGVfdmFyaWFudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBK01kLFFBQVNDLEtBQ0wsR0FDSUMsR0FBVSxHQUFJQyxNQWtDbEIsT0EvQklDLFFBQU9DLE9BQ1BILEVBQVEsR0FBSyxRQUNiQSxFQUFRLEdBQUtFLE9BQU9DLE1BQU1DLFdBSTFCRixP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QW1CLFNBQ2hEekIsRUFBRSxzQkFBc0J5QixJQUFLLGtCQUFtQixVQUtwRHpCLEVBQUUsd0JBQXdCZ0IsTUFBTSxXQUM1QixHQUFJMkMsR0FBSzNELEVBQUVxQixNQUFNVSxLQUFLLEtBQ3RCL0IsR0FBRSxJQUFJMkQsR0FBSXJDLFlBQVksVUFDdEJ0QixFQUFFLElBQUkyRCxHQUFJeEMsWUFBWSxPQUFRLFdBQzFCbkIsRUFBRSxJQUFJMkQsR0FBSTVCLEtBQUssVUFBVSxZQU1qQy9CLEVBQUUscUJBQXFCZ0IsTUFBTSxXQUN6QmhCLEVBQUVxQixNQUFNc0IsU0FBU2lCLFNBQVMsS0FBS0MsUUFBUSxXQU0zQzdELEVBQUUsa0JBQWtCZ0IsTUFBTSxTQUFTQyxHQUMvQkEsRUFBRUMsZ0JBQ0YsSUFBSTRDLEdBQW1COUQsRUFBRXFCLE1BQU1zQixTQUFTaUIsU0FBUyxRQUFRaEIsU0FBUyxnQkFDL0RrQixJQUNDOUQsRUFBRXFCLE1BQU1zQixTQUFTaUIsU0FBUyxRQUFRRyxZQUFZLGlCQUM5Qy9ELEVBQUVxQixNQUFNc0IsU0FBU2lCLFNBQVMsUUFBUUksU0FBUyxpQkFHM0NoRSxFQUFFcUIsTUFBTXNCLFNBQVNpQixTQUFTLFFBQVFHLFlBQVksZUFDOUMvRCxFQUFFcUIsTUFBTXNCLFNBQVNpQixTQUFTLFFBQVFJLFNBQVMiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8g0L/QvtC40YHQuiDQstC10YDRhdC90LjQuSDQuCDQvdC40LbQvdC40LkgINC4INC00LvRjyDQvNCw0LvQtdC90YzQutC+0LPQviDQvNC10L3RjlxyXG5cclxuICAgICQoJy5hcHBzX3NtJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5zZWFyY2hfZm9ybV91cCcpLnNsaWRlVG9nZ2xlKCdmYXN0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQoJy5hcHBzX3NtIGknKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGlmKHRleHQgPT09IFwiQVwiKXtcclxuICAgICAgICAgICAgICAgICQoJy5hcHBzX3NtIGknKS50ZXh0KFwiQ1wiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwc19zbSBpJykudGV4dChcIkFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJCgnLmFwcHMnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnNlYXJjaF9mb3JtJykuc2xpZGVUb2dnbGUoJ2Zhc3QnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJCgnLmFwcHMgaScpLnRleHQoKTtcclxuICAgICAgICAgICAgaWYodGV4dCA9PT0gXCJBXCIpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmFwcHMgaScpLnRleHQoXCJDXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5hcHBzIGknKS50ZXh0KFwiQVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAkKCcuZG93bnMnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnNlYXJjaF9mb3JtX2Rvd24nKS5zbGlkZVRvZ2dsZSgnZmFzdCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSAkKCcuZG93bnMgaScpLnRleHQoKTtcclxuICAgICAgICAgICAgaWYodGV4dCA9PT0gXCJBXCIpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmRvd25zIGknKS50ZXh0KFwiQ1wiKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcuZG93bnMgaScpLnRleHQoXCJBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5kcm9wX25hdiBpJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XHJcblxyXG4gICAgICAgIGlmKHRleHQ9PT1cIkJcIiB8fCB0ZXh0ID09PVwiQVwiKXtcclxuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KFwiQ1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoXCJCXCIpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2FsZXJ0KHRleHQpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8g0LLRi9GB0L7RgtCwINGB0YLRgNCw0L3QuNGG0Ysg0LTQu9GPINCx0LXQs9GA0LDRg9C90LTQsFxyXG4gICAgdmFyIHBhZ2VfaD0gJCh3aW5kb3cpLmhlaWdodCgpKzIwO1xyXG4gICAgJCgnLmhlYWRlcicpLmNzcygnaGVpZ2h0JywgcGFnZV9oKTtcclxuXHJcbiAgICAkKCcjYnV0dG9uX2Rvd24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gcGFnZV9oO1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogZGVzdGluYXRpb259LCAxMDAwLCAnbGluZWFyJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9TVkcgRmFsbGJhY2tcclxuICAgIGlmICghTW9kZXJuaXpyLnN2Zykge1xyXG4gICAgICAgICQoXCJpbWdbc3JjKj0nc3ZnJ11cIikuYXR0cihcInNyY1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcIi5zdmdcIiwgXCIucG5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbWVudSBkcm9wIGxhcmdlXHJcbiAgICAkKCcuZHJvcF9tZW51X2wnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHBhZ2VfaD0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgIGlmKHBhZ2VfaDw3MTQpe1xyXG4gICAgICAgICAgICAkKCcuZHJvcF9tZW51X2xhcmdlJykuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpO1xyXG4gICAgICAgICAgICAvLyDQvtC/0YDQtdC00LXQu9C40Lwg0LLRi9GB0L7RgtGDINC/0L4g0LLQtdGA0YLQuNC60LDQu9C4XHJcbiAgICAgICAgICAgIHZhciBwb3NUb3AgPSAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB2YXIgZHJvcF9tZW51X2xhcmdlID0gJCgnLmRyb3BfbWVudV9sYXJnZScpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYocG9zVG9wPmRyb3BfbWVudV9sYXJnZSl7XHJcbiAgICAgICAgICAgICAgICBwb3NUb3AgPSBwb3NUb3A7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJvcF9tZW51X2xhcmdlJykuY3NzKFwibWFyZ2luLXRvcFwiLHBvc1RvcCk7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wX21lbnVfbGFyZ2UnKS5jc3MoXCJtYXJnaW4tdG9wXCIsXCIwXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgICAgICQoJy5kcm9wX21lbnVfbCBpJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgJCgnLmRyb3BfbWVudV9sYXJnZScpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vbWVudSBkcm9wXHJcbiAgICAkKCcuYXBwJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgJCgnLmFwcCBpJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgJCgnLmRyb3BfbWVudScpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8g0YHRgtC40LrQtdGAINC00LvRjyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtCz0L4g0LzQtdC90Y5cclxuICAgICQoXCIjc3RpY2tlclwiKS5zdGlja3koe3RvcFNwYWNpbmc6MH0pO1xyXG5cclxuICAgIC8vINCy0YvQv9Cw0LTQtdC90LjQtSDQvNC10L3RjiDQvdCwINCx0L7Qu9GM0YjQuNGFINGN0LrRgNCw0L3QsNGFINGB0LXQu9C10LrRgtC40LLQvdC+INC6INCz0LvQsNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0LVcclxuXHJcbiAgICAkKCcuZG93bicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbWFpbl9wYWdlID0gJChcIiNzdGlja2VyXCIpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwiZHViYmxlX21lbnVcIik7XHJcblxyXG4gICAgICAgIGlmKCFtYWluX3BhZ2Upe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgICAgICAgICAkKCcuZG93biBpJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgICAgICQoJy5kcm9wX21lbnVfZG93bicpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0X3Bvc2l0aW9uX25hdmJhciA9ICQodGhpcykucG9zaXRpb24oKS5sZWZ0O1xyXG4gICAgICAgICAgICB2YXIgdG9wX3Bvc2l0aW9uX25hdmJhciA9ICQodGhpcykucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aF9uYXZiYXIgPSAkKHRoaXMpLndpZHRoKCk7XHJcbiAgICAgICAgICAgIHZhciBoZWlndGhfbmF2YmFyID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgdmFyIHBvc1RvcCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgICQoXCIuZHJvcF9tZW51X2Rvd25cIikub2Zmc2V0KHt0b3A6cG9zVG9wK2hlaWd0aF9uYXZiYXIsIGxlZnQ6bGVmdF9wb3NpdGlvbl9uYXZiYXItMTY3fSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5kb3duJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgICAgICQoJy5kb3duIGknKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAgICAgJCgnLmRyb3BfbWVudV9kb3duJykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0b3BfcG9zaXRpb25fbWluID0gJChcIiNzdGlja2VyXCIpLnBhcmVudCgpLnBhcmVudCgpLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICB2YXIgcG9zVG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgICAgIGlmKHBvc1RvcCA8IHRvcF9wb3NpdGlvbl9taW4pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9wb3NpdGlvbl9uYXZiYXIgPSB0b3BfcG9zaXRpb25fbWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnRfcG9zaXRpb25fbmF2YmFyID0gJCh0aGlzKS5wb3NpdGlvbigpLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ3RoX25hdmJhciA9ICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmRyb3BfbWVudV9kb3duXCIpLm9mZnNldCh7dG9wOnRvcF9wb3NpdGlvbl9uYXZiYXIraGVpZ3RoX25hdmJhciwgbGVmdDpsZWZ0X3Bvc2l0aW9uX25hdmJhci0xNjd9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdF9wb3NpdGlvbl9uYXZiYXIgPSAkKHRoaXMpLnBvc2l0aW9uKCkubGVmdDtcclxuICAgICAgICAgICAgICAgIHZhciBoZWlndGhfbmF2YmFyID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICQoXCIuZHJvcF9tZW51X2Rvd25cIikub2Zmc2V0KHt0b3A6cG9zVG9wK2hlaWd0aF9uYXZiYXIsIGxlZnQ6bGVmdF9wb3NpdGlvbl9uYXZiYXItMTY3fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAvLyDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtSDQstGL0L/QsNC00LDRjtGJ0LjRhSDQv9GD0L3QutGC0L7QsiDQvNC10L3RjiDQv9C+INCy0LXRgNGC0LjQutCw0LvQuFxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRvcF9wb3NpdGlvbl9taW4gPSAkKFwiI3N0aWNrZXJcIikucGFyZW50KCkucGFyZW50KCkucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgdmFyIHBvc1RvcCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XHJcbiAgICAgICAgdmFyIGhlaWd0aF9uYXZiYXIgPSAkKCcuZG93bicpLmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBsZWZ0X3Bvc2l0aW9uX25hdmJhciA9ICQoJy5kb3duJykucG9zaXRpb24oKS5sZWZ0O1xyXG5cclxuICAgICAgICBpZihwb3NUb3AgPCB0b3BfcG9zaXRpb25fbWluKXtcclxuICAgICAgICAgICAgJChcIi5kcm9wX21lbnVfZG93blwiKS5vZmZzZXQoe3RvcDp0b3BfcG9zaXRpb25fbWluK2hlaWd0aF9uYXZiYXIsIGxlZnQ6bGVmdF9wb3NpdGlvbl9uYXZiYXItMTY3fSk7XHJcbiAgICAgICAgICAgICQoXCIuc2VhcmNoX2Zvcm1fZG93blwiKS5vZmZzZXQoe3RvcDp0b3BfcG9zaXRpb25fbWluK2hlaWd0aF9uYXZiYXJ9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJChcIi5kcm9wX21lbnVfZG93blwiKS5vZmZzZXQoe3RvcDpwb3NUb3AraGVpZ3RoX25hdmJhciwgbGVmdDpsZWZ0X3Bvc2l0aW9uX25hdmJhci0xNjd9KTtcclxuICAgICAgICAgICAgJChcIi5zZWFyY2hfZm9ybV9kb3duXCIpLm9mZnNldCh7dG9wOnBvc1RvcCtoZWlndGhfbmF2YmFyfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBlbmQgLi4uINCy0YvQv9Cw0LTQtdC90LjQtSDQvNC10L3RjiDQvdCwINCx0L7Qu9GM0YjQuNGFINGN0LrRgNCw0L3QsNGFINGB0LXQu9C10LrRgtC40LLQvdC+INC6INCz0LvQsNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0LVcclxuXHJcblxyXG4gICAgLy8g0LLRi9C10LfQttCw0L3QuNC1INC40YLQtdC80L7QulxyXG4gICAgdmFyIHBhZ2Vfdz0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICBpZihwYWdlX3c+MTAyMil7XHJcbiAgICAgICAgJChcIi5pdGVtc1wiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgJChcIi5cIiArIHNsaWRlKS5zbGlkZVRvZ2dsZShcIm5vcm1hbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYnJvd3NlckRldGVjdEpTKCkge1xyXG4gICAgICAgIHZhclxyXG4gICAgICAgICAgICBicm93c2VyID0gbmV3IEFycmF5KCk7XHJcblxyXG4vL09wZXJhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVyYSkge1xyXG4gICAgICAgICAgICBicm93c2VyWzBdID0gXCJPcGVyYVwiO1xyXG4gICAgICAgICAgICBicm93c2VyWzFdID0gd2luZG93Lm9wZXJhLnZlcnNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4vL0Nocm9tZVx0XHJcbiAgICAgICAgaWYgKHdpbmRvdy5jaHJvbWUpIHtcclxuICAgICAgICAgICAgYnJvd3NlclswXSA9IFwiQ2hyb21lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuLy9GaXJlZm94XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zaWRlYmFyKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJbMF0gPSBcIkZpcmVmb3hcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4vL1NhZmFyaSBcclxuICAgICAgICBpZiAoKCF3aW5kb3cuZXh0ZXJuYWwpJiYoYnJvd3NlclswXSE9PVwiT3BlcmFcIikpIHtcclxuICAgICAgICAgICAgYnJvd3NlclswXSA9IFwiU2FmYXJpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuLy9JRVxyXG4gICAgICAgIGlmICh3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xyXG4gICAgICAgICAgICBicm93c2VyWzBdID0gXCJNU0lFXCI7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJQcm9maWxlKSBicm93c2VyWzFdID0gXCI2XCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5TdG9yYWdlKSBicm93c2VyWzFdID0gXCI4XCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaWYgKCghd2luZG93LlN0b3JhZ2UpJiYoIXdpbmRvdy5uYXZpZ2F0b3IudXNlclByb2ZpbGUpKSBicm93c2VyWzFdID0gXCI3XCI7XHJcbiAgICAgICAgICAgIGVsc2UgYnJvd3NlclsxXSA9IFwiVW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFicm93c2VyKSByZXR1cm4oZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuKGJyb3dzZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHZhciBiciA9IGJyb3dzZXJEZXRlY3RKUygpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhiclswXSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGJyWzFdKTtcclxuXHJcbiAgICBpZihiclsxXT09XCI4XCIgfHwgYnJbMV09PVwiOVwiKXtcclxuXHJcbiAgICAgICAgJCgnLml0ZW1fYmxvY2tfX3dyYXAnKS5jc3MoIFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIiApO1xyXG4gICAgICAgICQoJy5pdGVtX2Jsb2NrX193cmFwMScpLmNzcyggXCJiYWNrZ3JvdW5kLXNpemVcIiwgXCJjb3ZlclwiICk7XHJcbiAgICAgICAgJCgnLml0ZW1fYmxvY2tfX3dyYXAzJykuY3NzKCBcImJhY2tncm91bmQtc2l6ZVwiLCBcImNvdmVyXCIgKTtcclxuICAgICAgICAkKCcuaXRlbV9ibG9ja19fd3JhcDQnKS5jc3MoIFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIiApO1xyXG4gICAgICAgICQoJy5pdGVtX2Jsb2NrX193cmFwNScpLmNzcyggXCJiYWNrZ3JvdW5kLXNpemVcIiwgXCJjb3ZlclwiICk7XHJcbiAgICB9XHJcblxyXG5cclxuLy8g0L7RgtC60YDRi9Cy0LDRiNC60LAg0L/QsNGA0YLQvdC10YDQvtCyXHJcbiAgICAkKFwiLnRvb2dsZS1pbWctcGFydG5lcnNcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgJChcIiNcIitpZCkudG9nZ2xlQ2xhc3MoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgJChcIi5cIitpZCkuc2xpZGVUb2dnbGUoXCJmYXN0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIuXCIraWQpLmF0dHIoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vINCU0L7RgNCw0LHQvtGC0LrQsCDQutC70LjQutCwINC/0L4g0YTRg9GC0LXRgNGDINC90LAg0LzQvtCx0LjQu9GM0L3Ri9GFXHJcbiAgICAkKCcucGFuZWwtdGl0bGUgc3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcImFcIikudHJpZ2dlcignY2xpY2snKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoXCIucGFuZWwtdGl0bGUgYVwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHRyaWFuZ2xlX3ZhcmlhbnQgPSAkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKFwic3BhblwiKS5oYXNDbGFzcyhcInRyaWFuZ2xlX2Rvd25cIik7XHJcbiAgICAgICAgaWYodHJpYW5nbGVfdmFyaWFudCl7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJzcGFuXCIpLnJlbW92ZUNsYXNzKFwidHJpYW5nbGVfZG93blwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbihcInNwYW5cIikuYWRkQ2xhc3MoXCJ0cmlhbmdsZV91cFwiKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJzcGFuXCIpLnJlbW92ZUNsYXNzKFwidHJpYW5nbGVfdXBcIik7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJzcGFuXCIpLmFkZENsYXNzKFwidHJpYW5nbGVfZG93blwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
