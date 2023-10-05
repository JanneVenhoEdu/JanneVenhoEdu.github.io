function pyoristaPaikka(luku, tarkkuus){
	luku = +String(luku).replace(",", ".");
	var pyoristettyLuku = (luku/Math.pow(10, -tarkkuus)).toFixed() * Math.pow(10, -tarkkuus);
	if (tarkkuus > 0){
		return pyoristettyLuku.toFixed(tarkkuus);
	} else {
		return pyoristettyLuku;
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