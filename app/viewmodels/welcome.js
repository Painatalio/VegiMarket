define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            p = localStorage.getItem("p");
            c = localStorage.getItem("c");
            if (p == "certo") {
                $("#recomendados").show();
                $("#informacoes").hide();
                $("#razoes").hide();
            } else if (p != "certo" && c == "certo") {
                $("#recomendados").hide();
                $("#informacoes").hide();
                $("#razoes").hide();
            } else {
                $("#recomendados").hide();
                $("#informacoes").show();
                $("#razoes").show();
            }
        }
    }
});