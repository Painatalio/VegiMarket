define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            var cart = [];

            var Item = function (imagem, nome, preco) {
                this.imagem = imagem;
                this.nome = nome;
                this.preco = preco;
            };

            addCart = function (imagem, nome, preco) {
                for (var i in cart) {
                    if (cart[i].nome === nome) {
                        cart[i].quantidade=1;
                        return;
                    }
                }
                var item = new Item(imagem, nome, preco);
                cart.push(item);

                localStorage.setItem("carrinho", JSON.stringify(cart));
            };

            detalhes = function (titulo, preco, produtor) {
                $("#titulo").text(titulo);
                $("#prod").text(produtor);
                $("#preco").text(preco);
            };

            var produtos = ['MacaPortoNARCfrutas', 'LaranjaLisboaNARCfrutas', 'PessegoPortoHortaFina','MorangosAveiroHortaFina'];

            pesquisa = function () {
                var produto = $("#produto option:selected").prop('id');
                var produtor = $("#produtor option:selected").prop('id');
                var regiao = $("#regiao option:selected").prop('id');
                for (i = 0; i < produtos.length; i++) {
                    if (produtos[i].indexOf(produto) != -1 && produtos[i].indexOf(produtor) !=-1 && produtos[i].indexOf(regiao) != -1) {
                        $("#" + produtos[i]).removeClass('hidden');
                    } else {
                        $("#" + produtos[i]).addClass('hidden');
                    }
                }
            }

            jQuery(document).ready(function () {
                $('#qtyplus').click(function (e) {
                    e.preventDefault();
                    fieldName = $(this).attr('field');
                    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
                    if (!isNaN(currentVal)) {
                        $('input[name=' + fieldName + ']').val(currentVal + 1);
                    } else {
                        $('input[name=' + fieldName + ']').val(1);
                    }
                });
                $("#qtyminus").click(function (e) {
                    e.preventDefault();
                    fieldName = $(this).attr('field');
                    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
                    if (!isNaN(currentVal) && currentVal > 1) {
                        $('input[name=' + fieldName + ']').val(currentVal - 1);
                    } else {
                        $('input[name=' + fieldName + ']').val(1);
                    }
                });
                $('#qtyplus2').click(function (e) {
                    e.preventDefault();
                    fieldName = $(this).attr('field');
                    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
                    if (!isNaN(currentVal)) {
                        $('input[name=' + fieldName + ']').val(currentVal + 1);
                    } else {
                        $('input[name=' + fieldName + ']').val(1);
                    }
                });
                $("#qtyminus2").click(function (e) {
                    e.preventDefault();
                    fieldName = $(this).attr('field');
                    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
                    if (!isNaN(currentVal) && currentVal > 1) {
                        $('input[name=' + fieldName + ']').val(currentVal - 1);
                    } else {
                        $('input[name=' + fieldName + ']').val(1);
                    }
                });
            });
        },
    }
});