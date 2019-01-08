(function() {
"use strict";

angular.module('public').service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['$http', 'ApiPath']
function MyInfoService($http, ApiPath) {
	var svc = this;
	svc.info = null;

	svc.getInfo = function () {
		return svc.info;
	}

	svc.setInfo = function (info) {
		svc.info = info;
	}

	svc.getFavoriteDish = function () {
		if (svc.info === null)
			return null;
		return $http.get(ApiPath + '/menu_items/'+ svc.info.favoriteDish + '.json').then(
				function (response) {
					return response.data;
				}
			);
	}
}

})();

