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
		  items: '<',
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
		ctrl.itemName = "";
		
		
		
		ctrl.getMenuItems = function (searchTerm) {
			
		  };
		  
		ctrl.removeItem = function (itemIndex) {
			this.found.splice(itemIndex, 1);
		  };
		
		ctrl.narrowResults = function(){
			//ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.itemName);
			var promise = MenuSearchService.getMatchedMenuItems(ctrl.itemName);

			  promise.then(function (response) {
			    ctrl.found = response.data;
			  })
			  .catch(function (error) {
			    console.log("Something went terribly wrong.");
			  });
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
			  var res =  response.data;
			  var foundItems = res.menu_items;
		 	  var newItems = [];
			  for (var i = 0; i < foundItems.length; i++) {
			      var description = foundItems[i].description;
			      if (description.toLowerCase().indexOf(searchTerm) !== -1) {
				newItems.push(foundItems[i]);
			      }
			    }
			  console.log('Filtered array', newItems);
			 return newItems;
			  
			})
			.catch(function (error) {
			  console.log(error);
			});
		};
	}
	
	
	
	
	
})();
