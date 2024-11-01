$(document).ready(function() {
	var limits = [
		[0, 1],
		[1/2, 1],
		[1/5, 3/5],
		[1/3, 2/3]
	];
	$("button").click(function() {
		var item = +$(this).attr("id");
		var lower = limits[item][0];
		var upper = limits[item][1];
		var fracs = $(this).siblings("input");
		var fracsArr = [];
		for (var i = 0; i < fracs.length; i++){
			var frac = fracs.eq(i).val().replace(/\s/g, "");
			fracsArr.push(eval(frac));
		}
		var errMsgs = $(this).siblings("span");
		for (var i = 0; i < fracsArr.length; i++){
			var errMsg = "";
			if (fracsArr[i] > lower && fracsArr[i] < upper){
				if (fracsArr[i] == fracsArr[(i+1)%3] || fracsArr[i] == fracsArr[(i+2)%3]){
					fracs.eq(i).css("background-color", "#FFCCCC");
					errMsgs.eq(i).show();
					errMsg = errMsg + (i+1) + ". kenttä: Murtoluvut eivät voi olla yhtä suuria. ";
				} else {
					fracs.eq(i).css("background-color", "#80FF80");
					errMsgs.eq(i).hide();
				}
			} else {
				fracs.eq(i).css("background-color", "#FFCCCC");
				errMsgs.eq(i).show();
				errMsg = errMsg + (i+1) + ". kenttä: Murtoluku ei ole annetulla välillä. ";
			}
			errMsgs.eq(i).html(errMsg);
		}
	});
	$(".vihje").click(function() {
		$(this).parent().next().slideToggle();
	});
});