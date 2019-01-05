(function () {
'use strict';

angular.module('data')
.component('menuCategories', {
  templateUrl: 'src/categories.component.html',
  bindings: {
    items: '<'
  }
});

})();
