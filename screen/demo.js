app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/linkToPath", {
    templateUrl : "templateUrlPath"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("demo", ($scope, $location) => {

  $scope.init().then(function() {
    if ($scope.main.by.userType!="guest")
      $scope.screenInit();
    else
     $location.path("/register");
  });

  $scope.screenInit = function() {
    $scope.initialized = true;
    $scope.$apply();
  };

});
