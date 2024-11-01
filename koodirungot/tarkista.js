$(document).ready(function() {
	//var correctAnswers = ["9", "15", "25", "4 1/2"];
	$(".tarkista").keydown(function(e) {
		if (e.key == "Enter" || e.key == "Tab") {
			var item = +$(this).attr("id");
			var corr = correctAnswers[item];
			var user = $(this).val();
			if (user == corr) {
				$(this).css("background-color", "#80FF80");
				$(this).next("span").hide();
			} else {
				if (user != "") {
					$(this).next("span").show();
					$(this).css("background-color", "#FFCCCC");
				}
			}
		}
	});
	$(".vihje").click(function() {
		$(this).parent().next().slideToggle();
	});
});