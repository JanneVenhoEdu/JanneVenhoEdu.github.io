// Seuraava-painike	
var esim = ggbApplet.getValue("esim");
if (esim < 10) {
    ggbApplet.setValue("esim", esim + 1);
} else {
    ggbApplet.setValue("vinkki", 0);
    ggbApplet.setValue("grade", 0);
    ggbApplet.setValue("vaarat", 0);
    ggbApplet.setValue("vaihe", 0);
    ggbApplet.setValue("vinkit", 0);
    ggbApplet.setValue("armoa", 1);
    // Nollataan etenemispalkki
    ggbApplet.evalCommand("f=Segment(A_0, A_0)");
    for (var i = 0; i < 24; i++) {
        ggbApplet.setColor("A_{" + i + "}", 0, 0, 0);
        ggbApplet.setVisible("B_{" + i + "}", false);
    }
    ggbApplet.setValue("esim", 0);
    ggbApplet.setValue("kierros", 0);
    ggbApplet.setValue("n", 1);
}

// Edellinen-painike
ggbApplet.setValue("esim", ggbApplet.getValue("esim") - 1);

// esim-muuttuja
var esim = ggbApplet.getValue("esim");
if (esim == 0) {
    ggbApplet.setCaption("seuraava", "Aloita");
} else if (esim == 10) {
    ggbApplet.setCaption("seuraava", "Tehtävään");
} else {
    ggbApplet.setCaption("seuraava", "Seuraava");
}

// Armoa-ehtorakenne
    if (ggbApplet.getValue("armoa")) {
        ggbApplet.setValue("armoa", 0);
    } else {
        ggbApplet.setValue("vaarat", ggbApplet.getValue("vaarat") + 1);
        ggbApplet.setVisible("B_{" + kierros + "}", true);
    }
    ggbApplet.setValue("vinkki", 1);
    alert("Yritä uudelleen.");

// Oikea vastaus
    ggbApplet.evalCommand("f = Segment(A_0,A_{" + kierros + "})");
    ggbApplet.setTextValue("vastUser", "");
    ggbApplet.setValue("vaihe", 1);
    ggbApplet.setValue("vinkki", 0);
    ggbApplet.setValue("valmis", 1);
    var viive = setTimeout(valmis, 1500);

// Globaali JavaScript
function ggbOnInit() {
    ggbApplet.setValue("vaihe", 0);
    ggbApplet.enableShiftDragZoom(false);
}

// Valmis-funktio
function valmis() {
    ggbApplet.setValue("vaihe", 0);
    var kierros = ggbApplet.getValue("kierros");
    kierros = kierros + 2;
    ggbApplet.setValue("kierros", kierros);
    if (kierros == 24) {
        var vinkit = ggbApplet.getValue("vinkit");
        var vaarat = ggbApplet.getValue("vaarat");
        var vinkkiPisteet = (0.2 * vinkit).toFixed(1);
        var vaaratPisteet = (0.5 * vaarat).toFixed(1);
        var pisteet = (12 - vinkkiPisteet - vaaratPisteet).toFixed(1);
        ggbApplet.setValue("grade", pisteet);
        ggbApplet.setTextValue("lopetus_o", "\\color{olivegreen}\\text{Oikein: 12 kpl \\rightarrow 12 \\cdot 1 p = 12 p}");
        ggbApplet.setTextValue("lopetus_h", "\\color{orange}\\text{Vinkit: " + vinkit + " kpl \\rightarrow " + vinkit + " \\cdot 0.2 p = " + vinkkiPisteet + " p}");
        ggbApplet.setTextValue("lopetus_v", "\\color{red}\\text{Väärin: " + vaarat + " kpl \\rightarrow " + vaarat + " \\cdot 0.5 p = " + vaaratPisteet + " p}");
        ggbApplet.setTextValue("lopetus_p", "\\text{Pisteet: \\color{olivegreen}12 p \\color{orange}- " + vinkkiPisteet + " p \\color{red}- " + vaaratPisteet + " p \\color{black}= " + pisteet + " p");
    } else {
        var n = Math.floor(kierros / 12) + 1;
        ggbApplet.setValue("n", n);
        ggbApplet.evalCommand("SelectObjects(tekstikenttä_0)");
    }
}