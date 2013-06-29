$(document).ready(function() {
	$("ul#nav li a").addClass("js");
	$("ul#nav li a").hover(
      function () {
        $(this).stop(true,true).animate({backgroundPosition:"(50% 0)"}, 200);
        $(this).animate({backgroundPosition:"(50% 7px)"}, 150);
      }, 
      function () {
        $(this).animate({backgroundPosition:"(50% -149px)"}, 200);

      }
    );

});