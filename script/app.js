var app = angular.module("routeApp",["ngRoute"])
                app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
                 	
                	$locationProvider.html5Mode({
					  enabled: true,
					  requireBase: false
					});
                 	$routeProvider
	                 	.when("/home", {
	                 		templateUrl: "Templates/home.html",
	                 		controller: "homeController"
	                 	})
	                 	.when("/courses", { 
	                 		templateUrl: "Templates/courses.html",
	                 		controller: "courseController"
	                 	})
	                 	.when("/students", {
	                 		templateUrl: "Templates/students.html",
	                 		controller: "studentsController"
	                 	})
	                 	.when("/students/:id", {
	                 		templateUrl: "Templates/studentsDetails.html",
	                 		controller: "studentsDetailsController"
	                 	})
	                 	
	                 	.otherwise({
	                 		redirectTo : "/home"
	                 	})
                }]);

                 app.controller("homeController",function($scope){
                 	$scope.message = "Home Page";
                 });

                 app.controller("courseController",function($scope){
                 	$scope.courses = ["C#","HTML","VB.net","SQL","ASP.net"];
                 });

                 app.controller("studentsController",function($scope,$http,$location){
                 	    
	                 	$http.get('customerinfo.json')
	                 	.then(function(resp){
	                 	$scope.students = resp.data;

                 	})
	                 	
	                $scope.showData = function(id){
	                	
	                	$scope.selectedId = id;
	                	//$location.path('/students/' + id);
	                	$location.path('/students/'+$scope.selectedId);
	                
	                };	
                 });

                
                 app.controller("studentsDetailsController", ['$scope','$routeParams','$http','$filter',function($scope, $routeParams, $http,$filter){
                 	    
                 		
                 	    $scope.search = function() {
						    var url = 'customerinfo.json';
						    return $http.get(url);
						}

						function getById(arr, id) {
						    for (var i = 0, len = arr.length; i < len; i++) {
						        if (arr[i].id === id) {
						            return arr[i];  
						        }
						    }
						}
				        
					    	
	                 	$scope.search().then(function(resp){
	                 		  $scope.students = resp.data; 

	                 		  console.log("hello7");
	                 		  console.log($scope.students);
	                 		  console.log($routeParams.id);
	                 		  /*console.log($scope.studentDe);*/
	                 		  var a = $routeParams.id;
	                 		  console.log(typeof a);
	                 		  var b = parseInt(a);
	                 		  
	                 		  //console.log(typeof b);
							  $scope.student = getById($scope.students, b);
							  console.log($scope.student);

							    
							});

	                 	

				      
				       
			     }]);


                
