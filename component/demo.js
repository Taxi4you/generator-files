app.directive("demo", ($rootScope, parseService) => {
  return {
    templateUrl: "/templateUrlPath",
    scope: true,
    link: function($scope, element, attrs) {
      
      $scope.key = attrs.key;
      $scope.selector = attrs.selector;
      $scope.selectorNoDots = $scope.selector.replace(/[.]/g, "");
      
    }
  }
});
