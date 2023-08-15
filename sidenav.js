$(document).ready(function () {
	var sbInitWidth = $("#sidenav").css("width");
	$(".link").hide();
	$("#navbutton").click(function () {
		if ($("#sidenav").css("width") == sbInitWidth){
			$("#sidenav").css("width", "250px");
			$("#bar1").css("transform", "translate(0, 11px) rotate(-45deg)");
			$("#bar2").css("opacity", "0");
			$("#bar3").css("transform", "translate(0, -11px) rotate(45deg)");
			$(".link").fadeIn("slow");
		} else {
			$("#sidenav").css("width", sbInitWidth);
			$("#bar1").css("transform", "translate(0, 0) rotate(0deg)");
			$("#bar2").css("opacity", "100");
			$("#bar3").css("transform", "translate(0, 0) rotate(0deg)");
			$(".link").fadeOut();
		}
	});
});