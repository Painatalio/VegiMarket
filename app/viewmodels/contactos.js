define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            var c = localStorage.getItem("c");
            var p = localStorage.getItem("p");
            if (c == "certo") {
                if (p != "certo") {
                    var produtor = JSON.parse(localStorage.getItem("produtor"));
                    document.getElementById("nome").value = produtor[2] + " " + produtor[3];
                    document.getElementById("email").value = produtor[0];
                } else {
                    var cliente = JSON.parse(localStorage.getItem("cliente"));
                    document.getElementById("nome").value = cliente[2] + " " + cliente[3];
                    document.getElementById("email").value = cliente[0];
                }
            }
            enviar = function () {
                var nome = document.getElementById("nome").value;
                var email = document.getElementById("email").value;
                var telemovel = document.getElementById("telemovel").value;
                var mensagem = document.getElementById("mensagem").value;
                if (nome != "" && email != "" && telemovel != "" && mensagem != "") {
                    alert("Mensagem enviada com sucesso! Obrigado !");
                    location.reload();
                }
            }
        }
    }
});