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
            if (produtor.length == 7) {
                $("#cartao").hide();
                $("#cartao1").hide();
                $("#cartao2").hide();
                $("#paypal").show();
                $("#paypal1").show();
                var epaypal = produtor[5];
                var ppaypal = produtor[6];
                document.getElementById("epaypal").innerHTML = epaypal;
                document.getElementById("ppaypal").innerHTML = ppaypal;
            } else if (produtor.length == 9) {
                $("#cartao").show();
                $("#cartao1").show();
                $("#cartao2").show();
                $("#paypal").hide();
                $("#paypal1").hide();
                var numcartao = produtor[5];
                var mes = produtor[6];
                var ano = produtor[7];
                var codigo = produtor[8];
                var validade = mes + "/" + ano;
                document.getElementById("numcartao").innerHTML = numcartao;
                document.getElementById("validade").innerHTML = validade;
                document.getElementById("codigo").innerHTML = codigo;
            } else {
                $("#cartao").hide();
                $("#cartao1").hide();
                $("#cartao2").hide();
                $("#paypal").hide();
                $("#paypal1").hide();
            }
            editar = function () {
                $("#editar").show();
                $("#loginbotoes").hide();
                $("#editarbotoes").show();
            }
            pagamento = function () {
                var cartaocredito = document.getElementById("cartaocredito").selected;
                var paypal = document.getElementById("pay").selected;
                if (cartaocredito == true) {
                    $("#card").show();
                    $("#payment").hide();
                } else if (paypal == true) {
                    $("#card").hide();
                    $("#payment").show();
                } else {
                    $("#card").hide();
                    $("#payment").hide();
                }
            }
            guardar = function () {
                var primeironome = document.getElementById("primeironome").value;
                var ultimonome = document.getElementById("ultimonome").value;
                var email = document.getElementById("registoEmail").value;
                var password = document.getElementById("registoPassword").value;
                var morada = document.getElementById("address").value;
                var paypal = document.getElementById("pay").selected;
                var cartao = document.getElementById("cartaocredito").selected;
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
                if (paypal == true) {
                    var emailpaypal = document.getElementById("emailpaypal").value;
                    var passpaypal = document.getElementById("passpaypal").value;
                    if (emailpaypal != "") {
                        produtor[5] = emailpaypal;
                    }
                    if (passpaypal != "") {
                        produtor[6] = passpaypal;
                    }
                } else if (cartao == true) {
                    var numcartao = document.getElementById("ncartao").value;
                    var mesvalidade = document.getElementById("mesvalidade").value;
                    var anovalidade = document.getElementById("anovalidade").value;
                    var codigo = document.getElementById("code").value;
                    if (numcartao != "") {
                        produtor[5] = numcartao;
                    }
                    if (mesvalidade != "") {
                        produtor[6] = mesvalidade;
                    }
                    if (anovalidade != "") {
                        produtor[7] = anovalidade;
                    }
                    if (codigo != "") {
                        produtor[8] = codigo;
                    }
                } else {
                    produtor.splice(5, 8);
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