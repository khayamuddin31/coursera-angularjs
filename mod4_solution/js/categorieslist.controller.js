(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['citems'];
function MainShoppingListController(citems) {
  var cList = this;
  cList.citems = citems;


}

})();
