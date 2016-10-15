(function(){
	
	'use strict';
	
	angular.module('HomeApp')
	.component('categories',{
		templateUrl:'src/categories.html',
		controller:CategoriesCtrl,
		bindings:{
			catList:'<'
		}
	});
	
	function CategoriesCtrl(){
		var $ctrl = this;
	}
	
})();