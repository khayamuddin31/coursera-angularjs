(function(){
	'use strict';
	
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckCtrl);
	
	LunchCheckCtrl.$inject = ['$scope'];
	function LunchCheckCtrl($scope){
		$scope.menu = "";
		$scope.msg = "";
		
		$scope.check = function(){
			$scope.msg = getMessage($scope.menu);
		}
		
		function getMessage(str){
			var arr = str.split(',');
			var msg = '';
			if (str === "" || str == null){
				msg = 'Please enter data first';
			} else if(arr.length<=3){
				msg = 'Enjoy!';
			} else if (arr.length > 3){
				msg = 'Too much!';
			} 
			
			return msg;
		}
	
	
	}
	
	
	
	
	
})();