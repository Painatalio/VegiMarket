define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        navbar:
        $(document).on('click', function () {
            $('.collapse').collapse('hide');
        }),
        attached: function () {
            var c = localStorage.getItem("c");
            var p = localStorage.getItem("p");
            if (c == "certo") {
                $("#login").css("display", "none");
                if (p == "certo") {
                    $("#perfil").css("display", "block");
                    $("#perfil2").css("display", "none");
                } else {
                    $("#perfil").css("display", "none");
                    $("#perfil2").css("display", "block");
                }
            } else {
                $("#login").css("display", "block");
                $("#perfil").css("display", "none");
            }
        },
        activate: function () {
            router.map([
                { route: '', title: 'VegiMarket', moduleId: 'viewmodels/welcome', nav: false, menu: '' },
                { route: 'marketplace', title: 'Marketplace', moduleId: 'viewmodels/marketplace', nav: true, menu: 'marketplace' },
                { route: 'produtos', title: 'Produtos', moduleId: 'viewmodels/produtos', nav: false, menu: 'produtos' },
                { route: 'produtores', title: 'Produtores', moduleId: 'viewmodels/produtores', nav: false, menu: 'produtores' },
                { route: 'regiao', title: 'Região', moduleId: 'viewmodels/regiao', nav: false, menu: 'regiao' },
                { route: 'contactos', title: 'Contactos', moduleId: 'viewmodels/contactos', nav: true, menu: 'contactos' },
                { route: 'login', title: 'Login', moduleId: 'viewmodels/login', nav: true, menu: 'login' },
                { route: 'carrinho', title: 'Carrinho', moduleId: 'viewmodels/carrinho', nav: true, menu: 'carrinho' },
                { route: 'cliente', title: 'Cliente', moduleId: 'viewmodels/cliente', nav: true, menu: 'cliente' },
                { route: 'produtor', title: 'Produtor', moduleId: 'viewmodels/produtor', nav: true, menu: 'produtor'},
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});