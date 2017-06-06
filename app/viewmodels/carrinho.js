define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        attached: function () {
            if (JSON.stringify(localStorage.getItem("carrinho")) != JSON.stringify('[]') && localStorage.getItem("carrinho") != null) {
                $("#no_products").remove();
                $("#compra").append('<p class="btn btn-details"><button type="button" class="btn btn-info col-xs-12" onclick= "" > Finalizar Compra</button ></p >');
                var cart = JSON.parse(localStorage.getItem("carrinho"));
                var output = "";
                var quantidade = "";
                var botao = "";
                for (i = 0; i < cart.length; i++) {
                    output = "<span id='" + cart[i].nome + "' class='col-xs-12' style='padding-top:10%'><img class='img-circle' src='" + cart[i].imagem + "' alt='" + cart[i].nome + "' width='150' height='150'/> " + cart[i].nome + " " + cart[i].preco + "</span><br /><br />";
                    quantidade = "<div id='" + cart[i].nome + "2' class='input-group' style='padding-top:10%'><span class='input-group-btn'><button id='qtyminus" + i + "' type='button' class='btn btn-default btn-number' data-type='minus' data-field='quant[1]' field='quantity" + i + "'><span class='glyphicon glyphicon-minus'></span></button></span><input id='qty" + i + "' name='quantity" + i + "' class='form-control input-number' value='1' min='1' type='number'><span class='input-group-btn'><button id='qtyplus" + i + "' type='button' class='btn btn-default btn-number' data-type='plus' data-field='quant[1]' field='quantity" + i + "'><span class='glyphicon glyphicon-plus'></span></button></span></div><br />";
                    botao = "<p id='" + cart[i].nome + "1' class='btn-add' style='padding-bottom:10%'><button type='button' class='btn btn-default col-xs-12' onclick='removeCart(" + cart[i].nome + ")'> Remover Produto</button></p>";
                    $("#carrinho").append(output);
                    $("#carrinho").append(quantidade);
                    $("#carrinho").append(botao);
                }

                removeCart = function (nome) {
                    $("#" + nome.id).remove();
                    $("#" + nome.id + "1").remove();
                    $("#" + nome.id + "2").remove();
                    for (i = 0; i < cart.length; i++) {
                        if (cart[i].nome == nome.id) {
                            cart.splice(i, 1);
                        }
                    }
                    localStorage.setItem("carrinho", JSON.stringify(cart));
                    if (JSON.stringify(localStorage.getItem("carrinho")) == JSON.stringify('[]')) {
                        $('#compra').remove();
                        $("#finalizar").append('<h1 id="no_products">Não tem produtos no seu carrinho!</h1>');
                    }
                }

                jQuery(document).ready(function () {
                    console.log(cart.length);
                    for (i = 0; i < cart.length; i++) {
                        $("#qtyplus" + i + "").click(function (e) {
                            e.preventDefault();
                            fieldName = $(this).attr('field');
                            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
                            if (!isNaN(currentVal)) {
                                $('input[name=' + fieldName + ']').val(currentVal + 1);
                            } else {
                                $('input[name=' + fieldName + ']').val(1);
                            }
                        });
                        $("#qtyminus" + i + "").click(function (e) {
                            e.preventDefault();
                            fieldName = $(this).attr('field');
                            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
                            if (!isNaN(currentVal) && currentVal > 1) {
                                $('input[name=' + fieldName + ']').val(currentVal - 1);
                            } else {
                                $('input[name=' + fieldName + ']').val(1);
                            }
                        });
                    }

                });
            } else {
                $("#finalizar").append("<h1 id='no_products'>Não tem produtos no seu carrinho!</h1>");
            }         
        },
    }
});