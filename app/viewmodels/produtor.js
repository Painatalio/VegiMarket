define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            var produtor = JSON.parse(localStorage.getItem("produtor"));
            var email = produtor[0];
            var password = produtor[1];
            var primeironome = produtor[2];
            var ultimonome = produtor[3];
            var nome = primeironome + " " + ultimonome;
            var morada = produtor[4];
            var conta;
            document.getElementById("email").innerHTML = email;
            document.getElementById("nome").innerHTML = nome;
            document.getElementById("morada").innerHTML = morada;
            editar = function () {
                $("#editar").show();
                $("#loginbotoes").hide();
                $("#editarbotoes").show();
            }
            guardar = function () {
                var primeironome = document.getElementById("primeironome").value;
                var ultimonome = document.getElementById("ultimonome").value;
                var email = document.getElementById("registoEmail").value;
                var password = document.getElementById("registoPassword").value;
                var morada = document.getElementById("address").value;
                if (primeironome != "") {
                    produtor[2] = primeironome;
                }
                if (ultimonome != "") {
                    produtor[3] = ultimonome;
                }
                if (email != "" && email.indexOf("@vegimarket.pt") != -1) {
                    produtor[0] = email;
                } else if (email.indexOf("@vegimarket.pt") == -1 && email != "") {
                    alert("O email tem de ter @vegimarket.pt")
                }
                if (password != "") {
                    produtor[1] = password;
                }
                if (morada != "") {
                    produtor[4] = morada;
                }
                alert("Perfil alterado com sucesso!");
                localStorage.setItem("produtor", JSON.stringify(produtor));
                $("#editar").hide();
                $("#loginbotoes").show();
                $("#editarbotoes").hide();
                location.reload();
            }
            logout = function () {
                localStorage.setItem("c", "errado");
                localStorage.setItem("p", "errado");
                alert("Até Breve, Produtor!");
                location.reload();
                window.location.href = "#";
            }
        }
    }
});