(function(){
	
	'use strict';
	
	angular.module('MenuApp')
	.config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'src/menu.html'
		})
		
		//categories list
		.state('categoriesList', {
		    url: '/categories',
		    templateUrl: 'src/main-categories.template.html',
		    controller:'CategoriesListController as catCtrl',
		    resolve:{
		    	citems:['MenuDataService', function (MenuDataService) { 
				return MenuDataService.getAllCategories();
			}]
		    }
		
		  })
		  .state('itemsList', {
		    url: '/items/{shortname}',
		    templateUrl: 'src/items.html',
		    controller: 'ItemsListController as itemsCtrl',
		    resolve: {
		      items: ['$stateParams', 'MenuDataService',
			    function ($stateParams, MenuDataService) {
			      return MenuDataService.getItemsForCategory($stateParams.shortname);
			    }]
		    }
		  });
	}
	
})();
