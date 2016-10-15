(function(){
	'use strict';
	
	angular.module('HomeApp')
	.controller('HomeAppController',HomeAppController)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
	
	HomeAppController.$inject = ['$http', 'ApiBasePath','$scope'];
	function HomeAppController($http, ApiBasePath){
		var ctrl = this;
		ctrl.citems = [];

	
		
		ctrl.fetchList = function(){
			return $http({
			  method: "GET",
			  url: (ApiBasePath + "/categories.json")
			});
		};
		var promise = ctrl.fetchList();

		promise.then(function (response) {
			ctrl.citems = response.data;
			console.log('data ',ctrl.catList);
		})
		.catch(function (error) {
			console.log("Something went terribly wrong.");
		});
		
		
			  		
		
	}
	
})();
