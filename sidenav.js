$(document).ready(function () {
	var sbInitWidth = $("#nav").css("width");
	$(".link").hide();
	$("#navbutton").click(function () {
		if ($("#nav").css("width") == sbInitWidth){
			$("#nav").css("width", "250px");
			$("#bar1").css("transform", "translate(0, 11px) rotate(-45deg)");
			$("#bar2").css("opacity", "0");
			$("#bar3").css("transform", "translate(0, -11px) rotate(45deg)");
			$("#titles").fadeIn(1400);
		} else {
			$("#nav").css("width", sbInitWidth);
			$("#bar1").css("transform", "translate(0, 0) rotate(0deg)");
			$("#bar2").css("opacity", "100");
			$("#bar3").css("transform", "translate(0, 0) rotate(0deg)");
			$("#titles").hide();
			
		}
	});
});