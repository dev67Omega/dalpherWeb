'use strict';

app.controller('mailCtrl', function($scope, mailService){
	$scope.errorLogin = false;
	
	$scope.sendMail = function(user){
		console.log(user)
		mailService.sendMail(user, $scope);
		document.getElementById('floatingWork1').value=''; 
		document.getElementById('floatingWork2').value=''; 
		document.getElementById('floatingWork3').value=''; 
		document.getElementById('floatingWork4').value=''; 
		document.getElementById('comments').value=''; 
	}

	$scope.clearMsg = function(){
		$scope.errorLogin = false;
	}
});