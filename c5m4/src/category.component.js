(function () {
'use strict';

angular.module('data')
.component('menuCategory', {
  templateUrl: 'src/category.component.html',
  bindings: {
  	name:  '<',
    items: '<'
  }
});

})();
