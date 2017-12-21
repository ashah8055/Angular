mainApp.controller("onLoadCtrl", function ($scope, mainService, $timeout) {
	
//variable declaration
	$scope.register = {};
	$scope.definition = "";
	$scope.success = false;
	$scope.wrong = false;
	$scope.warning = false;
	$scope.wordType = false;
	$scope.clue = false;
	$scope.clueFlag = false;

	
	$scope.count = 5 + 1;
	$scope.clueLimit = 4;	
	$scope.mark = {
		success:0,
		wrong:0
	};
//function to get word defination which is used as clue
	$scope.getMeaning = function (isValid) {
		$scope.success = false;
		$scope.wrong = false;
		$scope.wordType = false;
		$scope.clue = false;
		$scope.clueFlag = false;
		$scope.warning = false;

		mainService.useGet("/api/getMeaning","POST").then(function(response){
			console.log(response.data);
			$scope.definition = response.data.definition;
		});
		$scope.count--;
	};
// funciton to check category or type of word is corrent or wrong
	$scope.submit = function(type){
		if(type){
			$scope.warning = false;
			if($scope.definition.category == type){			
				$scope.success = true;
				$scope.mark.success++;
			}
			else {

				$scope.wrong = true;
				$scope.mark.wrong++;
			}
			$timeout(function(){
				if($scope.count) $scope.getMeaning();
			},1500);
		}else{
			$scope.warning = true;
		}
		
	};

// function to set the clue 
	$scope.clueFn = function(){
		
		if($scope.clueLimit && !$scope.clueFlag) {
			$scope.clue = true;
			$scope.clueLimit--;
			$scope.clueFlag = true;			
		}
	};
// function to restart the game
	$scope.reStart = function(){
		$scope.count = 5 + 1;
		$scope.clueLimit = 4;	
		$scope.mark = {
		success:0,
		wrong:0
		};
	};
	$scope.getMeaning();
})