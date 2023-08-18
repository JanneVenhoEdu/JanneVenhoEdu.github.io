$(document).ready(function () {
	// Tyylien alustus
	var activeLinkColor = "#f1f1f1";
	var passiveLinkColor = "#b1b1b1";
	// Otsikkotietojen lataaminen
	var titles = $("h2");
	var titlesTotal = titles.length;
	for (var i = 0; i < titlesTotal; i++){
		var title = titles.eq(i);
		var chapter = title.next();
		$("#titles").append("<div class=\"link\" id=\"" + i + "\">" + title.html() + "</div>");
		title.attr("class", i);
		title.css("display", "none");
		chapter.css("display", "none");
	}
	titles.first().css("display", "block");
	titles.first().next().css("display", "block");
	$(".link").first().css("color", activeLinkColor);
	
	// Funktiot navigaatiopalkin avaamiseen ja sulkemiseen
	var sbInitWidth = $("#nav").css("width");
	function openNav() {
		$("#nav").css("width", "250px");
		$("#bar1").css("transform", "translate(0, 11px) rotate(-45deg)");
		$("#bar2").css("opacity", "0");
		$("#bar3").css("transform", "translate(0, -11px) rotate(45deg)");
		$("#titles").fadeIn(1400);
	}
	function closeNav() {
		$("#nav").css({"width" : sbInitWidth, "opacity" : "100%"});
		$("#bar1").css("transform", "translate(0, 0) rotate(0deg)");
		$("#bar2").css("opacity", "100");
		$("#bar3").css("transform", "translate(0, 0) rotate(0deg)");
		$("#titles").hide();
	}
	
	// Navigaatiopalkin avausnappi
	$("#navbutton").click(function() {
		if ($("#nav").css("width") == sbInitWidth){
			openNav();
		} else {
			closeNav();
		}
	});
	$("#nav").hover(function() {
		openNav();
	}, function() {
		closeNav();
	});
	$(".link").click(function() {
		var id = $(this).attr("id");
		$("h2").css("display", "none");
		$("h2").next().css("display", "none");
		$("."+id).css("display", "block");
		$("."+id).next().css("display", "block");
		closeNav();
		$(".link").css("color", passiveLinkColor);
		$(this).css("color", activeLinkColor);
	});
});