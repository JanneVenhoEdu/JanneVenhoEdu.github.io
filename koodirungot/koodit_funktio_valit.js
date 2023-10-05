// Funktio lisää kokonaislukuun välit kolmen numeron välein
function valit(luku) {
    luku = luku.toString();
    var lukuTeksti = "";
    var kierroksia = Math.ceil(luku.length / 3);
    for (var i = 0; i < kierroksia; i++) {
        lukuTeksti = " " + luku.substr(-3) + lukuTeksti;
        luku = luku.substr(0, luku.length - 3);
    }
    lukuTeksti = luku + lukuTeksti;
    lukuTeksti = lukuTeksti.trim();
    return lukuTeksti;
}