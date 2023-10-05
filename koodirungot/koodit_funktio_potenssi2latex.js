// Funktio muuttaa unicode-muotoisen potenssimerkinnän muotoon kantaluku^{eksponentti}.
function potenssi2latex(teksti) {
	// ^-merkki ilman aaltosulkeita
    teksti = teksti.replace(/\^/g, "^{");
    teksti = teksti.replace(/{{/g, "{");
	var merkki = teksti.search(/\^{/);
    while (merkki != -1){
      merkki = merkki + 2;
	  if (teksti[merkki] == "-"){
		++merkki;
	  }
      while (/\d/.test(teksti[merkki])){
      	++merkki;
      }
      if (teksti[merkki] != "}"){
            teksti = teksti.substr(0, merkki) + "}" + teksti.substr(merkki, teksti.length);
      }
      var seuraava = teksti.substr(merkki, teksti.length).search(/\^{/);
      if (seuraava != -1){
      	merkki = seuraava + merkki;
      } else {
      	merkki = seuraava;
      }
    }
	// Unicode-merkkien muuttaminen
	const potenssitMap = new Map([
    	["\u2070", 0],
        ["\u00B9", 1],
        ["\u00B2", 2],
        ["\u00B3", 3],
        ["\u2074", 4],
        ["\u2075", 5],
        ["\u2076", 6],
        ["\u2077", 7],
        ["\u2078", 8],
        ["\u2079", 9],
        ["\u207B", "-"]
	]);
    const potenssitRegex = /[\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079\u207B]/;
    var merkki = teksti.search(potenssitRegex);
    while (merkki != -1){
      teksti = teksti.replace(teksti[merkki], "^{" + potenssitMap.get(teksti[merkki]));
      var seuraava = merkki + 3;
      merkki = teksti.search(potenssitRegex);
      while (merkki == seuraava){
          teksti = teksti.replace(teksti[merkki], potenssitMap.get(teksti[merkki]));
          seuraava = merkki + 1;
          merkki = teksti.search(potenssitRegex);
      }
      teksti = teksti.substr(0,seuraava) + "}" + teksti.substr(seuraava, teksti.length);
      var merkki = teksti.search(potenssitRegex);
    }
    return teksti;
}