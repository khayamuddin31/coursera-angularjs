(function(){
	
	'use strict';
	
	angular.module('data')
	.service('MenuDataService',MenuDataService);
	
	function MenuDataService(){
		var service = this;
		
		service.getAllCategories = function(){}
		service.getItemsForCategory = function(){}
	}
	
})();