(function() {
"use strict";

angular.module('public')
.directive('menuItemValidator', ['$http', 'ApiPath', function($http, ApiPath) {
  return {
    require : 'ngModel',
    link : function($scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.menuItemValid = function(short_name) {
        return $http.get(ApiPath + '/menu_items/'+ short_name + '.json');
      };
    }
  }
}]);

})();

