myApp.controller('SignupController', ['$scope', function($scope){
		$scope.isError = false;
		// Module 
		$scope.moduleShow = false;

    	 $scope.module = {
    	 	name:'',
    	 	website:'',
    	 	group:false,
    	 	id:''
    	 };    	 	
    	 $scope.modules = [];
   /* 	 $scope.$watchCollection('module',function(newVal,oldVal){
    	 	console.log("New Value: "+ newVal.name);
    	 	console.log("old Value: "+ oldVal.name);
    	 });*/

    	// Submiting module
    	$scope.SubmitModule = function(module){
    		var isPresent = false,
    			icount = 0,
    			parentId = 0;
    		if(module.name && module.website){
    			for(var i = 0, moduleLength = $scope.modules.length; i < moduleLength ; i++) {
    				isPresent =false;
    				if($scope.modules[i].name == module.name){
    					$scope.modules[i].group = true;   
    					parentId = $scope.modules[i].id; 					
    					isPresent = true;
    					break;
    				}	    				
    			}

    			if(!isPresent){
    				module.id = module.name+0;
    				$scope.modules.push(module);
	    			$scope.module = {
	    	 			name:'',
			    	 	website:''
			    	 }; 
			    	 $scope.isError = true;
    			}else{
    				for(var i = 0, moduleLength = $scope.modules.length; i < moduleLength ; i++) {
    					if($scope.modules[i].name == module.name){icount += 1}
    				}
    				module.parentModId = parentId;
    				module.id = module.name+icount;
    				module.group = true;
    				module.name = module.name;
    				module.count = icount;
    				$scope.modules.push(module);
	    			$scope.module = {
	    	 			name:'',
			    	 	website:'',
			    	 	id:''
			    	 };
    			}
    		}
    	};

    	//remove module
    	$scope.removeGroup = function(module){
    		for(var i = 0, moduleLength = $scope.modules.length ; i < moduleLength ; i++){
    			if($scope.modules[i].id == module.id){
    				$scope.modules.splice(i,1);
    				break;   			
    			}
    		}
    	};

    	//watch collection for $scope.modules
    	$scope.$watchCollection('modules',function(){

    	});

    	//Sign-Up
    	$scope.signUpShow = false;
    	$scope.modType = "Choose and Item";
    	$scope.$watch('modType',function(){
    		console.log($scope.modType);
    	});
		$scope.user = {
    	 	fName:'',
    	 	lName:'',
    	 	email:'',
    	 	moduleType:'',
    	 	moduleId:''
    	 };    	 	
    	 $scope.users = [];

    	 $scope.setDrpDwn = function(mod){
    	 	var grouName = "-Group";
    	 	var modName = mod.name;
    	 	//if(mod.)
    	 	if(mod.group){
    	 		mod.count ? grouName+=mod.count+1 : grouName+=1;
    	 		modName += grouName;
    	 	}
    	 	$scope.modType = modName;
    	 	$scope.user.moduleType = modName;
    	 	$scope.user.moduleId = mod.id;
    	 };

    	 $scope.SubmitUsers = function(user){

    		if(user.fName && user.moduleType){
    			$scope.users.push(user);
    			$scope.user = {
		    	 	fName:'',
		    	 	lName:'',
		    	 	email:'',
		    	 	moduleType:'',
		    	 	group: false    	 
		    	 };   
		    	 $scope.modType = "Choose and Item";
                 $scope.isError = false;
    		}else{
                $scope.isError = true;
            }
    		console.log($scope.users);
    	};

    		//remove user
    	$scope.removeUser = function(stud){
    		for(var i = 0, userLength = $scope.users.length ; i < userLength ; i++){
    			if($scope.users[i].email == stud.email){
    				$scope.users.splice(i,1);
    				break;   			
    			}
    		}
    	};

}]);



