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
		    url: '/categories-list',
		    templateUrl: 'src/main-categories.template.html',
		    Controller:'CategoriesListController as catCtrl',
		    resolve:{
		    	citems:['MenuDataService', function (MenuDataService) { 
				return MenuDataService.getAllCategories();
			}]
		    }
		
		  });
	}
	
})();
