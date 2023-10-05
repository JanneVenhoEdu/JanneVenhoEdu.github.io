// Jatkojalostettu satunnaislukugeneraattori
function arvo(ala, yla, tarkkuus, kielletyt) {
    if (tarkkuus == undefined) {
        tarkkuus = 0;
    }
    tark = Math.pow(10, tarkkuus);
	var lukuja = (Math.abs(yla-ala)*tark+1)/tark;
    yla = yla*lukuja;
    if (kielletyt == undefined) {
        kielletyt = [];
    }
    do {
        var luku = Math.round(Math.random() * yla * tark) / tark;
        luku = +(luku%lukuja+ala).toFixed(tarkkuus);
    } while (kielletyt.includes(luku));
    return luku;
}