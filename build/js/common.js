$(document).ready(function(){function e(){var e=new Array;return window.opera?(e[0]="Opera",e[1]=window.opera.version()):window.chrome?e[0]="Chrome":window.sidebar?e[0]="Firefox":window.external||"Opera"===e[0]?window.ActiveXObject&&(e[0]="MSIE",window.navigator.userProfile?e[1]="6":window.Storage?e[1]="8":window.Storage||window.navigator.userProfile?e[1]="Unknown":e[1]="7"):e[0]="Safari",e?e:!1}$(".apps_sm").click(function(e){e.preventDefault(),$(".search_form_up").slideToggle("fast",function(){var e=$(".apps_sm i").text();"A"===e?$(".apps_sm i").text("C"):$(".apps_sm i").text("A")}),$(this).toggleClass("blak_nav")}),$(".apps").click(function(e){e.preventDefault(),$(".search_form").slideToggle("fast",function(){var e=$(".apps i").text();"A"===e?$(".apps i").text("C"):$(".apps i").text("A")}),$(this).toggleClass("blak_nav")}),$(".downs").click(function(e){e.preventDefault(),$(".search_form_down").slideToggle("fast",function(){var e=$(".downs i").text();"A"===e?$(".downs i").text("C"):$(".downs i").text("A")})}),$(".drop_nav i").click(function(e){e.preventDefault();var t=$(this).text();"B"===t||"A"===t?$(this).text("C"):$(this).text("B")});var t=$(window).height()+20;$(".header").css("height",t),$("#button_down").click(function(e){e.preventDefault();var o=t;$("body,html").animate({scrollTop:o},1e3,"linear")}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$(".drop_menu_l").click(function(e){e.preventDefault();var t=$(window).height();if(714>t){$(".drop_menu_large").css("position","absolute");var o=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,n=$(".drop_menu_large").scrollTop();o>n?(o-=79,$(".drop_menu_large").css("margin-top",o)):$(".drop_menu_large").css("margin-top","-79px")}$(this).toggleClass("blak_nav"),$(".drop_menu_l i").toggleClass("blak_nav"),$(".drop_menu_large").slideToggle("fast")}),$(".app").click(function(e){e.preventDefault(),$(this).toggleClass("blak_nav"),$(".app i").toggleClass("blak_nav"),$(".drop_menu").slideToggle("fast")}),$(".down").click(function(e){e.preventDefault(),$(this).toggleClass("blak_nav"),$(".down i").toggleClass("blak_nav"),$(".drop_menu_down").slideToggle("fast")});var o=$(window).width();o>1022&&$(".items").hover(function(){var e=$(this).attr("id");return $("."+e).slideToggle("normal"),!1});var n=e();"8"==n[1]&&$(".cow").css("background-size","cover"),$(".toogle-img-partners").click(function(){var e=$(this).attr("id");$("#"+e).toggleClass("rotate"),$("."+e).slideToggle("fast",function(){$("."+e).attr("display","none")})})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJyb3dzZXJEZXRlY3RKUyIsImJyb3dzZXIiLCJBcnJheSIsIndpbmRvdyIsIm9wZXJhIiwidmVyc2lvbiIsImNocm9tZSIsInNpZGViYXIiLCJleHRlcm5hbCIsIkFjdGl2ZVhPYmplY3QiLCJuYXZpZ2F0b3IiLCJ1c2VyUHJvZmlsZSIsIlN0b3JhZ2UiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlVG9nZ2xlIiwidGV4dCIsInRoaXMiLCJ0b2dnbGVDbGFzcyIsInBhZ2VfaCIsImhlaWdodCIsImNzcyIsImRlc3RpbmF0aW9uIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIk1vZGVybml6ciIsInN2ZyIsImF0dHIiLCJyZXBsYWNlIiwicG9zVG9wIiwidW5kZWZpbmVkIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImRyb3BfbWVudV9sYXJnZSIsInBhZ2VfdyIsIndpZHRoIiwiaG92ZXIiLCJzbGlkZSIsImJyIiwiaWQiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBdUpkLFFBQVNDLEtBQ0wsR0FDSUMsR0FBVSxHQUFJQyxNQWtDbEIsT0EvQklDLFFBQU9DLE9BQ1BILEVBQVEsR0FBSyxRQUNiQSxFQUFRLEdBQUtFLE9BQU9DLE1BQU1DLFdBSTFCRixPQUFPRyxPQUNQTCxFQUFRLEdBQUssU0FJYkUsT0FBT0ksUUFDUE4sRUFBUSxHQUFLLFVBSVhFLE9BQU9LLFVBQXlCLFVBQWJQLEVBQVEsR0FLN0JFLE9BQU9NLGdCQUNQUixFQUFRLEdBQUssT0FDVEUsT0FBT08sVUFBVUMsWUFBYVYsRUFBUSxHQUFLLElBRTNDRSxPQUFPUyxRQUFTWCxFQUFRLEdBQUssSUFFM0JFLE9BQU9TLFNBQVlULE9BQU9PLFVBQVVDLFlBQ3JDVixFQUFRLEdBQUssVUFEc0NBLEVBQVEsR0FBSyxLQVZyRUEs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R0FBT3hCLFlBQVksV0FDcEIsR0ErQ2YsSUFBSXlCLEdBQUt6QyxHQUlDLE1BQVB5QyxFQUFHLElBQ0Y1QyxFQUFFLFFBQVF5QixJQUFLLGtCQUFtQixTQUt0Q3pCLEVBQUUsd0JBQXdCZ0IsTUFBTSxXQUM1QixHQUFJNkIsR0FBSzdDLEVBQUVxQixNQUFNVSxLQUFLLEtBQ3RCL0IsR0FBRSxJQUFJNkMsR0FBSXZCLFlBQVksVUFDdEJ0QixFQUFFLElBQUk2QyxHQUFJMUIsWUFBWSxPQUFRLFdBQzFCbkIsRUFBRSxJQUFJNkMsR0FBSWQsS0FBSyxVQUFVIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyDvv73vv73vv73vv73vv70g77+977+977+977+977+977+977+9IO+/vSDvv73vv73vv73vv73vv73vv70gIO+/vSDvv73vv73vv70g77+977+977+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG5cclxuXHJcblxyXG4gICAgJCgnLmFwcHNfc20nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnNlYXJjaF9mb3JtX3VwJykuc2xpZGVUb2dnbGUoJ2Zhc3QnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJCgnLmFwcHNfc20gaScpLnRleHQoKTtcclxuICAgICAgICAgICAgaWYodGV4dCA9PT0gXCJBXCIpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmFwcHNfc20gaScpLnRleHQoXCJDXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5hcHBzX3NtIGknKS50ZXh0KFwiQVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKCcuYXBwcycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuc2VhcmNoX2Zvcm0nKS5zbGlkZVRvZ2dsZSgnZmFzdCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSAkKCcuYXBwcyBpJykudGV4dCgpO1xyXG4gICAgICAgICAgICBpZih0ZXh0ID09PSBcIkFcIil7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwcyBpJykudGV4dChcIkNcIik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnLmFwcHMgaScpLnRleHQoXCJBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICQoJy5kb3ducycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuc2VhcmNoX2Zvcm1fZG93bicpLnNsaWRlVG9nZ2xlKCdmYXN0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQoJy5kb3ducyBpJykudGV4dCgpO1xyXG4gICAgICAgICAgICBpZih0ZXh0ID09PSBcIkFcIil7XHJcbiAgICAgICAgICAgICAgICAkKCcuZG93bnMgaScpLnRleHQoXCJDXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5kb3ducyBpJykudGV4dChcIkFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmRyb3BfbmF2IGknKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLnRleHQoKTtcclxuXHJcbiAgICAgICAgaWYodGV4dD09PVwiQlwiIHx8IHRleHQgPT09XCJBXCIpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoXCJDXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICQodGhpcykudGV4dChcIkJcIik7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vYWxlcnQodGV4dCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyDvv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv73vv71cclxuICAgIHZhciBwYWdlX2g9ICQod2luZG93KS5oZWlnaHQoKSsyMDtcclxuICAgICQoJy5oZWFkZXInKS5jc3MoJ2hlaWdodCcsIHBhZ2VfaCk7XHJcblxyXG4gICAgJCgnI2J1dHRvbl9kb3duJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHBhZ2VfaDtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IGRlc3RpbmF0aW9ufSwgMTAwMCwgJ2xpbmVhcicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vU1ZHIEZhbGxiYWNrXHJcbiAgICBpZiAoIU1vZGVybml6ci5zdmcpIHtcclxuICAgICAgICAkKFwiaW1nW3NyYyo9J3N2ZyddXCIpLmF0dHIoXCJzcmNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCIuc3ZnXCIsIFwiLnBuZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL21lbnUgZHJvcCBsYXJnZVxyXG4gICAgJCgnLmRyb3BfbWVudV9sJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBwYWdlX2g9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICBpZihwYWdlX2g8NzE0KXtcclxuICAgICAgICAgICAgJCgnLmRyb3BfbWVudV9sYXJnZScpLmNzcyhcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKTtcclxuICAgICAgICAgICAgLy8g77+977+977+977+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv70g77+977+977+977+977+977+977+977+977+9XHJcbiAgICAgICAgICAgIHZhciBwb3NUb3AgPSAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB2YXIgZHJvcF9tZW51X2xhcmdlID0gJCgnLmRyb3BfbWVudV9sYXJnZScpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYocG9zVG9wPmRyb3BfbWVudV9sYXJnZSl7XHJcbiAgICAgICAgICAgICAgICBwb3NUb3AgPSBwb3NUb3AtNzk7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJvcF9tZW51X2xhcmdlJykuY3NzKFwibWFyZ2luLXRvcFwiLHBvc1RvcCk7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wX21lbnVfbGFyZ2UnKS5jc3MoXCJtYXJnaW4tdG9wXCIsXCItNzlweFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuZHJvcF9tZW51X2wgaScpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgICAgICQoJy5kcm9wX21lbnVfbGFyZ2UnKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL21lbnUgZHJvcFxyXG4gICAgJCgnLmFwcCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgICAgICQoJy5hcHAgaScpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgICAgICQoJy5kcm9wX21lbnUnKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcuZG93bicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdibGFrX25hdicpO1xyXG4gICAgICAgICQoJy5kb3duIGknKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuZHJvcF9tZW51X2Rvd24nKS5zbGlkZVRvZ2dsZSgnZmFzdCcpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv71cclxuICAgIHZhciBwYWdlX3c9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgaWYocGFnZV93PjEwMjIpe1xyXG4gICAgICAgICQoXCIuaXRlbXNcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICQoXCIuXCIgKyBzbGlkZSkuc2xpZGVUb2dnbGUoXCJub3JtYWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGJyb3dzZXJEZXRlY3RKUygpIHtcclxuICAgICAgICB2YXJcclxuICAgICAgICAgICAgYnJvd3NlciA9IG5ldyBBcnJheSgpO1xyXG5cclxuLy9PcGVyYVxyXG4gICAgICAgIGlmICh3aW5kb3cub3BlcmEpIHtcclxuICAgICAgICAgICAgYnJvd3NlclswXSA9IFwiT3BlcmFcIjtcclxuICAgICAgICAgICAgYnJvd3NlclsxXSA9IHdpbmRvdy5vcGVyYS52ZXJzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuLy9DaHJvbWVcdFxyXG4gICAgICAgIGlmICh3aW5kb3cuY2hyb21lKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJbMF0gPSBcIkNocm9tZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbi8vRmlyZWZveFxyXG4gICAgICAgIGlmICh3aW5kb3cuc2lkZWJhcikge1xyXG4gICAgICAgICAgICBicm93c2VyWzBdID0gXCJGaXJlZm94XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuLy9TYWZhcmkgXHJcbiAgICAgICAgaWYgKCghd2luZG93LmV4dGVybmFsKSYmKGJyb3dzZXJbMF0hPT1cIk9wZXJhXCIpKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJbMF0gPSBcIlNhZmFyaVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbi8vSUVcclxuICAgICAgICBpZiAod2luZG93LkFjdGl2ZVhPYmplY3QpIHtcclxuICAgICAgICAgICAgYnJvd3NlclswXSA9IFwiTVNJRVwiO1xyXG4gICAgICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyUHJvZmlsZSkgYnJvd3NlclsxXSA9IFwiNlwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuU3RvcmFnZSkgYnJvd3NlclsxXSA9IFwiOFwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGlmICgoIXdpbmRvdy5TdG9yYWdlKSYmKCF3aW5kb3cubmF2aWdhdG9yLnVzZXJQcm9maWxlKSkgYnJvd3NlclsxXSA9IFwiN1wiO1xyXG4gICAgICAgICAgICBlbHNlIGJyb3dzZXJbMV0gPSBcIlVua25vd25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYnJvd3NlcikgcmV0dXJuKGZhbHNlKTtcclxuICAgICAgICBlbHNlIHJldHVybihicm93c2VyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB2YXIgYnIgPSBicm93c2VyRGV0ZWN0SlMoKTtcclxuICAgIC8vY29uc29sZS5sb2coYnJbMF0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhiclsxXSk7XHJcblxyXG4gICAgaWYoYnJbMV09PVwiOFwiKXtcclxuICAgICAgICAkKCcuY293JykuY3NzKCBcImJhY2tncm91bmQtc2l6ZVwiLCBcImNvdmVyXCIgKTtcclxuICAgIH1cclxuXHJcblxyXG4vLyDvv73vv73vv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+977+977+977+9XHJcbiAgICAkKFwiLnRvb2dsZS1pbWctcGFydG5lcnNcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgJChcIiNcIitpZCkudG9nZ2xlQ2xhc3MoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgJChcIi5cIitpZCkuc2xpZGVUb2dnbGUoXCJmYXN0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIuXCIraWQpLmF0dHIoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
