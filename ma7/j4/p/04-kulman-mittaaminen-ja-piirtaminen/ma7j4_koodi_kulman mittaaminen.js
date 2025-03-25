$(document).ready(function() {
	var correctAnswers = ["94", "tylppa", "41", "terava", "135", "tylppa", "90"];
	$(".tarkista").keydown(function(e) {
		if (e.key == "Enter" || e.key == "Tab") {
			var item = +$(this).attr("id");
			var corr = correctAnswers[item];
			var user = $(this).val().replace(/\s/g, "").replace(",", ".");
			$("#"+(item+1)).val($("#"+(item+1) + "option:first").val());
			$("#"+(item+1)).css("background-color", "#FFFFFF")
			if (Math.abs(parseInt(user)-corr) < 2) {
				$(this).css("background-color", "#80FF80");
				$(this).nextAll("span").hide();
			} else {
				if (user != "") {
					$(this).nextAll("span").show();
					$(this).css("background-color", "#FFCCCC");
				}
			}
		}
	});
	$(".valinta").change(function() {
		var user = $(this).val();
		var item = +$(this).attr("id");
		if (item == 7){
			var angle = $("#6").val().replace(/\s/g, "").replace(",", ".");
			if (angle > 0 && angle < 90){
				var corr = "terava";
			} else if (angle == 90){
				var corr = "suora";
			} else if (angle < 180){
				var corr = "tylppa";
			} else {
				var corr = "";
			}
			if (user == corr){
				$(this).css("background-color", "#80FF80");
				$(this).nextAll("span").hide();
			} else {
				$(this).nextAll("span").show();
				$(this).css("background-color", "#FFCCCC");
			}
		} else {
			var corr = correctAnswers[item];
			if (user == corr){
				$(this).css("background-color", "#80FF80");
				$(this).nextAll("span").hide();
			} else {
				$(this).nextAll("span").show();
				$(this).css("background-color", "#FFCCCC");
			}
		}
	});
	$(".vihje").click(function() {
		$(this).parent().next().slideToggle();
	});
});