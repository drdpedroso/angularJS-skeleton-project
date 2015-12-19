app.controller('ExampleCtrl',function($scope, $state) {
  $scope.test = "Hello World!";

  $scope.routeTest = function(){
    $state.go('test-route');
  }
});
