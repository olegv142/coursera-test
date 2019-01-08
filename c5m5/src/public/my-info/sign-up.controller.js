(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
	var infoCtrl = this;
	infoCtrl.reg = {};
	infoCtrl.infoSaved = false;

	infoCtrl.setInfo = function (info) {
		MyInfoService.setInfo(info);
		infoCtrl.infoSaved = true;
	}
}

})();

