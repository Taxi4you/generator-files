app.directive("demo", ($rootScope, parseService) => {
  return {
    templateUrl: "/templateUrlPath",
    scope: true,
    link: function($scope, element, attrs) {
      
       $scope.key = parseService.parse(attrs.key);
       $scope.selector = parseService.parse(attrs.selector);
      
    }
  }
});
