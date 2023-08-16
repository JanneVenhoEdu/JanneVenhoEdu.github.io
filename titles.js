$(document).ready(function() {
	var otsikot = $("h2");
	var otsikoita = otsikot.length;
	for (var i = 0; i < otsikoita; i++){
		var otsikko = otsikot.eq(i).html();
		$("#titles").append("<a class=\"link\" href=\"#t" + i + "\">" + otsikko + "</a>");
		otsikot.eq(i).attr("id", "t" + i);
	}
});