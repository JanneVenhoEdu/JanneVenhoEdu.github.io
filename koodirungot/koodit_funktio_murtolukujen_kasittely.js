// Funktio muuttaa GeoGebran CAS-laskimesta tulleen syötteen 1/2 x murtolukumuotoon x/2.
function cas2frac(expr) {
    expr = expr.replace("x", " x");
    var terms = expr.replace(/\-/g, "+-").split("+").filter(function(term){return term != ""});
    for (var i = 0; i < terms.length; i++) {
        if (terms[i].indexOf("/") != -1) {
        	[coef, vars] = terms[i].split(" ");
            [num, den] = coef.split("/");
            terms[i] = ggbApplet.evalCommandCAS(num + vars) + "/" + den;
        }
        if (i > 0 && terms[i][0] != "-") {
            terms[i] = "+" + terms[i];
        }
        terms[i] = terms[i].replace(/\s/g, "");
    }
    return terms.join("");
}
// Funktio muuttaa murtolukumuotoisen lausekkeen x/2 LaTeX-muotoiluksi \dfrac{x}{2}.
function frac2latex(expr) {
    var terms = expr.replace(/\-/g, "+-").split("+").filter(function(term){return term != ""});
    for (var i = 0; i < terms.length; i++){
    	if (terms[i].indexOf("/") != -1){
        	[num, den] = terms[i].split("/");
            terms[i] = "\\dfrac{" + num + "}{" + den + "}";
        }
        if (i > 0 && terms[i][0] != "-") {
            terms[i] = "+" + terms[i];
        }
    }
    return terms.join("");
}
// Funktio muuttaa GeoGebran CAS-laskimesta tulleen syötteen 1/2 x LaTeX-muotoiluksi \dfrac{x}{2}.
function cas2latex(expr){
	return murto2latex(cas2murto(expr));
}