(function () {
'use strict';

  angular.module('MenuApp')
  .controller('ItemsListController ', ItemsListController );


  ItemsListController.$inject = ['items'];
  function ItemsListController(items) {
    var itemsCtrl = this;
    console.log('Items found', items);
    //itemsCtrl.items = items.menu_items;
    //itemsCtrl.category = items.category;
  }

})();
