// Euronmerkki  MathJaxiin
window.MathJax = {
	tex: {
		macros: {
			euro: "\\;\\unicode{0x20AC}"
		}
	}
};
// GeoGebra-applettien lataus
function downloadGG(){
	var ggInfo = [];
	$(".gg").each(function() {
		var target = $(this).attr("id");
		var width = $(this).css("width").replace("px", "");
		var height = $(this).css("height").replace("px", "");
		var file = $(this).html().trim();
		ggInfo.push({"target": target, "width": width, "height": height, "file": file});
	});
	var params = [];
	var targets = [];
	ggInfo.forEach(function(item){
		params.push({"appName": "classic", "enableRightClick": "false", "width": item.width, "height": item.height, "filename": item.file, "borderColor": "#FFFFFF"});
		targets.push(item.target);
	});
	var applets = [];
	for (var i = 0; i < params.length; i++){
		applets.push(new GGBApplet(params[i], true));
	}
	window.addEventListener("load", function() {
		for (var i = 0; i < applets.length; i++){
			applets[i].inject(targets[i]);
		}
	});
}
// Funktiot navigaatiopalkin avaamiseen ja sulkemiseen
function openNav() {
	$("#bar1").css("transform", "translate(0, 11px) rotate(-45deg)");
	$("#bar2").css("opacity", "0");
	$("#bar3").css("transform", "translate(0, -11px) rotate(45deg)");
	$("#links").fadeIn();
}
function closeNav() {
	$("#bar1").css("transform", "translate(0, 0) rotate(0deg)");
	$("#bar2").css("opacity", "100");
	$("#bar3").css("transform", "translate(0, 0) rotate(0deg)");
	$("#links").fadeOut();
}
$(document).ready(function() {
	var resizeEvent = new Event("resize");
	// Otsikkotietojen lataaminen
	var titles = $("h2");
	var titlesTotal = titles.length;
	for (var i = 0; i < titlesTotal; i++){
		var title = titles.eq(i);
		var chapter = title.next();
		$("#links").append("<div class=\"link\" id=\"" + i + "\">" + title.html() + "</div>");
		title.attr("class", i);
		chapter.hide();
	}
	// Näytetään ensimmäinen luku (otsikko + sisältö)
	titles.first().addClass("activeChapter");
	titles.first().next().show();
	// Lisätään ensimmäisen luvun otsikko ja kurssin nimi navigointipalkkiin
	$("#caption").html(titles.first().html());
	$("#course").html($("h1").html());
	// Alaotsikoiden piilottaminen ja toiminta klikattaessa
	$("h3").next().hide();
	$("h3").click(function() {
		$(this).next().slideToggle("slow");
		window.dispatchEvent(resizeEvent);
	});
	// Navigaatiopalkin avausnappi
	var navOpen = false;
	$("#button").click(function() {
		if (navOpen){
			closeNav();
			navOpen = false;
		} else {
			openNav();
			navOpen = true;
		}
	});
	// Esimerkkien numerointi
	$(".example").each(function(i){
		var exampleText = $(this).find("strong").first();
		exampleText.html(exampleText.html().replace(":", " " + (i+1) + ":"));
	});
	// Navigaatiopalkin sulkeminen painamalla sisältöaluetta
	$("#main").click(function() {
		closeNav();
		navOpen = false;
	});
	// Linkin painaminen
	$(".link").click(function() {
		$(".activeChapter").removeClass("activeChapter");
		var id = $(this).attr("id");
		$("."+id).addClass("activeChapter");
		$("h2").next().hide();
		$("."+id).next().show();
		$("#caption").html($(this).html());
		closeNav();
		navOpen = false;
		window.dispatchEvent(resizeEvent);
	});
});