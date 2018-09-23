app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/linkToPath", {
    templateUrl : "templateUrlPath"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("demo", ($rootScope, $scope, $location, $routeParams) => {

  $scope.init().then(function() {
    if ($scope.user.type!="guest")
      $scope.screenInit();
    else
     $location.path("/login");
    $scope.$apply();
  });

  $scope.screenInit = function() {
    $scope.initialized = true;
    $scope.$apply();
  };

});
