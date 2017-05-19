define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        navbar:
        $(document).on('click', function () {
            $('.collapse').collapse('hide');
        }),
        activate: function () {
            router.map([
                { route: '', title: 'VegiMarket', moduleId: 'viewmodels/welcome', nav: false, menu: '' },
                { route: 'marketplace', title: 'Marketplace', moduleId: 'viewmodels/marketplace', nav: false, menu: 'marketplace' },
                { route: 'produtos', title: 'Produtos', moduleId: 'viewmodels/produtos', nav: false, menu: 'produtos' },
                { route: 'produtores', title: 'Produtores', moduleId: 'viewmodels/produtores', nav: false, menu: 'produtores' },
                { route: 'regiao', title: 'Região', moduleId: 'viewmodels/regiao', nav: false, menu: 'regiao' },
                { route: 'contactos', title: 'Contactos', moduleId: 'viewmodels/contactos', nav: true, menu: 'contactos' },
                { route: 'login', title: 'Login', moduleId: 'viewmodels/login', nav: true, menu: 'login' },
                { route: 'carrinho', title: 'Carrinho', moduleId: 'viewmodels/carrinho', nav: true, menu: 'carrinho' },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});