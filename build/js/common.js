$(document).ready(function(){$("#buttonsearch").click(function(){$("#formsearch").slideToggle("fast",function(){}),$("#searchbox").focus(),$(".openclosesearch").toggle()}),$("#buttonsearch1").click(function(){$("#formsearch1").slideToggle("fast",function(){}),$(".openclosesearch1").toggle(),$("#searchbox1").focus()}),$("#buttonsearch3").click(function(){$("#formsearch3").slideToggle("fast",function(){$("#content").toggleClass("moremargin")}),$(".openclosesearch3").toggle(),$("#searchbox3").focus()}),$(document).ready(function(){$(".clicks").hover(function(){var e=$(this).attr("id");return $("."+e).slideToggle("normal"),!1})}),$(".scroll_to").click(function(e){e.preventDefault();var o=$(this).attr("href");console.log(o);var t=$("."+o).offset().top-70;return console.log(t),$("body,html").animate({scrollTop:t},2e3),!1});var e=$(window).width();480>e&&($("p.item1").css("display","block !important"),$("p.item2").css("display","block !important"),$(".text_item > p").removeClass(),$(".down_item  p").remove()),$(".count_element").on("click",function(){return ga("send","event","goal","goal"),yaCounterXXXXXXXX.reachGoal("goal"),!0}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){alert("Спасибо за заявку!"),setTimeout(function(){$("#form").trigger("reset")},1e3)}),!1});try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(o){}$("img, a").on("dragstart",function(e){e.preventDefault()})}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(400).fadeOut("slow")});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwic2xpZGVUb2dnbGUiLCJmb2N1cyIsInRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiaG92ZXIiLCJzbGlkZSIsInRoaXMiLCJhdHRyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudENsaWNrIiwiY29uc29sZSIsImxvZyIsImRlc3RpbmF0aW9uIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIndpbndpZHRoIiwid2luZG93Iiwid2lkdGgiLCJjc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsIm9uIiwiZ2EiLCJ5YUNvdW50ZXJYWFhYWFhYWCIsInJlYWNoR29hbCIsIk1vZGVybml6ciIsInN2ZyIsInJlcGxhY2UiLCJzdWJtaXQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzZXJpYWxpemUiLCJkb25lIiwiYWxlcnQiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsImJyb3dzZXJTZWxlY3RvciIsImhhc0NsYXNzIiwic21vb3RoU2Nyb2xsIiwiZXJyIiwiZXZlbnQiLCJsb2FkIiwiZmFkZU91dCIsImRlbGF5Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUdkRixFQUFFLGlCQUFpQkcsTUFBTSxXQUNyQkgsRUFBRSxlQUFlSSxZQUFhLE9BQU8sY0FHckNKLEVBQUUsY0FBY0ssUUFDaEJMLEVBQUUsb0JBQW9CTSxXQUcxQk4sRUFBRSxrQkFBa0JHLE1BQU0sV0FDdEJILEVBQUUsZ0JBQWdCSSxZQUFhLE9BQU8sY0FHdENKLEVBQUUscUJBQXFCTSxTQUN2Qk4sRUFBRSxlQUFlSyxVQUlyQkwsRUFBRSxrQkFBa0JHLE1BQU0sV0FDdEJILEVBQUUsZ0JBQWdCSSxZQUFhLE9BQU8sV0FDbENKLEVBQUcsWUFBYU8sWUFBYSxnQkFFakNQLEVBQUUscUJBQXFCTSxTQUN2Qk4sRUFBRSxlQUFlSyxVQVFyQkwsRUFBRUMsVUFBVUMsTUFBTSxXQUNkRixFQUFFLFdBQVdRLE1BQU0sV0FDZixHQUFJQyxHQUFRVCxFQUFFVSxNQUFNQyxLQUFLLEtBRXpCLE9BREFYLEdBQUUsSUFBTVMsR0FBT0wsWUFBWSxXQUNwQixNQUtmSixFQUFFLGNBQWNHLE1BQU0sU0FBVVMsR0FDNUJBLEVBQUVDLGdCQUNGLElBQUlDLEdBQWVkLEVBQUVVLE1BQU1DLEtBQUssT0FHaENJLFNBQVFDLElBQUlGLEVBQ1osSUFBSUcsR0FBY2pCLEVBQUUsSUFBTWMsR0FBY0ksU0FBU0MsSUFBTSxFQUl2RCxPQUhBSixTQUFRQyxJQUFJQyxHQUNaakIsRUFBRSxhQUFhb0IsU0FBU0MsVUFBV0osR0FBYyxNQUUxQyxHQUlYLElBQUlLLEdBQVd0QixFQUFFdUIsUUFBUUMsT0FDVixLQUFYRixJQUNBdEIsRUFBRSxXQUFXeUIsSUFBSSxVQUFXLG9CQUM1QnpCLEVBQUUsV0FBV3lCLElBQUksVUFBVyxvQkFFNUJ6QixFQUFFLGtCQUFrQjBCLGNBQ3BCMUIsRUFBRSxpQkFBaUIyQixVQU12QjNCLEVBQUUsa0JBQWtCNEIsR0FBRyxRQUFTLFdBRzVCLE1BRkFDLElBQUcsT0FBUSxRQUFTLE9BQVEsUUFDNUJDLGtCQUFrQkMsVUFBVSxTQUNyQixJQUlOQyxVQUFVQyxLQUNYakMsRUFBRSxtQkFBbUJXLEtBQUssTUFBTyxXQUM3QixNQUFPWCxHQUFFVSxNQUFNQyxLQUFLLE9BQU91QixRQUFRLE9BQVEsVUFPbkRsQyxFQUFFLFNBQVNtQyxPQUFPLFdBWWQsTUFYQW5DLEdBQUVvQyxNQUNFQyxLQUFNLE9BQ05DLElBQUssV0FDTEMsS0FBTXZDLEVBQUVVLE1BQU04QixjQUNmQyxLQUFLLFdBQ0pDLE1BQU0sc0JBQ05DLFdBQVcsV0FFUDNDLEVBQUUsU0FBUzRDLFFBQVEsVUFDcEIsUUFFQSxHQUlYLEtBQ0k1QyxFQUFFNkMsa0JBQ0U3QyxFQUFFLFFBQVE4QyxTQUFTLFdBQ25COUMsRUFBRStDLGVBRVIsTUFBT0MsSUFLVGhELEVBQUUsVUFBVTRCLEdBQUcsWUFBYSxTQUFVcUIsR0FDbENBLEVBQU1wQyxxQkFLZGIsRUFBRXVCLFFBQVEyQixLQUFLLFdBRVhsRCxFQUFFLGlCQUFpQm1ELFVBQ25CbkQsRUFBRSxXQUFXb0QsTUFBTSxLQUFLRCxRQUFRIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgJCgnI2J1dHRvbnNlYXJjaCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2Zvcm1zZWFyY2gnKS5zbGlkZVRvZ2dsZSggXCJmYXN0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAkKCAnI2NvbnRlbnQnICkudG9nZ2xlQ2xhc3MoIFwibW9yZW1hcmdpblwiICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgICQoJyNzZWFyY2hib3gnKS5mb2N1cygpO1xyXG4gICAgICAgICQoJy5vcGVuY2xvc2VzZWFyY2gnKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b25zZWFyY2gxJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjZm9ybXNlYXJjaDEnKS5zbGlkZVRvZ2dsZSggXCJmYXN0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgIC8vICAgICAkKCAnI2NvbnRlbnQnICkudG9nZ2xlQ2xhc3MoIFwibW9yZW1hcmdpblwiICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgICQoJy5vcGVuY2xvc2VzZWFyY2gxJykudG9nZ2xlKCk7XHJcbiAgICAgICAgJCgnI3NlYXJjaGJveDEnKS5mb2N1cygpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNidXR0b25zZWFyY2gzJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjZm9ybXNlYXJjaDMnKS5zbGlkZVRvZ2dsZSggXCJmYXN0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCggJyNjb250ZW50JyApLnRvZ2dsZUNsYXNzKCBcIm1vcmVtYXJnaW5cIiApO1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgICAkKCcub3BlbmNsb3Nlc2VhcmNoMycpLnRvZ2dsZSgpO1xyXG4gICAgICAgICQoJyNzZWFyY2hib3gzJykuZm9jdXMoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vINCy0YvQtdC30LQg0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuY2xpY2tzXCIpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAkKFwiLlwiICsgc2xpZGUpLnNsaWRlVG9nZ2xlKFwibm9ybWFsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy8v0J7QsdGA0LDQsdC+0YLQutCwINC90LDQttCw0YLQuNGPINC90LAg0LrQvdC+0L/QutGDIFwi0JLQvdC40LdcIlxyXG4gICAgJChcIi5zY3JvbGxfdG9cIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50Q2xpY2spO1xyXG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9ICQoJy4nICsgZWxlbWVudENsaWNrKS5vZmZzZXQoKS50b3AgLSA3MDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBkZXN0aW5hdGlvbn0sIDIwMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbi8vINC80LDQvdC40L/Rg9C70Y/RhtC40Lgg0YEg0LjRgtC10LzQutCw0LzQuCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INGA0LDQt9C80LXRgNCwXHJcbiAgICB2YXIgd2lud2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGlmICh3aW53aWR0aCA8IDQ4MCkge1xyXG4gICAgICAgICQoJ3AuaXRlbTEnKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2sgIWltcG9ydGFudFwiKTtcclxuICAgICAgICAkKCdwLml0ZW0yJykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrICFpbXBvcnRhbnRcIik7XHJcblxyXG4gICAgICAgICQoJy50ZXh0X2l0ZW0gPiBwJykucmVtb3ZlQ2xhc3MoKTtcclxuICAgICAgICAkKCcuZG93bl9pdGVtICBwJykucmVtb3ZlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL9Cm0LXQu9C4INC00LvRjyDQr9C90LTQtdC60YEu0JzQtdGC0YDQuNC60Lgg0LggR29vZ2xlIEFuYWx5dGljc1xyXG4gICAgJChcIi5jb3VudF9lbGVtZW50XCIpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnYShcInNlbmRcIiwgXCJldmVudFwiLCBcImdvYWxcIiwgXCJnb2FsXCIpO1xyXG4gICAgICAgIHlhQ291bnRlclhYWFhYWFhYLnJlYWNoR29hbChcImdvYWxcIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy9TVkcgRmFsbGJhY2tcclxuICAgIGlmICghTW9kZXJuaXpyLnN2Zykge1xyXG4gICAgICAgICQoXCJpbWdbc3JjKj0nc3ZnJ11cIikuYXR0cihcInNyY1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcIi5zdmdcIiwgXCIucG5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgO1xyXG5cclxuICAgIC8v0JDRj9C60YEg0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvFxyXG4gICAgLy/QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86IGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9qcXVlcnkuYWpheC9cclxuICAgICQoXCIjZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwibWFpbC5waHBcIixcclxuICAgICAgICAgICAgZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhbGVydChcItCh0L/QsNGB0LjQsdC+INC30LAg0LfQsNGP0LLQutGDIVwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNmb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9DaHJvbWUgU21vb3RoIFNjcm9sbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICAkLmJyb3dzZXJTZWxlY3RvcigpO1xyXG4gICAgICAgIGlmICgkKFwiaHRtbFwiKS5oYXNDbGFzcyhcImNocm9tZVwiKSkge1xyXG4gICAgICAgICAgICAkLnNtb290aFNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgIH1cclxuICAgIDtcclxuXHJcbiAgICAkKFwiaW1nLCBhXCIpLm9uKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQoXCIubG9hZGVyX2lubmVyXCIpLmZhZGVPdXQoKTtcclxuICAgICQoXCIubG9hZGVyXCIpLmRlbGF5KDQwMCkuZmFkZU91dChcInNsb3dcIik7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
