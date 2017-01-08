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


	                	console.log($scope.students = id);
	                	
	                	$location.path('/students/'+ ($scope.students = id);
	                } 	
                 });

                app.controller("studentsDetailsController",function($scope,$http,$routeParams){
                 	    
	                 	$http.get('customerinfo.json')
	                 	.then(function(resp){
	                 	$scope.student = resp.data;

                 	})

	                	$scope.student = $routeParams.id;
                 });


                
