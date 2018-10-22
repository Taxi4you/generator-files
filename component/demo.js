app.directive("demo", ($rootScope, parseService) => {
  return {
    templateUrl: "/templateUrlPath",
    scope: true,
    link: function($scope, element, attrs) {
      
      $scope.key = attrs.key;
      $scope.selector = attrs.selector;
      $scope.selectorNoDots = $scope.selector.replace(/[.]/g, "");
     
      $(document).on('keyup', '.' + $scope.selectorNoDots, function() {
        $rootScope.setKeyValue($scope[$scope.key], $scope.selector, $(this).val());
        $rootScope.setKeyValue($rootScope.errors, $scope.selector, null);
        $scope.$apply();
        $rootScope.$digest();
      });
      
    }
  }
});
