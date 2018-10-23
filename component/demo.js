app.directive("demo", ($rootScope, parseService) => {
  return {
    templateUrl: "/templateUrlPath",
    scope: true,
    link: function($scope, element, attrs) {
      
      $scope.key = attrs.key;
      $scope.selector = attrs.selector;
      $scope.selectorNoDots = $scope.selector.replace(/[.]/g, "");
      
      if ($scope.defaultValue) $scope.value = $rootScope.getKeyValue($scope[$scope.key], $scope.selector);
      if (attrs.value) $scope.value = attrs.value;
      $scope.disabledItem = parseService.parse(attrs.disabledItem);
     
      $(document).on('keyup', '.' + $scope.selectorNoDots, function() {
        $rootScope.setKeyValue($scope[$scope.key], $scope.selector, $(this).val());
        $rootScope.setKeyValue($rootScope.errors, $scope.selector, null);
        $scope.$apply();
        $rootScope.$digest();
      });
      
    }
  }
});
