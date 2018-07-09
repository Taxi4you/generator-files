app.config(($routeProvider, $locationProvider) => {
  $routeProvider
  .when("/linkToPath", {
    templateUrl : "templateUrlPath"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("demo", ($scope, $location) => {

  if (!$scope.main)
  {
    $scope.init().then(function() {
      if ($scope.main.by.userType!="guest")
        $scope.screenInit();
      else
       $location.path("/register");
    });
  } else {
    $scope.screenInit();
  }

  $scope.screenInit = function() {
    console.log("demo initialized");
  };

});
