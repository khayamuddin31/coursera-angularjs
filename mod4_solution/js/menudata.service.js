(function(){
	
	'use strict';
	
	angular.module('data')
	.service('MenuDataService',MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
	
	MenuDataService.$inject = ['$http', 'ApiBasePath'];
	function MenuDataService($http, ApiBasePath){
		var service = this;
		
		service.getAllCategories = function(){
			return $http({
			  method: "GET",
			  url: (ApiBasePath + "/categories.json")
			}).then(function (response) {
			  console.log(response.data);
			   return response.data;
			  
			})
			.catch(function (error) {
			  console.log(error);
			});
		
		}
		service.getItemsForCategory = function(){}
	}
	
})();
