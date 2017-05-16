define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title: 'VegiMarket', moduleId: 'viewmodels/welcome', nav: false, menu: '' },
                { route: 'marketplace', title: 'Marketplace', moduleId: 'viewmodels/marketplace', nav: false, menu: 'marketplace' },
                { route: 'produtos', title: 'Produtos', moduleId: 'viewmodels/produtos', nav: false, menu: 'produtos' },
                { route: 'produtores', title: 'Produtores', moduleId: 'viewmodels/produtores', nav: false, menu: 'produtores' },
                { route: 'regiao', title: 'Região', moduleId: 'viewmodels/regiao', nav: false, menu: 'regiao' },
                { route: 'contactos', title: 'Contactos', moduleId: 'viewmodels/contactos', nav: true, menu: 'contactos' },
                { route: 'login', title: '', moduleId: 'viewmodels/login', nav: true, menu: 'login' },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});