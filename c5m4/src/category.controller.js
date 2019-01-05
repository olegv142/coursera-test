(function () {
'use strict';

angular.module('data').controller('CategoryController', CategoryController);

CategoryController.$inject = ['categoryName', 'categoryItems'];
function CategoryController(categoryName, categoryItems) {
	this.name  = categoryName;
	this.items = categoryItems;
}

})();
