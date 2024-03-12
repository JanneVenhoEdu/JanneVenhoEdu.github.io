function arvo(ala, yla, tarkkuus, kielletyt) {
	if (tarkkuus == undefined) {
		tarkkuus = 0;
	}
	tark = Math.pow(10, tarkkuus);
	var lukuja = (Math.abs(yla - ala) * tark + 1) / tark;
	yla = yla * lukuja;
	if (kielletyt == undefined) {
		kielletyt = [];
	}
	do {
		var luku = Math.round(Math.random() * yla * tark) / tark;
		luku = +(luku % lukuja + ala).toFixed(tarkkuus);
	} while (kielletyt.includes(luku));
	return luku;
}
$(document).ready(function() {
	$("#panosAlas").click(function() {
		var panos = +$("#panos").html();
		if (panos > 1) {
			panos = panos - 1;
		}
		$("#panos").html(panos);
	});
	$("#panosYlos").click(function() {
		var panos = +$("#panos").html();
		var saldo = +$("#saldo").html();
		if (panos < saldo) {
			panos = panos + 1;
		}
		$("#panos").html(panos);
	});
	$("#pelaa").click(function() {
		var panos = +$("#panos").html();
		var saldo = +$("#saldo").html();
		var kierroksia = +$("#kierroksia").html();
		$("#kierroksia").html(kierroksia + 1);
		var saldoMax = +$("#saldoMax").html();
		var kolikot = [];
		var kruunat = 0;
		for (var i = 0; i < 4; i++) {
			var kolikko = arvo(0, 1);
			kolikot.push(kolikko);
			var selector = "#kolikko" + String(i + 1);
			if (kolikko == 0) {
				$(selector).attr("src", "https://reppu.mmg.fi/pluginfile.php/320208/mod_resource/content/0/kruuna.png");
				kruunat++;
			} else {
				$(selector).attr("src", "https://reppu.mmg.fi/pluginfile.php/320209/mod_resource/content/0/klaava.png");
			}

		}
		if (kruunat == 4 || kruunat == 2) {
			saldo = saldo + panos;
			if (panos == 1) {
				$("#palaute").html("Voitit " + panos + " euron!");
			} else {
				$("#palaute").html("Voitit " + panos + " euroa!");
			}
		} else if (kruunat == 1 || kruunat == 3) {
			saldo = saldo - panos;
			if (panos == 1) {
				$("#palaute").html("Hävisit " + panos + " euron.<br>Parempi onni ensi kerralla.");
			} else {
				$("#palaute").html("Hävisit " + panos + " euroa.<br>Parempi onni ensi kerralla.");
			}
		} else {
			$("#palaute").html("Ei yhtään kruunaa? Yritetäämpä uudelleen.");
		}
		$("#saldo").html(saldo);
		if (panos > saldo) {
			$("#panos").html(saldo);
		}
		$("#saldoMax").html(Math.max(saldo, saldoMax));
		if (saldo == 0) {
			$("#pelaa").hide();
			$("#yhteenveto").show();
		}
	});
});