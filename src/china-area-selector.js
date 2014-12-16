angular.module('china-area-selector', ['templates'])
    .directive('chinaAreaSelector', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'china-area-selector.html',
            replcae: true,
            scope: {
                province: "=",
                city: '=',
                area: '='
            },
            link: function ($scope) {
                console.log(__areaData__);
                $scope.provinces = __areaData__.provinces || [];
                $scope.change = function (type) {
                    var province = __areaData__[$scope.province] || {};

                    if (type == 1) {
                        $scope.citys = province.citys || [];
                        $scope.city = undefined;
                    }
                    var city = province[$scope.city] || {};
                    if (type == 2) {
                        $scope.areas = city.areas || [];
                    }
                    $scope.area = undefined;

                }

            }
        };
    }]);

