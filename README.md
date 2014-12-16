# China-area-selector

### Installation

Install via bower

```shell
bower install china-area-selector
```

### Usage

Add it as a dependency to your app and then use soliury.china-area-selector in your HTML files.

```
<!doctype html>
<html ng-app="demo">
  <head>
    <meta charset="utf-8">
    <title>AngularJS directive demo</title>

    <script src="../bower_components/angular/angular.js"></script>
  </head>
  <body>
    <div class="container">
      <h1 class="text-muted">Demo</h1>

      <div class="usage row">
        <h4>Simple usage</h4>
        <p>This is a simple usage of soliury.china-area-selector</p>
        <pre>&lt;china-area-selector&gt;&lt;/china-area-selector&gt;</pre>
        <h4>Results</h4>
        <china-area-selector province="province" city="city" area="area"></china-area-selector>
      </div>
    </div>

    <script src="../src/china-area-selector.js"></script>
    <script src="demo.js"></script>
  </body>
</html>

```

例如以上代码，把`province`绑定给指令中的`province`，自然就轻松地取到`province`的值。

### License
MIT
