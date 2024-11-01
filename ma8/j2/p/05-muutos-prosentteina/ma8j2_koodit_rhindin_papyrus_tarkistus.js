// Funktio murtaa murtoluvun yksikkömurtolukujen summaksi, ja palauttaa summan
function murra(luku) {
	[oso, nim] = luku.split("/");
	var summa = "";
	var jaljella = eval(luku);
	for (var i = 2; i < 1000; i++) {
		if (jaljella > 1 / i) {
			summa = summa + "1/" + i + "+";
			jaljella = jaljella - 1 / i;
		} else if (Math.abs(jaljella - 1 / i) < 0.00001) {
			summa = summa + "1/" + i;
			return summa;
		}
	}
	return summa.substr(0, summa.length - 1);
}
// Funktio laskee murtolukujen summan arvon
function laskeArvo(murtolauseke) {
	var summa = 0;
	var murtoluvut = murtolauseke.split("+");
	for (var i = 0; i < murtoluvut.length; i++) {
		summa = summa + eval(murtoluvut[i]);
	}
	return summa;
}
// Funktio tarkistaa syötteet, ja palauttaa sopivan virhetekstin.
function tarkista(murto1, murto2, userArvo, oikeaArvo) {
	if (murto1 == "" || murto2 == "") {
		return "Murtoluku puuttuu.";
	}
	[oso1, nim1] = murto1.split("/");
	[oso2, nim2] = murto2.split("/");
	if (oso1 != "1" || oso2 != "1") {
		return "Osoittajan tulee olla 1.";
	}
	if (nim1 == nim2) {
		return "Lukujen pitää olla erinimiset.";
	}
	if (userArvo == oikeaArvo) {
		return "Oikein, mutta 1. murtoluvun tulee olla suurempi.";
	}
	return "Korjaa punaiset kentät.";
}

function tarkistaTeht(kohta, a, b, oikea) {
	// Alustetaan muuttujat
	var vastUser_a = $("#" + a).val();
	var vastUser_b = $("#" + b).val();
	var vastUser1 = vastUser_a + "+" + vastUser_b;
	var vastUser2 = vastUser_b + "+" + vastUser_a;
	var vastOikea = murra(oikea);
	var userArvo = laskeArvo(vastUser1);
	var oikeaArvo = laskeArvo(vastOikea);
	var palaute = "";

	// Tarkistetaan vastaus
	if (vastUser1 == vastOikea || vastUser2 == vastOikea) {
		$("#" + a).css("background-color", "#80FF80");
		$("#" + b).css("background-color", "#80FF80");
		$("#" + kohta).hide();
	} else {
		palaute = tarkista(vastUser_a, vastUser_b, userArvo, oikeaArvo);
		$("#" + kohta).html(palaute);
		$("#" + kohta).show();
		if (vastOikea.indexOf(vastUser_a) == -1 || vastUser_a == "") {
			$("#" + a).css("background-color", "#FFCCCC");
		} else {
			$("#" + a).css("background-color", "#FFFFFF");
		}
		if (vastOikea.indexOf(vastUser_b) == -1 || vastUser_b == "") {
			$("#" + b).css("background-color", "#FFCCCC");
		} else {
			$("#" + b).css("background-color", "#FFFFFF");
		}
	}
}
// Funktio tarkistaa syötteet, ja palauttaa sopivan virhetekstin.
function tarkista3(murto1, murto2, murto3, userArvo, oikeaArvo) {
	if (murto1 == "" || murto2 == "" || murto3 == "") {
		return "Murtoluku puuttuu.";
	}
	[oso1, nim1] = murto1.split("/");
	[oso2, nim2] = murto2.split("/");
	[oso3, nim3] = murto3.split("/");
	if (oso1 != "1" || oso2 != "1" || oso3 != "1") {
		return "Osoittajan tulee olla 1.";
	}
	if (nim1 == nim2 || nim1 == nim3 || nim2 == nim3) {
		return "Lukujen pitää olla erinimiset.";
	}
	if (userArvo == oikeaArvo) {
		return "Oikein, mutta 1. murtoluvun tulee olla suurempi.";
	}
	return "Korjaa punaiset kentät.";
}

// Funktio tarkistaa f-kohdan kolmen murtoluvun vastauksen.
function tarkistaF(kohta, a, b, c, oikea) {
	var vastUser_a = $("#" + a).val();
	var vastUser_b = $("#" + b).val();
	var vastUser_c = $("#" + c).val();
	var vastUser1 = vastUser_a + "+" + vastUser_b + "+" + vastUser_c;
	var vastUser2 = vastUser_a + "+" + vastUser_c + "+" + vastUser_b;
	var vastUser3 = vastUser_b + "+" + vastUser_a + "+" + vastUser_c;
	var vastUser4 = vastUser_b + "+" + vastUser_c + "+" + vastUser_a
	var vastUser5 = vastUser_c + "+" + vastUser_a + "+" + vastUser_b;
	var vastUser6 = vastUser_c + "+" + vastUser_b + "+" + vastUser_a;
	var vastOikea = murra(oikea);
	var userArvo = laskeArvo(vastUser1);
	var oikeaArvo = laskeArvo(vastOikea);
	var palaute = "";

	// Tarkistetaan vastaus
	if (vastUser1 == vastOikea || vastUser2 == vastOikea || vastUser3 == vastOikea || vastUser4 == vastOikea || vastUser5 == vastOikea || vastUser6 == vastOikea) {
		$("#" + a).css("background-color", "#80FF80");
		$("#" + b).css("background-color", "#80FF80");
		$("#" + c).css("background-color", "#80FF80");
		$("#" + kohta).hide();
	} else {
		palaute = tarkista3(vastUser_a, vastUser_b, vastUser_c, userArvo, oikeaArvo);
		$("#" + kohta).html(palaute);
		$("#" + kohta).show();
		if (vastOikea.indexOf(vastUser_a) == -1 || vastUser_a == "") {
			$("#" + a).css("background-color", "#FFCCCC");
		} else {
			$("#" + a).css("background-color", "#FFFFFF");
		}
		if (vastOikea.indexOf(vastUser_b) == -1 || vastUser_b == "") {
			$("#" + b).css("background-color", "#FFCCCC");
		} else {
			$("#" + b).css("background-color", "#FFFFFF");
		}
		if (vastOikea.indexOf(vastUser_c) == -1 || vastUser_c == "") {
			$("#" + c).css("background-color", "#FFCCCC");
		} else {
			$("#" + c).css("background-color", "#FFFFFF");
		}
	}
}