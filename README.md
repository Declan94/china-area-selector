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

#### 备注：

对于一些没有区的市辖区直接区县以市辖区名称代替，比如广东省的东莞市。

而对于北京市等直辖市的市辖区直接以北京市代替。

详见 Demo 页面

### License
MIT
