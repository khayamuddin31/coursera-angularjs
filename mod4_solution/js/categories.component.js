(function(){
	
	'use strict';
	
	angular.module('MenuApp')
	.component('categoriesList',{
		templateUrl:'src/categories.html',
		bindings:{
			citems:'<'
		}
	});
})();
