(function(){
	'use strict';
	
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', FoundItems);
	
	function FoundItems() {
	  var ddo = {
		templateUrl: 'loader/itemsloaderindicator.template.html',
		scope: {
		  foundItems: '<',
		  onRemove: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'list',
		bindToController: true
	  };

	  return ddo;
	}
	
	function FoundItemsDirectiveController(){
	
		var list = this;
		
	}
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var ctrl = this;
		
		ctrl.found = MenuSearchService.getMatchedMenuItems('aas');
		
		ctrl.getMenuItems = function (searchTerm) {
			
		  };
		  
		ctrl.removeItem = function (itemIndex) {
			this.found.splice(itemIndex, 1);
		  };
	
	}
	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath){
		
		var service = this;
		
		service.getMatchedMenuItems = function(searchTerm){
		


			return $http({
			  method: "GET",
			  url: (ApiBasePath + "/menu_items.json")
			}).then(function (response) {
			  console.log(response.data);
			  
			  var foundItems = response.data;
			  
			  
			})
			.catch(function (error) {
			  console.log(error);
			});
		};
	}
	
	
	
	
	
})();
