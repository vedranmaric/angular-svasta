angular.module('categoriesController',['linksService'])
	.controller('CategoriesController', function($scope, Links) {

		
		Links.get()
			.success(function(data){
				$scope.categories=data.categories;
				$scope.links=data.links;
				//$scope.loading=false;
			})
			.error(function(data) {
				console.log(data);
			});

		/*$scope.categories= [
			{"id": 0, "name": "First"},
			{"id": 1, "name": "Second"},
			{"id": 2, "name": "Third"},
			{"id": 3, "name": "Fourth"},
		];
		$scope.links = [
			{"id":0,"title": "aut fugit", "url": "https://www.example.com", "category":0},
			{"id":1,"title": "accusantium", "url": "https://www.example.com", "category":1},
			{"id":2,"title": "doloremque", "url": "https://www.example.com", "category":3},
			{"id":3,"title": "laudantium", "url": "https://www.example.com", "category":1},
			{"id":4,"title": "totam rem", "url": "https://www.example.com", "category":0},
			{"id":5,"title": "aperiam", "url": "https://www.example.com", "category":3},
			{"id":6,"title": "eaque", "url": "https://www.example.com", "category":2},
			{"id":7,"title": "quae ab illo", "url": "https://www.example.com", "category":2},
			{"id":8,"title": "inventore", "url": "https://www.example.com", "category":2},
		];
	    */
	    $scope.currentCategory=null;

	   

	    $scope.isCreating = false;
	    $scope.isEditing = false;

	    $scope.startCreating = function(){
	    	$scope.isCreating=true;
	    	$scope.isEditing=false;
	    	resetCreateForm();
	    };
	    $scope.cancelCreating = function(){
	    	$scope.isCreating=false;
	    };
	    $scope.startEditing = function(link) {
	    	$scope.isCreating=false;
	    	$scope.isEditing=true;
	    	$scope.editedLink=angular.copy(link);

	    };
	    $scope.cancelEditing = function(){
	    	$scope.isEditing=false;
	    	$scope.editedLink=null;
	   		
	    };



	     $scope.setCurrentCategory = function(category){
	    	$scope.currentCategory=category;
	    	$scope.cancelCreating();
	    	$scope.cancelEditing();
	    };
	    $scope.isCurrentCategory= function(category){
	    	return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	    };



	    $scope.shouldShowCreating = function(){
	    	return $scope.currentCategory && !$scope.isEditing;
	    };
	    $scope.shouldShowEditing = function(){
	    	return $scope.isEditing && !$scope.isCreating;
	    };

	   



	    function resetCreateForm(){
	    	$scope.newLink={
	    		title: '',
	    		url: '',
	    		cat_id: $scope.currentCategory.id,
	    	}
	    };
	    $scope.createLink= function(link){
	    	var id =0;
	    	var l = $scope.links.length;
	    	for( var i=0 ;i<l;i++){
	    		if($scope.links[i].id>=id) 
	    			id=$scope.links[i].id;
	    	}
	    	id++;
	    	link.id = id;
	    	$scope.links.push(link);
	    	resetCreateForm();
	    };

	    $scope.editedLink=null;
	   
	   $scope.updateLink = function (link){
	   		var index =-1;
	   		for(var i=0;i<$scope.links.length;i++){
	   			if($scope.links[i].id === link.id)
	   				index=i;
	   		}
	   		if(index>-1) 
	   			$scope.links[index]=link;
	   		$scope.editedLink=null;
	   		$scope.isEditing=false;
	   };
	   $scope.isSelectedLink = function(link){
	   		return $scope.editedLink !==null && $scope.editedLink.id===link.id;
	   };


	   $scope.deleteLink = function (link){
	   		var index =-1;
	   		for(var i=0;i<$scope.links.length;i++){
	   			if($scope.links[i].id === link.id)
	   				index=i;
	   		}
	   		if(index>-1) 
	   			$scope.links.splice(index,1);
	   };
	});