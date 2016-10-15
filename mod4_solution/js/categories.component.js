(function(){
	
	'use strict';
	
	angular.module('HomeApp')
	.component('categories',{
		templateUrl:'src/categories.html',
		controller:CategoriesCtrl,
		bindings:{
			citems:'<'
		}
	});
	
	function CategoriesCtrl(){
		var $ctrl = this;
	}
	
})();
