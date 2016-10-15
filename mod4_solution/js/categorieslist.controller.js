(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['citems'];
function CategoriesListController(citems) {
  catCtrl = this;
  catCtrl.citems = citems;
  console.log(catCtrl.citems);


}

})();
