(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['citems'];
function CategoriesListController(citems) {
  var catCtrl = this;
  catCtrl.citems = citems;
}

})();
