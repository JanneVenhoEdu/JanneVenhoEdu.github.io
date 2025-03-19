$(document).ready(function() {
	var correctAnswers = ["(0,2)", ["76", "104"]];
	$(".tarkista").keydown(function(e) {
		if (e.key == "Enter" || e.key == "Tab") {
			var item = +$(this).attr("id");
			var corr = correctAnswers[item];
			var user = $(this).val().replace(/\s/g, "");
			if (user == corr) {
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
	$("#tarkista_button").click(function() {
		var user = [];
		for (var i = 1; i <= 4; i++){
			user.push($("#"+i).val().replace(/\s/g, ""));
		}
		user = user.map(Number);
		var corr = correctAnswers[1];
		if (user.reduce(summa) != 360){
			$(this).nextAll("span").html("Kulmien summan tulee olla 360 astetta.");
			$(this).nextAll("span").show();
			$(this).css("background-color", "#FFCCCC");
		} else if (user.filter(angle => angle < 90).length != 2){
			$(this).nextAll("span").html("Kulmista kahden pitää olla teräviä ja kahden tylppiä.");
			$(this).nextAll("span").show();
			$(this).css("background-color", "#FFCCCC");
		} else {
			for (var i = 0; i < 4; i++){
				if (Math.abs(user[i]-corr[0]) < 3){
					$("#"+(i+1)).css("background-color", "#80FF80");
					$(this).css("background-color", "#80FF80");
					$(this).nextAll("span").hide();
				} else if (Math.abs(user[i]-corr[1]) < 3){
					$("#"+(i+1)).css("background-color", "#80FF80");
					$(this).css("background-color", "#80FF80");
					$(this).nextAll("span").hide();
				} else {
					$(this).css("background-color", "#FFCCCC");
					$(this).nextAll("span").html("Tarkista virheellisten kulmien arvot.");
					$(this).nextAll("span").show();
					$("#"+(i+1)).css("background-color", "#FFCCCC");
				}
			}
		}
	});
	$(".vihje").click(function() {
		$(this).parent().next().slideToggle();
	});
	function summa(total, value){
		return total + value;
	}
});