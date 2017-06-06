define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            var produtores = { 'produtor@vegimarket.pt': ['produtor@vegimarket.pt','produtor','João','Pereira','Avenida do Carmo'] };
            localStorage.setItem("produtores", JSON.stringify(produtores));
            var clientes = { 'cliente@vegimarket.pt': ['cliente@vegimarket.pt', 'cliente', 'Paulo', 'Carvalho', 'Rua D. Maria das Dores', 'cliente@hotmail.com', 'cliente'] };
            localStorage.setItem("clientes", JSON.stringify(clientes));
            var conta;
            pagamento = function () {
                var cartaocredito = document.getElementById("cartaocredito").selected;
                var paypal = document.getElementById("paypal").selected;
                if (cartaocredito == true && paypal == false) {
                    $("#cartao").show();
                    $("#pay").hide();
                } else if (paypal == true && cartaocredito == false) {
                    $("#cartao").hide();
                    $("#pay").show();
                } else {
                    $("#cartao").hide();
                    $("#pay").hide();
                }
            }
            login = function () {
                conta = document.getElementById("accountype").value;
                clientes = JSON.parse(localStorage.getItem("clientes"));
                produtores = JSON.parse(localStorage.getItem("produtores"));
                var email = document.getElementById("loginEmail").value;
                var password = document.getElementById("loginPassword").value;
                if (conta == "Cliente") {
                    if (email in clientes && password == clientes[email][1]) {
                        var cliente = clientes[email];
                        localStorage.setItem("cliente", JSON.stringify(cliente));
                        localStorage.setItem("c", "certo");
                        localStorage.setItem("p", "certo");
                        alert("Seja bem-vindo, Cliente!");
                        location.reload();
                        window.location.href = "#";
                    } else if (email in produtores) {
                        alert("Tipo de conta errado!")
                    } else if (!(email in clientes)) {
                        alert("Email errado!");
                    } else if (email in clientes && password != clientes[email]) {
                        alert("Password errada!");
                    }
                } else {
                    if (email in produtores && password == produtores[email][1]) {
                        var produtor = produtores[email];
                        localStorage.setItem("produtor", JSON.stringify(produtor));
                        localStorage.setItem("c", "certo");
                        alert("Seja bem-vindo, Produtor!");
                        location.reload();
                        window.location.href = "#";
                    } else if (email in clientes) {
                        alert("Tipo de Conta errado!")
                    } else if (!(email in produtores)) {
                        alert("Email errado!");
                    } else if (email in produtores && password != produtores[email]) {
                        alert("Password errada!");
                    } 
                }
            }
            payment = function () {
                var x = document.getElementById("produtor").selected;
                if (x == true) {
                    $("#pagamento").hide();
                } else {
                    $("#pagamento").show();
                }
            }
            registo = function () {
                conta = document.getElementById("accountype").value;
                var primeironome = document.getElementById("primeironome").value;
                var ultimonome = document.getElementById("ultimonome").value;
                var email = document.getElementById("registoEmail").value;
                var password = document.getElementById("registoPassword").value;
                var repassword = document.getElementById("reenterpassword").value;
                var verificacao = document.getElementById("humancheck-1").checked;
                var morada = document.getElementById("morada").value;
                var paypal = document.getElementById("paypal").selected;
                var cartao = document.getElementById("cartaocredito").selected;
                if (conta == "Cliente") {
                    if (primeironome == "") {
                        alert("Preencha o campo do primeiro nome!")
                    } else if (ultimonome == "") {
                        alert("Preencha o campo do último nome!")
                    } else if (email == "") {
                        alert("Preencha o campo de email!")
                    } else if (email.indexOf("@vegimarket.pt") == -1) {
                        alert("O email tem de ter @vegimarket.pt")
                    } else if (password == "") {
                        alert("Preencha o campo da password!")
                    } else if (repassword == "") {
                        alert("Re-introduza a password!")
                    } else if (password != repassword) {
                        alert("As passwords não são iguais!")
                    } else if (morada == "") {
                        alert("Preencha o campo da morada!")
                    } else if (verificacao == false) {
                        alert("Creio que seja uma máquina como eu!")
                    } else {
                        alert("Conta criada com sucesso!");
                        if (paypal == true) {
                            var epaypal = document.getElementById("emailpaypal").value;
                            var ppaypal = document.getElementById("passpaypal").value;
                            clientes[email] = [email, password, primeironome, ultimonome, morada, epaypal, ppaypal];
                        } else if (cartao == true) {
                            var numcartao = document.getElementById("numcartao").value;
                            var mes = document.getElementById("mesvalidade").value;
                            var ano = document.getElementById("anovalidade").value;
                            var codigo = document.getElementById("codigo").value;
                            clientes[email] = [email, password, primeironome, ultimonome, morada, numcartao, mes, ano, codigo];
                        } else {
                            clientes[email] = [email, password, primeironome, ultimonome, morada];
                        }
                        localStorage.setItem("clientes", JSON.stringify(clientes));
                    }
                } else {
                    if (primeironome == "") {
                        alert("Preencha o campo do primeiro nome!")
                    } else if (ultimonome == "") {
                        alert("Preencha o campo do último nome!")
                    } else if (email == "") {
                        alert("Preencha o campo de email!")
                    } else if (email.indexOf("@vegimarket.pt") == -1) {
                        alert("O email tem de ter @vegimarket.pt")
                    } else if (password == "") {
                        alert("Preencha o campo da password!")
                    } else if (repassword == "") {
                        alert("Re-introduza a password!")
                    } else if (password != repassword) {
                        alert("As passwords não são iguais!")
                    } else if (morada == "") {
                        alert("Preencha o campo da morada!")
                    } else if (verificacao == false) {
                        alert("Creio que seja uma máquina como eu!")
                    } else {
                        alert("Conta criada com sucesso!");
                        produtores[email] = [email, password, primeironome, ultimonome, morada];
                        localStorage.setItem("produtores", JSON.stringify(produtores));
                    }
                }
            }
        }
    }
});