// Funktio tarkistaa kahden polynomin oikeellisuuden.
function tarkistaPolynomi(oikea, user, jarjestysMerkitsee) {
    if (jarjestysMerkitsee == undefined) {
        jarjestysMerkitsee = true;
    }

    if (user == oikea) {
        return true;
    }

    // Tehdään syötteistä lista, lisätään termeihin +-merkit
    var oikeaArr = ("+" + oikea.replace(/\+/g, "p+").replace(/-/g, "p-").replace(/\{|\}/g, "")).split("p");
    if (oikeaArr[0] == "+"){
    	oikeaArr.shift();
    }
    oikea = oikeaArr.join("");

    var userArr = ("+" + user.replace(/\+/g, "p+").replace(/-/g, "p-").replace(/\{|\}/g, "")).split("p");
    if (userArr[0] == "+"){
    	userArr.shift();
    }
    
    // Jos käyttäjän syötteessä on vielä sulkeita
    if (/\(|\)/.test(user)) {
        alert("Poista sulkeet");
        return false;
    }

    // Jos käyttäjän syötteessä on väärä määrä termejä
    if (userArr.length != oikeaArr.length) {
        alert("Syötteessä on väärä määrä termejä.");
        return false;
    }
    
    // Etsitään virheelliset termit
    try {
        var virheellisetTermit = [];
        for (var i = 0; i < userArr.length; i++) {
            var termi = new RegExp(userArr[i].replace(/\^/g, "\\^").replace(/\+/g, "\\+")+"([+-]|$)");
            if (!termi.test(oikea)) {
                virheellisetTermit.push(i + 1);
            }
        }
    } catch (err) {
        alert("Tarkista syöte.");
        return false;
    }

    // Annetaan palaute virheellisistä termeistä.
    switch (virheellisetTermit.length) {
        case 1:
            alert("Tarkista " + virheellisetTermit[0] + ". termi.");
            return false;
        case 2:
            alert("Tarkista " + virheellisetTermit[0] + ". ja " + virheellisetTermit[1] + ". termi.");
            return false;
        case 3:
            alert("Tarkista " + virheellisetTermit[0] + "., " + virheellisetTermit[1] + ". ja " + virheellisetTermit[2] + ". termi.");
            return false;
        case 4:
            alert("Tarkista termit.");
            return false;
    }

    // Jos termit olivat oikein, niiden järjestys saattaa olla muu kuin ennalta oletettu.
    if (oikeaArr.sort().join("+") == userArr.sort().join("+")) {
        if (jarjestysMerkitsee) {
            alert("Järjestä termit laskevan asteen mukaiseen järjestykseen.");
            return false;
        } else {
            return true;
        }
    }

    alert("Tarkista syöte.");
    return false;
}