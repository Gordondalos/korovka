$(document).ready(function(){var s=$(window).height()+20;$(".header").css("height",s),$("#button_down").click(function(a){a.preventDefault();var e=s;$("body,html").animate({scrollTop:e},1e3,"linear")}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$(".drop_menu_l").click(function(s){s.preventDefault();var a=$(window).height();if(714>a){$(".drop_menu_large").css("position","absolute");var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,o=$(".drop_menu_large").scrollTop();e>o?(e-=79,$(".drop_menu_large").css("margin-top",e)):$(".drop_menu_large").css("margin-top","-79px")}$(this).toggleClass("blak_nav"),$(".drop_menu_l i").toggleClass("blak_nav"),$(".drop_menu_large").slideToggle("fast")}),$(".app").click(function(s){s.preventDefault(),$(this).toggleClass("blak_nav"),$(".app i").toggleClass("blak_nav"),$(".drop_menu").slideToggle("fast")}),$(".down").click(function(s){s.preventDefault(),$(this).toggleClass("blak_nav"),$(".down i").toggleClass("blak_nav"),$(".drop_menu_down").slideToggle("fast")}),$(".apps").click(function(s){s.preventDefault(),$(".search_form").slideToggle("fast",function(){var s=$(".apps i").hasClass("fa-close");s?($(".apps i").remove(),$(".apps").prepend("<i class='fa fa-search'></i>")):($(".apps i").remove(),$(".apps").prepend("<i class='fa fa-close'></i>"),$(".apps i").css("color","black"))}),$(".apps").toggleClass("blak_nav"),$(".apps i").toggleClass("blak_nav")}),$(".downs").click(function(s){s.preventDefault(),$(".search_form_down").slideToggle("fast",function(){var s=$(".downs i").hasClass("fa-close");s?($(".downs i").remove(),$(".downs").prepend("<i class='fa fa-search'></i>")):($(".downs i").remove(),$(".downs").prepend("<i class='fa fa-close'></i>"),$(".downs i").css("color","black"))}),$(".downs").toggleClass("blak_nav"),$(".downs i").toggleClass("blak_nav")}),$(".apps_sm").click(function(s){s.preventDefault(),$(".search_form_up").slideToggle("fast",function(){var s=$(".apps_sm i").hasClass("fa-close");s?($(".apps_sm i").remove(),$(".apps_sm").prepend("<i class='fa fa-search'></i>")):($(".apps_sm i").remove(),$(".apps_sm").prepend("<i class='fa fa-close'></i>"),$(".apps_sm i").css("color","black"))}),$(".apps_sm").toggleClass("blak_nav"),$(".apps_sm i").toggleClass("blak_nav")}),$(".items").hover(function(){var s=$(this).attr("id");return $("."+s).slideToggle("normal"),!1})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBhZ2VfaCIsIndpbmRvdyIsImhlaWdodCIsImNzcyIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGVzdGluYXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiTW9kZXJuaXpyIiwic3ZnIiwiYXR0ciIsInRoaXMiLCJyZXBsYWNlIiwicG9zVG9wIiwidW5kZWZpbmVkIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImRyb3BfbWVudV9sYXJnZSIsInRvZ2dsZUNsYXNzIiwic2xpZGVUb2dnbGUiLCJpIiwiaGFzQ2xhc3MiLCJyZW1vdmUiLCJwcmVwZW5kIiwiaG92ZXIiLCJzbGlkZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FHZCxHQUFJQyxHQUFRSCxFQUFFSSxRQUFRQyxTQUFTLEVBQy9CTCxHQUFFLFdBQVdNLElBQUksU0FBVUgsR0FFM0JILEVBQUUsZ0JBQWdCTyxNQUFNLFNBQVNDLEdBQzdCQSxFQUFFQyxnQkFDRixJQUFJQyxHQUFjUCxDQUNsQkgsR0FBRSxhQUFhVyxTQUFTQyxVQUFXRixHQUFjLElBQU0sWUFLdERHLFVBQVVDLEtBQ1hkLEVBQUUsbUJBQW1CZSxLQUFLLE1BQU8sV0FDN0IsTUFBT2YsR0FBRWdCLE1BQU1ELEtBQUssT0FBT0UsUUFBUSxPQUFRLFVBS25EakIsRUFBRSxnQkFBZ0JPLE1BQU0sU0FBU0MsR0FDN0JBLEVBQUVDLGdCQUNGLElBQUlOLEdBQVFILEVBQUVJLFFBQVFDLFFBQ3RCLElBQVUsSUFBUEYsRUFBVyxDQUNWSCxFQUFFLG9CQUFvQk0sSUFBSSxXQUFXLFdBRXJDLElBQUlZLEdBQWlDQyxTQUF2QmYsT0FBT2dCLFlBQTZCaEIsT0FBT2dCLGFBQWVuQixTQUFTb0IsaUJBQW1CcEIsU0FBU3FCLEtBQUtDLFlBQWN0QixTQUFTcUIsTUFBTVYsVUFDM0lZLEVBQWtCeEIsRUFBRSxvQkFBb0JZLFdBRXpDTSxHQUFPTSxHQUNOTixHQUFnQixHQUNoQmxCLEVBQUUsb0JBQW9CTSxJQUFJLGFBQWFZLElBWXZDbEIsRUFBRSxvQkFBb0JNLElBQUksYUFBYSxTQU8vQ04sRUFBRWdCLE1BQU1TLFlBQVksWUFDcEJ6QixFQUFFLGtCQUFrQnlCLFlBQVksWUFDaEN6QixFQUFFLG9CQUFvQjBCLFlBQVksVUFNdEMxQixFQUFFLFFBQVFPLE1BQU0sU0FBU0MsR0FDckJBLEVBQUVDLGlCQUNGVCxFQUFFZ0IsTUFBTVMsWUFBWSxZQUNwQnpCLEVBQUUsVUFBVXlCLFlBQVksWUFDeEJ6QixFQUFFLGNBQWMwQixZQUFZLFVBS2hDMUIsRUFBRSxTQUFTTyxNQUFNLFNBQVNDLEdBQ3RCQSxFQUFFQyxpQkFDRlQsRUFBRWdCLE1BQU1TLFlBQVksWUFDcEJ6QixFQUFFLFdBQVd5QixZQUFZLFlBQ3pCekIsRUFBRSxtQkFBbUIwQixZQUFZLFVBT3JDMUIsRUFBRSxTQUFTTyxNQUFNLFNBQVNDLEdBQ3RCQSxFQUFFQyxpQkFDRlQsRUFBRSxnQkFBZ0IwQixZQUFZLE9BQU8sV0FDN0IsR0FBSUMsR0FBSTNCLEVBQUUsV0FBVzRCLFNBQVMsV0FDMUJELElBTUEzQixFQUFFLFdBQVc2QixTQUNiN0IsRUFBRSxTQUFTOEIsUUFBUSxrQ0FObkI5QixFQUFFLFdBQVc2QixTQUNiN0IsRUFBRSxTQUFTOEIsUUFBUSwrQkFDbkI5QixFQUFFLFdBQVdNLElBQUksUUFBUyxZQU9sQ04sRUFBRSxTQUFTeUIsWUFBWSxZQUN2QnpCLEVBQUUsV0FBV3lCLFlBQVksY0FLakN6QixFQUFFLFVBQVVPLE1BQU0sU0FBU0MsR0FDdkJBLEVBQUVDLGlCQUNGVCxFQUFFLHFCQUFxQjBCLFlBQVksT0FBTyxXQUN0QyxHQUFJQyxHQUFJM0IsRUFBRSxZQUFZNEIsU0FBUyxXQUMzQkQsSUFNQTNCLEVBQUUsWUFBWTZCLFNBQ2Q3QixFQUFFLFVBQVU4QixRQUFRLGtDQU5wQjlCLEVBQUUsWUFBWTZCLFNBQ2Q3QixFQUFFLFVBQVU4QixRQUFRLCtCQUNwQjlCLEVBQUUsWUFBWU0sSUFBSSxRQUFTLFlBT25DTixFQUFFLFVBQVV5QixZQUFZLFlBQ3hCekIsRUFBRSxZQUFZeUIsWUFBWSxjQUs5QnpCLEVBQUUsWUFBWU8sTUFBTSxTQUFTQyxHQUN6QkEsRUFBRUMsaUJBQ0ZULEVBQUUsbUJBQW1CMEIsWUFBWSxPQUFPLFdBQ3BDLEdBQUlDLEdBQUkzQixFQUFFLGNBQWM0QixTQUFTLFdBQzdCRCxJQU1BM0IsRUFBRSxjQUFjNkIsU0FDaEI3QixFQUFFLFlBQVk4QixRQUFRLGtDQU50QjlCLEVBQUUsY0FBYzZCLFNBQ2hCN0IsRUFBRSxZQUFZOEIsUUFBUSwrQkFDdEI5QixFQUFFLGNBQWNNLElBQUksUUFBUyxZQU9yQ04sRUFBRSxZQUFZeUIsWUFBWSxZQUMxQnpCLEVBQUUsY0FBY3lCLFlBQVksY0FPOUJ6QixFQUFFLFVBQVUrQixNQUFNLFdBQ2hCLEdBQUlDLEdBQVFoQyxFQUFFZ0IsTUFBTUQsS0FBSyxLQUV6QixPQURBZixHQUFFLElBQU1nQyxHQUFPTixZQUFZLFdBQ3BCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbi8vIO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgdmFyIHBhZ2VfaD0gJCh3aW5kb3cpLmhlaWdodCgpKzIwO1xyXG4gICAgJCgnLmhlYWRlcicpLmNzcygnaGVpZ2h0JywgcGFnZV9oKTtcclxuXHJcbiAgICAkKCcjYnV0dG9uX2Rvd24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSBwYWdlX2g7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBkZXN0aW5hdGlvbn0sIDEwMDAsICdsaW5lYXInKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1NWRyBGYWxsYmFja1xyXG4gICAgaWYgKCFNb2Rlcm5penIuc3ZnKSB7XHJcbiAgICAgICAgJChcImltZ1tzcmMqPSdzdmcnXVwiKS5hdHRyKFwic3JjXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICQodGhpcykuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiLnN2Z1wiLCBcIi5wbmdcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tZW51IGRyb3AgbGFyZ2VcclxuICAgICQoJy5kcm9wX21lbnVfbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcGFnZV9oPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgaWYocGFnZV9oPDcxNCl7XHJcbiAgICAgICAgICAgICQoJy5kcm9wX21lbnVfbGFyZ2UnKS5jc3MoXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIik7XHJcbiAgICAgICAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73vv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgICAgICAgICB2YXIgcG9zVG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdmFyIGRyb3BfbWVudV9sYXJnZSA9ICQoJy5kcm9wX21lbnVfbGFyZ2UnKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHBvc1RvcD5kcm9wX21lbnVfbGFyZ2Upe1xyXG4gICAgICAgICAgICAgICAgcG9zVG9wID0gcG9zVG9wLTc5O1xyXG4gICAgICAgICAgICAgICAgJCgnLmRyb3BfbWVudV9sYXJnZScpLmNzcyhcIm1hcmdpbi10b3BcIixwb3NUb3ApO1xyXG4gICAgICAgICAgICAgICAgLy92YXIgaSA9ICQoJy5kcm9wX21lbnVfbCBpJykuaGFzQ2xhc3MoJ2ZhLWNsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAvL2lmKCFpKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICQoJy5kcm9wX21lbnVfbCBpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAkKCcuZHJvcF9tZW51X2wnKS5wcmVwZW5kKFwiPGkgY2xhc3M9J2ZhIGZhLWNsb3NlJz48L2k+XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgJCgnLmRyb3BfbWVudV9sIGknKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy99ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vICAgICQoJy5kcm9wX21lbnVfbCBpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAkKCcuZHJvcF9tZW51X2wnKS5wcmVwZW5kKFwiPGkgY2xhc3M9J2ZhIGZhLWJhcnMnPjwvaT5cIik7XHJcbiAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJvcF9tZW51X2xhcmdlJykuY3NzKFwibWFyZ2luLXRvcFwiLFwiLTc5cHhcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coZHJvcF9tZW51X2xhcmdlKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgJCgnLmRyb3BfbWVudV9sIGknKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuZHJvcF9tZW51X2xhcmdlJykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9tZW51IGRyb3BcclxuICAgICQoJy5hcHAnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuYXBwIGknKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuZHJvcF9tZW51Jykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmRvd24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuZG93biBpJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgJCgnLmRyb3BfbWVudV9kb3duJykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8g77+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv70g77+977+977+977+977+977+9ICDvv70g77+977+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuXHJcbiAgICAkKCcuYXBwcycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuc2VhcmNoX2Zvcm0nKS5zbGlkZVRvZ2dsZSgnZmFzdCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gJCgnLmFwcHMgaScpLmhhc0NsYXNzKCdmYS1jbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5hcHBzIGknKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYXBwcycpLnByZXBlbmQoXCI8aSBjbGFzcz0nZmEgZmEtY2xvc2UnPjwvaT5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmFwcHMgaScpLmNzcygnY29sb3InLCAnYmxhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYXBwcyBpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmFwcHMnKS5wcmVwZW5kKFwiPGkgY2xhc3M9J2ZhIGZhLXNlYXJjaCc+PC9pPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5hcHBzJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgICAgICQoJy5hcHBzIGknKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmRvd25zJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5zZWFyY2hfZm9ybV9kb3duJykuc2xpZGVUb2dnbGUoJ2Zhc3QnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBpID0gJCgnLmRvd25zIGknKS5oYXNDbGFzcygnZmEtY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYoIWkpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmRvd25zIGknKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5kb3ducycpLnByZXBlbmQoXCI8aSBjbGFzcz0nZmEgZmEtY2xvc2UnPjwvaT5cIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuZG93bnMgaScpLmNzcygnY29sb3InLCAnYmxhY2snKTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnLmRvd25zIGknKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJy5kb3ducycpLnByZXBlbmQoXCI8aSBjbGFzcz0nZmEgZmEtc2VhcmNoJz48L2k+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmRvd25zJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcbiAgICAgICAgJCgnLmRvd25zIGknKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmFwcHNfc20nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnNlYXJjaF9mb3JtX3VwJykuc2xpZGVUb2dnbGUoJ2Zhc3QnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBpID0gJCgnLmFwcHNfc20gaScpLmhhc0NsYXNzKCdmYS1jbG9zZScpO1xyXG4gICAgICAgICAgICBpZighaSl7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwc19zbSBpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwc19zbScpLnByZXBlbmQoXCI8aSBjbGFzcz0nZmEgZmEtY2xvc2UnPjwvaT5cIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwc19zbSBpJykuY3NzKCdjb2xvcicsICdibGFjaycpO1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwc19zbSBpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXBwc19zbScpLnByZXBlbmQoXCI8aSBjbGFzcz0nZmEgZmEtc2VhcmNoJz48L2k+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmFwcHNfc20nKS50b2dnbGVDbGFzcygnYmxha19uYXYnKTtcclxuICAgICAgICAkKCcuYXBwc19zbSBpJykudG9nZ2xlQ2xhc3MoJ2JsYWtfbmF2Jyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyDvv73vv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+977+977+977+9XHJcbiAgICAgICQoXCIuaXRlbXNcIikuaG92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzbGlkZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAkKFwiLlwiICsgc2xpZGUpLnNsaWRlVG9nZ2xlKFwibm9ybWFsXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
