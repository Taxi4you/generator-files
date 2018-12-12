app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/linkToPath", {
    templateUrl : "templateUrlPath"
  });
  // $locationProvider.html5Mode(true);
});

app.controller("demo", ($rootScope, $scope) => {

});
