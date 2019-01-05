(function () {
'use strict';

angular.module('data').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',	    
      template: '<a ui-sref="categories">Menue categories</a>'
    });

  $stateProvider
    .state('categories', {
      url: '/categories',	    
      template: '<menu-categories items="categories.all"></menu-categories>',
      controller: 'CategoriesController as categories',
      resolve: {
      	allCategories: ['MenuDataService', function (MenuDataService) {
      		return MenuDataService.getAllCategories();
      	}]
      }
    });

  $stateProvider
    .state('categories.expand', {
      url: '/categories-expand/{shortName}/{fullName}',
      template: '<menu-category name="category.name" items="category.items"></menu-category>',
      controller: 'CategoryController as category',
      resolve: {
      	categoryName: ['$stateParams', function ($stateParams) {
      		return $stateParams.fullName;
      	}],
      	categoryItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
      		return MenuDataService.getItemsForCategory($stateParams.shortName);
      	}]
      }
    });
}

})();
