$(document).ready(function(){
	// Luodaan alkuun otsikointi
	$("aikataulu").prepend("<h3>Menneet</h3><div id=\"previous\" style=\"display: none;\"></div><h3>Tänään</h3><div id=\"today\"></div><h3>Tulevat</h3><div id=\"coming\" style=\"display: none;\"></div>");
	// Määritetään viikonpäivien nimet ja luodaan tämän päivän päivämäärä
	var weekday = ["ma", "ti", "ke", "to", "pe", "la", "su"];
	var today = new Date();
	today.setHours(0, 0, 0, 0);
	
	// Lajitellaan kaikki tehtävät päivämäärittäin
	$(".date").each(function() {
		var dateText = $(this).attr("id");
		var date = new Date(dateText);
		date.setHours(0, 0, 0, 0);
		$(this).prepend("<h4>" + weekday[date.getUTCDay()] + " " + date.toLocaleDateString() + "</h4>");
		if (date < today){
			$("#previous").append($(this).html());
		} else if (date > today){
			$("#coming").append($(this).html());
		} else {
			$("#today").append($(this).html());
		}
		$(this).remove();
	});
	
	// Jos nykyiselle päivämäärälle ei ole tehtäviä, niin lisätään teksti.
	if($("#today").html() == ""){
		$("#today").html("<p>Ei tehtäviä tälle päivälle. Tarkista menneet tapahtumat.</p>");
	}
	
	// Luodaan toiminto otsikon klikkaamiselle.
	$("h3").click(function() {
		$(this).next().slideToggle("slow");
	});
	
	// Lisätään tyylejä
	$("#aikataulu").css({
		"font-family": "Lato, sans-serif",
		"font-size": "12px"
	});
	$("#aikataulu p").css({
		"margin-left" : "30px"
	});
	$("#aikataulu h3").css({
		"background-color" : "#60993E",
		"color" : "white",
		"margin-bottom" : "-10px",
		"cursor" : "pointer",
		"font-size" : "18px",
		"border-radius" : "5px",
		"padding" : "5px"
	});
});