(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
  	restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

MenuSearchService.$inject = ['$http', '$filter'];
function MenuSearchService($http, $filter) {
	var service = this;
	service.lowercase = $filter('lowercase')
	service.getMatchedMenuItems = function (searchText) {
		var searchTextL = service.lowercase(searchText)
		return $http({url: "https://davids-restaurant.herokuapp.com/menu_items.json"}).then(
				function (result) {
					if (result.status == 200) {
						return result.data.menu_items.filter(
								function(item) {
									return service.lowercase(item.description).indexOf(searchTextL) >= 0;
								}
							);
					} else {
						return [];
					}
				}
			);
	};
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(searchService) {
	var ctrl = this;
	ctrl.searchText = "";
	ctrl.found = null;
	ctrl.loading = false;
	ctrl.doSearch = function() {
		if (ctrl.searchText === "") {
			ctrl.found = [];
		} else {
			ctrl.loading = true;
			searchService.getMatchedMenuItems(ctrl.searchText).then(
				function (items) { 
					ctrl.loading = false;
					ctrl.found = items;
				}
			);
		}
	}
	ctrl.onRemove = function(index) {
		ctrl.found.splice(index, 1);
	}
}

})();
