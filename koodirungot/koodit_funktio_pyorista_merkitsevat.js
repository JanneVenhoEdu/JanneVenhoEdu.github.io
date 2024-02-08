function pyoristaPaikka(luku, tarkkuus){
	luku = +String(luku).replace(",", ".");
	var pyoristettyLuku = siirraPilkkua(siirraPilkkua(luku, tarkkuus).toFixed(), -tarkkuus);
	if (tarkkuus > 0){
		return pyoristettyLuku.toFixed(tarkkuus);
	} else {
		return pyoristettyLuku;
	}
}
function siirraPilkkua(luku, siirto){
	luku = String(luku).replace(/^0/, "");
   	var i = luku.indexOf(".");
    [koko, desi] = luku.split(".");
    if (desi == undefined) {
    	desi = "";
        i = koko.length;
    }
    var numerot = koko + desi;
    uusiPaikka = i + siirto;
    if (uusiPaikka < 0){
    	numerot = numerot.padStart(-uusiPaikka+numerot.length+1, "0");
        return +(numerot[0] + "." + numerot.substring(1));
    } else if (uusiPaikka >= numerot.length){
    	numerot = numerot.padEnd(uusiPaikka, "0");
        return +numerot;
    } else {
    	return +(numerot.substring(0, uusiPaikka) + "." + numerot.substring(uusiPaikka));
    }
}

function merkitseviaNumeroita(luku){
	if (luku.indexOf(".") == -1){
		return luku.replace(/0*$/g, "").length;
	} else {
		return luku.replace(/^0\.0*|\./g, "").length;
	}
}

function pyoristaMerkitseva(luku, merkitsevia){
	luku = String(luku).replace(",", ".");
	if (luku.indexOf(".") == -1){
		var raja = luku.length - merkitsevia;
		var pyoristettyLuku = String(pyoristaPaikka(luku, -raja));
	} else {
		[koko, desi] = luku.split(".");
		if (koko =="0"){
			var alkunollia = String(desi.match(/^0*/)).length;
			var pyoristettyLuku = String(pyoristaPaikka(luku, alkunollia + merkitsevia));
		} else {
			var pyoristettyLuku = String(pyoristaPaikka(luku, merkitsevia-koko.length));
		}
	}
	if (merkitseviaNumeroita(pyoristettyLuku) <= merkitsevia){
		return pyoristettyLuku;
	} else {
		return pyoristaMerkitseva(pyoristettyLuku, merkitsevia);
	}
}