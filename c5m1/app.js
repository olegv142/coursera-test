(function () {
'use strict';

angular.module('LunchCheckerApp', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.lunchMenu = "";
  $scope.checkMenu = function () {
  	var items = $scope.lunchMenu.split(',')
  	var count = 0;
    for (var i = 0; i < items.length; ++i) {
    	var item = items[i].trim();
    	if (item != "") {
    		++count;
    	}
    }
    if (count == 0) {
    	$scope.menuMessage = "Please enter data first";
    	$scope.menuClass = "menu-invalid";
    } else if (count <= 3) {
    	$scope.menuMessage =  "Enjoy!";
    	$scope.menuClass = "menu-valid";
    } else {
    	$scope.menuMessage =  "Too much!";
    	$scope.menuClass = "menu-valid";
    }
  };
});

})();
