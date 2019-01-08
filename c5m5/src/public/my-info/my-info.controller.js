(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['regInfo', 'favoriteDish'];
function MyInfoController(regInfo, favoriteDish) {
	var infoCtrl = this;
	infoCtrl.info = regInfo;
	infoCtrl.infoValid = (regInfo !== null);
	infoCtrl.favoriteDish = favoriteDish;
}

})();

