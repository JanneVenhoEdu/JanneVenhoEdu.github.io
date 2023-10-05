// Lisätään pyöristysraja oikeaan paikkaan vinkiksi
function pyoristysraja(luku, kohta) {
    var pilkunPaikka = luku.indexOf(",");
    if (pilkunPaikka <= kohta && pilkunPaikka != -1) {
        kohta = kohta + 1;
    }
    if (luku[0] == "0") {
        kohta = kohta + 1;
    }
    return luku.substr(0, kohta) + "\\red|" + luku.substr(kohta);
}