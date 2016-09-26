(function(){
	'use strict';
	
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyShoppingController',ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
	
	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var buyList = this;
		
		buyList.buyItem = function(itemIndex){
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
		
		buyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
	}
	
	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var boughtList = this;
		
		boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	}
	
	function ShoppingListCheckOffService(){
		
		var service = this;
		
		var toBuyItems = [
		{ name: "Cookies", quantity: 10 },
		{ name: "Milk", quantity: 2 },
		{ name: "Chips", quantity: 10 },
		{ name: "Biscuits", quantity: 2 },
		{ name: "Donuts", quantity: 100 }
		];
		var boughtItems = [];
		
		service.buyItem = function(index){
			var item = toBuyItems[index];
			toBuyItems.splice(index,1);
			boughtItems.push(item);
			
		};
		
		service.getToBuyItems = function(){
			return toBuyItems;
		};
		service.getBoughtItems = function(){
			return boughtItems;
		};
	}
	
})();
