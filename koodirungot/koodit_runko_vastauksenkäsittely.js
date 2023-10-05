// Muuttujien alustus
var vastUser = potenssi2latex(poistaValit(ggbApplet.getValueString("vastUser_0")));
var vastOikea = ggbApplet.getValue("vastOikea");
var kierros = ggbApplet.getValue("kierros");
var kierroksia = ggbApplet.getValue("kierroksia");
kierros = kierros + Math.round(24 / kierroksia);

if (vastUser == vastOikea) {
    ggbApplet.evalCommand("f = Segment(A_0,A_{" + kierros + "})");
    ggbApplet.setTextValue("vastUser_0", "");
    ggbApplet.setValue("vaihe", 1);
    ggbApplet.setValue("vinkki", 0);
    var viive = setTimeout(valmis, 1500);
} else {
    if (ggbApplet.getValue("armoa")) {
        ggbApplet.setValue("armoa", 0);
    } else {
        ggbApplet.setValue("vaarat", ggbApplet.getValue("vaarat") + 1);
        ggbApplet.setVisible("B_{" + kierros + "}", true);
    }
    ggbApplet.setValue("vinkki", 1);
    alert("Tarkista vastaus.");
}