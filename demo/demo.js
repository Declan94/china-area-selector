var app = angular.module('demo', ['china-area-selector']);

app.controller('Ctrl' , function($scope) {

  $scope.region1 = {};
  
  $scope.region2 = {
    province: '河北省',
    city: '承德市',
    area: '承德县'
  };
});
