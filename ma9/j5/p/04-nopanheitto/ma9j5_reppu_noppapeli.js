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
		var nopat = [];
		for (var i = 0; i < 2; i++) {
			var noppa = arvo(1, 6);
			nopat.push(noppa);
			var selector = "#noppa" + String(i + 1);
			$(selector).attr("src", "arpakuutio_" + noppa + ".png");
		}
		var tulo = Math.round(nopat[0] * nopat[1]);
		$("#tulo").html(tulo);
		if (tulo > 10) {
			saldo = saldo + panos;
			if (panos == 1) {
				$("#palaute").html("Voitit " + panos + " euron!");
			} else {
				$("#palaute").html("Voitit " + panos + " euroa!");
			}
		} else {
			saldo = saldo - panos;
			if (panos == 1) {
				$("#palaute").html("Hävisit " + panos + " euron.<br>Parempi onni ensi kerralla.");
			} else {
				$("#palaute").html("Hävisit " + panos + " euroa.<br>Parempi onni ensi kerralla.");
			}
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