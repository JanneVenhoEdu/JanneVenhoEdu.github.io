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
function piirraKuva(laskuri, paikka, oikea){
	var kuviot = ["🍀", "🍒", "🍊", "🍇", "🔔", "🍋"];
	var kuvio = arvo(0, 5);
    $("#rulla" + paikka).html(kuviot[kuvio]);
    if (laskuri > 0){
    	setTimeout(piirraKuva, 50, laskuri-1, paikka, oikea);
    } else {
    	$("#rulla" + paikka).html(kuviot[oikea]);
    }
}
function naytaTulokset(panos, saldo, saldoMax){
	$("#pelaa").show();
	$("#pelaa2").hide();
	$("#palaute").show();
	$("#saldo").html(saldo);
	if (panos > saldo) {
		$("#panos").html(saldo);
	}
	$("#saldoMax").html(Math.max(saldo, saldoMax));
	if (saldo == 0) {
		$("#pelaa").hide();
		$("#yhteenveto").show();
	}
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
		$("#pelaa").hide();
		$("#pelaa2").show();
		var kuviot = ["🍀", "🍒", "🍊", "🍇", "🔔", "🍋"];
		var rulla = [
		  [0, 1, 2, 5, 3, 1, 2, 5, 4, 5],
		  [0, 1, 2, 1, 3, 1, 2, 1, 4, 1],
		  [0, 3, 4, 5, 2, 3, 5, 3, 5, 2]
		];
		var panos = +$("#panos").html();
		var saldo = +$("#saldo").html();
		var kierroksia = +$("#kierroksia").html();
		$("#kierroksia").html(kierroksia + 1);
		var saldoMax = +$("#saldoMax").html();
		var hedelmatYla = [];
		var hedelmatVoitto = [];
		var hedelmatAla = [];
		for (var i = 0; i < 3; i++) {
			var hedelma = arvo(0, 9);
			hedelmatVoitto.push(rulla[i][hedelma]);
			if (hedelma == 0){
				hedelmatYla.push(rulla[i][9]);
				hedelmatAla.push(rulla[i][1]);
			} else if (hedelma == 9){
				hedelmatYla.push(rulla[i][8]);	
				hedelmatAla.push(rulla[i][0]);
			} else {
				hedelmatYla.push(rulla[i][hedelma-1]);
				hedelmatAla.push(rulla[i][hedelma+1]);
			}
			piirraKuva((i+1)*20, String(i+1), hedelmatVoitto[i]);
			piirraKuva((i+1)*20, String(i+1)+"_yla", hedelmatYla[i]);
			piirraKuva((i+1)*20, String(i+1)+"_ala", hedelmatAla[i]);
		}
		$("#palaute").hide();
		saldo = saldo - panos;
		$("#saldo").html(saldo);
		var hedelmat = hedelmatVoitto.toString();
		if (panos == 1) {
			$("#palaute").html("Hävisit " + panos + " euron.<br>Parempi onni ensi kerralla.");
		} else {
			$("#palaute").html("Hävisit " + panos + " euroa.<br>Parempi onni ensi kerralla.");
		}
		if (hedelmat == "0,0,0") {
			saldo = saldo + 24*panos;
			$("#palaute").html("Voitit " + 24*panos + " euroa!");
		} else if (hedelmat == "4,4,4" || hedelmat == "4,4,0"){
			saldo = saldo + 20*panos;
			$("#palaute").html("Voitit " + 20*panos + " euroa!");
		} else if (hedelmat == "3,3,3" || hedelmat == "3,3,0"){
			saldo = saldo + 16*panos;
			$("#palaute").html("Voitit " + 16*panos + " euroa!");
		} else if (hedelmat == "2,2,2" || hedelmat == "2,2,0"){
			saldo = saldo + 12*panos;
			$("#palaute").html("Voitit " + 12*panos + " euroa!");
		} else if (hedelmat == "1,1,4" || hedelmat == "1,1,5"){
			saldo = saldo + 8*panos;
			$("#palaute").html("Voitit " + 8*panos + " euroa!");
		} else if (/1\,1\,/.test(hedelmat)){
			saldo = saldo + 4*panos;
			$("#palaute").html("Voitit " + 4*panos + " euroa!");
		}
		setTimeout(naytaTulokset, 3350, panos, saldo, saldoMax);
	});
});