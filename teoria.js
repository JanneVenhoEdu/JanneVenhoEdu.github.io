// Euronmerkki  MathJaxiin
window.MathJax = {
	tex: {
		macros: {
			euro: "\\;\\unicode{0x20AC}"
		}
	}
};
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
	titles.first().next().show();
	// Lisätään ensimmäisen luvun otsikko ja kurssin nimi navigointipalkkiin
	$("#caption").html(titles.first().html());
	$("#course").html($("h1").html());
	// Alaotsikoiden piilottaminen ja toiminta klikattaessa
	$("h3").next().hide();
	$("h3").click(function() {
		$(this).next().slideToggle("slow");
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
	});
});