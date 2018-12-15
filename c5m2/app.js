(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyControllerConstructor)
  .controller('AlreadyBoughtController', AlreadyBoughtControllerConstructor)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffServiceConstructor)
;

ToBuyControllerConstructor.$inject = ['ShoppingListCheckOffService'];
function ToBuyControllerConstructor(service) {
  var tobuy = this;
  tobuy.items = function () {
    return service.toBuy
  }
  tobuy.buy = function(index) {
    service.buy(index);
  }
}

AlreadyBoughtControllerConstructor.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtControllerConstructor(service) {
  var bought = this;
  bought.items = function () {
    return service.alreadyBought;
  }
}

function ShoppingListCheckOffServiceConstructor() {
  this.toBuy = [
    {
      name: 'cookies 1',
      quantity: 10
    },
    {
      name: 'cookies 2',
      quantity: 10
    },
    {
      name: 'cookies 3',
      quantity: 20
    },
    {
      name: 'cookies 4',
      quantity: 30
    },
    {
      name: 'cookies 5',
      quantity: 10
    },
    {
      name: 'cookies 6',
      quantity: 5
    },
  ];
  this.alreadyBought = [];
  this.buy = function (index) {
    this.alreadyBought.push(this.toBuy.splice(index, 1)[0]);
  }
}

})();
