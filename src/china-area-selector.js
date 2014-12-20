angular.module('china-area-selector', ['templates'])
    .directive('chinaAreaSelector', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'china-area-selector.html',
            replcae: true,
            scope: {
                region: '='
            },
            link: function (scope, elements) {
                var $region = angular.element(elements[0]);
                var $city = angular.element($region.find('select')[1]);
                var $area = angular.element($region.find('select')[2]);

                scope.provinces = __areaData__.provinces || [];

                var getCities = function(province) {
                    return (__areaData__[province] || {}).citys || [];
                };

                var getAreas = function(province, city) {
                    var cityObj = (__areaData__[province] || {})[city];
                    return (cityObj || {}).areas || [];
                };

                var indexOf = function(arr, ele) {
                    for (var i in arr)
                        if (arr[i] === ele)
                            return i;
                    return -1;
                };

                var getAdjustiveRegion = function(paramRegion) {
                    var region = angular.copy(paramRegion || {});
                    if (indexOf(scope.provinces, region.province) === -1) {
                        region.province = region.city = region.area = '';
                        return region;
                    }
                    var cities = getCities(region.province);
                    if (indexOf(cities, region.city) === -1) {
                        region.city = region.area = '';
                        return region;
                    }
                    var areas = getAreas(region.province, region.city);
                    if (indexOf(areas, region.area) === -1) {
                        region.area = '';
                        return region;
                    }
                    return region;
                };

                var showRegion = function(region) {
                    scope.region = getAdjustiveRegion(region);
                    // console.log("region=" + JSON.stringify(region) + " scope.region=" + JSON.stringify(scope.region));

                    scope.citys = getCities(scope.region.province);
                    scope.areas = getAreas(scope.region.province, scope.region.city);

                    setTimeout(function() {
                        var cityIndex = indexOf(scope.citys, scope.region.city);
                        $city.val(cityIndex > -1 ? cityIndex : '');

                        var areaIndex = indexOf(scope.areas, scope.region.area);
                        $area.val(areaIndex > -1 ? areaIndex : '');
                    });
                };

                scope.$watch('region', showRegion, true);

            }
        };
    }]);

