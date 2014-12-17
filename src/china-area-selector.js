angular.module('china-area-selector', ['templates'])
    .directive('chinaAreaSelector', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'china-area-selector.html',
            replcae: true,
            scope: {
                region: '='
            },
            link: function (scope) {
                scope.provinces = __areaData__.provinces || [];

                scope.$watch('region.province', function(province, old) {
                    scope.citys = (__areaData__[province] || {}).citys || [];
                    
                    if (province == old) {
                        var temp = scope.region.city;
                        scope.region.city = '';
                        setTimeout(function() {
                            scope.$apply(function() {
                                scope.region.city = temp;
                            });
                        });
                    } else {
                        scope.region.city = '';
                    }
                });

                scope.$watch('region.city', function(city, old) {

                    var cityObj = (__areaData__[scope.region.province] || {})[city];
                    scope.areas = (cityObj || {}).areas || [];
                    if (city == old) {
                        var temp = scope.region.area;
                        scope.region.area = '';
                        setTimeout(function() {
                            scope.$apply(function() {
                                scope.region.area = temp;
                            });
                        });
                    } else {
                        scope.region.area = '';
                    }
                });
            }
        };
    }]);

