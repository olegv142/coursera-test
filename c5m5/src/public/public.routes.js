(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.sign_up', {
      url: '/sign_up',
      controller: 'SignUpController',
      controllerAs: 'infoCtrl',
      templateUrl: 'src/public/my-info/sign-up.html'
    })
    .state('public.my_info', {
      url: '/my_info',
      controller: 'MyInfoController',
      controllerAs: 'infoCtrl',
      templateUrl: 'src/public/my-info/my-info.html',
      resolve: {
        regInfo: ['MyInfoService', function (MyInfoService) {
          return MyInfoService.getInfo();
        }],
        favoriteDish: ['MyInfoService', function (MyInfoService) {
          return MyInfoService.getFavoriteDish();
        }]
      }
    });
}
})();