# China-area-selector

### Installation

Install via bower

```shell
bower install china-area-selector --save
```

### Usage

Add it as a dependency to your app and then use china-area-selector in your HTML files.

HTML
```html
<china-area-selector region="region1"></china-area-selector>
<china-area-selector region="region2"></china-area-selector>
```

Javascript
```javascript
var app = angular.module('demo', ['china-area-selector']);

app.controller('Ctrl' , function($scope) {

  $scope.region1 = {};
  
  $scope.region2 = {
    province: '河北省',
    city: '承德市',
    area: '承德县'
  };
});
```

详见 Demo 页面

### License
MIT
