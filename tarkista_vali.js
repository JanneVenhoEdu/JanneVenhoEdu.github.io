$(document).ready(function() {
	$(".tarkista").keydown(function(e) {
		if (e.key == "Enter" || e.key == "Tab") {
			var item = +$(this).attr("id");
			var corr0 = correctAnswers[item][0];
			var corr1 = correctAnswers[item][1];
			var user = +$(this).val().replace(/\s/g, "").replace(",",".");
			if (user >= corr0 && user <= corr1) {
				$(this).css("background-color", "#80FF80");
				//$(this).next("span").hide();
			} else {
				if (user != "") {
					//$(this).next("span").show();
					$(this).css("background-color", "#FFCCCC");
				}
			}
		}
	});
	$(".vihje").click(function() {
		$(this).parent().next().slideToggle();
	});
	$("#bonus").click(function() {
		$(this).parent().next().slideToggle();
		$("#bonus_tarkistus").slideToggle();
	});
});