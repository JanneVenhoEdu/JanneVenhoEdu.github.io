$(document).ready(function() {
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
	
	$(".link").click(function() {
		var id = $(this).attr("id");
		$("h2").css("display", "none");
		$("h2").next().css("display", "none");
		$("."+id).css("display", "block");
		$("."+id).next().css("display", "block");
	});
});