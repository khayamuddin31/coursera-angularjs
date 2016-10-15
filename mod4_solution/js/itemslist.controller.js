(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController ', ItemsListController );


ItemsListController.$inject = ['items']
function ItemDetailController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
