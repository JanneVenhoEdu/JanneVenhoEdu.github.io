$(document).ready(function () {
	// Värien alustus
	var backgroundColor = "#ffffff";
	var fontColor = "#191919";
	var navBackgroundColor = fontColor;
	var linkFontColor = backgroundColor;
	var hoverLinkColor = "#00afb975";
	var activeLinkColor = "#7cf8ff";
	var exampleBackgroundColor = "#60993e20";
	var titleBackgroundColor = "#00afb940";
	var titleFontColor = fontColor;
	var subtitleBackgroundColor = "#93162140";
	var subtitleFontColor = fontColor;
	
	// Mittojen alustus
	var navWidthClose = "45px";
	var mainMarginLeft = "60px";
	var navWidthOpen = "250px";
	var linkFontSize = "25px";
	var borderRadius = "10px";
	
	// Otsikkotietojen lataaminen ja sisällön piilottaminen
	var titles = $("h2");
	var titlesTotal = titles.length;
	for (var i = 0; i < titlesTotal; i++){
		var title = titles.eq(i);
		var chapter = title.next();
		$("#links").append("<div class=\"link\" id=\"" + i + "\">" + title.html() + "</div>");
		$("#minilinks").append("<div class=\"minilink\" id=\"m" + i + "\">" + (i+1) + "</div>");
		title.attr("class", i);
		title.css("display", "none");
		chapter.css("display", "none");
	}
	titles.first().css("display", "block");
	titles.first().next().css("display", "block");
	
	// Alaotsikoiden piilottaminen ja toiminta klikattaessa
	$("h3").next().css("display", "none");
	$("h3").click(function() {
		$(this).next().slideToggle("slow");
	});
	
	// Tyylien alustus
	$("body").css({
		"font-family" : "Lato, sans-serif",
		"background-color" : backgroundColor,
		"margin-bottom" : "100px"
	});
	$("#nav").css({
		"height" : "100%",
		"width" : navWidthClose,
		"position" : "fixed",
		"z-index" : "1",
		"top" : "0",
		"left" : "0",
		"background-color" : navBackgroundColor,
		"transition" : "0.5s",
		"overflow-x" : "hidden",
		"border-radius" : "0px 5px 5px 0px"
	});
	$(".link").css({
		"padding" : "8px 8px 8px 8px",
		"text-decoration" : "none",
		"font-size" : linkFontSize,
		"z-index" : "2",
		"color" : linkFontColor,
		"display" : "block",
		"cursor" : "pointer"
	});
	$(".minilink").css({
		"padding" : "8px 8px 8px 15px",
		"text-decoration" : "none",
		"font-size" : linkFontSize,
		"z-index" : "2",
		"color" : linkFontColor,
		"display" : "block",
		"cursor" : "pointer"
	});
	$(".link").first().css("color", activeLinkColor);
	$(".minilink").first().css("color", activeLinkColor);
	$("#links").css("display", "none");
	$(".link").hover(function(){
		$(this).css("background-color", hoverLinkColor);
	}, function() {
		$(this).css("background-color", navBackgroundColor);
	});
	$("#navbutton").css({
		"margin-left" : "5px",
		"color" : linkFontColor
	});
	$("#bar1, #bar2, #bar3").css({
		"width" : "35px",
		"height" : "5px",
		"background-color" : linkFontColor,
		"color" : linkFontColor,
		"margin" : "6px 0px",
		"transition" : "0.5s",
		"border-radius" : borderRadius
	});
	$("#main").css({
		"margin-left" : navWidthClose,
		"padding-left" : "15px"
	});
	$(".example").css({
		"background-color" : exampleBackgroundColor,
		"padding" : "10px",
		"border-radius" : borderRadius
	});
	$("h2").css({
		"background-color" : titleBackgroundColor,
		"color" : titleFontColor,
		"padding" : "10px",
		"margin-bottom" : "-10px",
		"font-size" : "200%",
		"border-radius" : borderRadius
	});
	$("h3").css({
		"background-color" : subtitleBackgroundColor,
		"color" : subtitleFontColor,
		"padding" : "10px",
		"margin-bottom" : "-10px",
		"cursor" : "pointer",
		"border-radius" : "15px"
	});
	$("code").css({
		"font-size" : $("p").css("font-size")
	});
	
	// Funktiot navigaatiopalkin avaamiseen ja sulkemiseen
	function openNav() {
		$("#nav").css("width", navWidthOpen);
		$("#bar1").css("transform", "translate(0, 11px) rotate(-45deg)");
		$("#bar2").css("opacity", "0");
		$("#bar3").css("transform", "translate(0, -11px) rotate(45deg)");
		$("#links").fadeIn(1000);
		$("#minilinks").hide();
	}
	function closeNav() {
		$("#nav").css("width", navWidthClose);
		$("#bar1").css("transform", "translate(0, 0) rotate(0deg)");
		$("#bar2").css("opacity", "100");
		$("#bar3").css("transform", "translate(0, 0) rotate(0deg)");
		$("#links").hide();
		$("#minilinks").fadeIn(1000);
	}	
	
	// Navigaatiopalkin avausnappi
	$("#navbutton").click(function() {
		if ($("#nav").css("width") == navWidthClose){
			openNav();
		} else {
			closeNav();
		}
	});
	
	// Navigaatiopalkin avaaminen viemällä hiiri palkin päälle
	/*$("#nav").hover(function() {
		openNav();
	}, function() {
		closeNav();
	});*/
	
	// Navigaatiopalkin sulkeminen painamalla sisältöaluetta
	$("#main").click(function() {
		closeNav();
	});
	
	// Linkin painaminen
	$(".link").click(function() {
		var id = $(this).attr("id");
		$("h2").css("display", "none");
		$("h2").next().css("display", "none");
		$("."+id).css("display", "block");
		$("."+id).next().css("display", "block");
		closeNav();
		$(".link").css("color", linkFontColor);
		$(this).css("color", activeLinkColor);
		$(".minilink").css("color", linkFontColor);
		$("#m"+id).css("color", activeLinkColor);
	});
	
	// Minilinkin painaminen
	$(".minilink").click(function() {
		var id = +$(this).html()-1;
		$("h2").css("display", "none");
		$("h2").next().css("display", "none");
		$("."+id).css("display", "block");
		$("."+id).next().css("display", "block");
		$(".link").css("color", linkFontColor);
		$("#"+id).css("color", activeLinkColor);
		$(".minilink").css("color", linkFontColor);
		$(this).css("color", activeLinkColor);
	});
	
	// Esimerkkien numerointi
	$(".example").each(function(i){
		var exampleText = $(this).find("strong").first();
		exampleText.html(exampleText.html().replace(":", " " + (i+1) + ":"));
	});
});