app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/linkToPath", {
    templateUrl : "templateUrlPath"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("demo", ($rootScope, $scope, $location, $routeParams) => {

  $rootScope.init().then(function() {
    if ($rootScope.user.type!="guest")
      $scope.screenInit();
    else
     $location.path("/auth/login");
    $scope.$apply();
  });

  $scope.screenInit = function() {
    $scope.initialized = true;
    $rootScope.active_level_1 = null;
    $rootScope.active_sub_1 = null;
    $rootScope.active_sub_2 = null;
    $scope.$apply();
  };

});
