app.directive("demo", () => {
  return {
    templateUrl: "/templateUrlPath",
    scope: true,
    link: function(scope, element, attrs) {
      demo(scope, element, attrs)
    }
  }
});

function demo(scope, element, attrs) {
  
  // demo controller closure
}
