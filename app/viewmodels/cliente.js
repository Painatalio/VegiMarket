define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            var cliente = JSON.parse(localStorage.getItem("cliente"));
            var email = cliente[0];
            var password = cliente[1];
            var primeironome = cliente[2];
            var ultimonome = cliente[3];
            var nome = primeironome + " " + ultimonome;
            var morada = cliente[4];
            var conta;
            document.getElementById("email").innerHTML = email;
            document.getElementById("nome").innerHTML = nome;
            document.getElementById("morada").innerHTML = morada;
            if (cliente.length == 7) {
                $("#cartao").hide();
                $("#cartao1").hide();
                $("#cartao2").hide();
                $("#paypal").show();
                $("#paypal1").show();
                var epaypal = cliente[5];
                var ppaypal = cliente[6];
                document.getElementById("epaypal").innerHTML = epaypal;
                document.getElementById("ppaypal").innerHTML = ppaypal;
            } else if (cliente.length == 9) {
                $("#cartao").show();
                $("#cartao1").show();
                $("#cartao2").show();
                $("#paypal").hide();
                $("#paypal1").hide();
                var numcartao = cliente[5];
                var mes = cliente[6];
                var ano = cliente[7];
                var codigo = cliente[8];
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
                var paypal = document.getElementById("pay").selected;
                var cartao = document.getElementById("cartaocredito").selected;
                if (primeironome != "") {
                    cliente[2] = primeironome;
                }
                if (ultimonome != "") {
                    cliente[3] = ultimonome;
                }
                if (email != "" && email.indexOf("@vegimarket.pt") != -1) {
                    cliente[0] = email;
                } else if (email.indexOf("@vegimarket.pt") == -1 && email != "") {
                    alert("O email tem de ter @vegimarket.pt")
                }
                if (password != "") {
                    cliente[1] = password;
                }
                if (morada != "") {
                    cliente[4] = morada;
                }
                if (paypal == true) {
                    var emailpaypal = document.getElementById("emailpaypal").value;
                    var passpaypal = document.getElementById("passpaypal").value;
                    if (emailpaypal != "") {
                        cliente[5] = emailpaypal;
                    }
                    if (passpaypal != "") {
                        cliente[6] = passpaypal;
                    }
                } else if (cartao == true) {
                    var numcartao = document.getElementById("ncartao").value;
                    var mesvalidade = document.getElementById("mesvalidade").value;
                    var anovalidade = document.getElementById("anovalidade").value;
                    var codigo = document.getElementById("code").value;
                    if (numcartao != "") {
                        cliente[5] = numcartao;
                    }
                    if (mesvalidade != "") {
                        cliente[6] = mesvalidade;
                    }
                    if (anovalidade != "") {
                        cliente[7] = anovalidade;
                    }
                    if (codigo != "") {
                        cliente[8] = codigo;
                    }
                } else {
                    cliente.splice(5, 8);
                }
                alert("Perfil alterado com sucesso!");
                localStorage.setItem("cliente", JSON.stringify(cliente));
                $("#editar").hide();
                $("#loginbotoes").show();
                $("#editarbotoes").hide();
                location.reload();
            }
            logout = function () {
                localStorage.setItem("c", "errado");
                localStorage.setItem("p", "errado");
                alert("Até Breve, Cliente!");
                location.reload();
                window.location.href = "#";
            }
        }
    }
});