gulp = require 'gulp'
gutil = require 'gulp-util'
templateCache = require 'gulp-angular-templatecache'
concat = require 'gulp-concat'
minifyHTML = require 'gulp-minify-html'
uglify = require 'gulp-uglify'

gulp.task 'script', ->
  gulp.src './src/*.js'
  .pipe concat('china-area-selector.js')
  .pipe uglify()
  .pipe gulp.dest('./dist')


gulp.task 'template', ->
  gulp.src './src/template/*.html'
  .pipe templateCache 'templates.js',
    standalone: true
    module: '__chinaAreaSelectorTemplates__'
  .pipe gulp.dest('./src')


gulp.task 'build', ['script', 'template']
gulp.task 'watch', ['build'], ->
  gulp.watch './scr/*.js', ['build']
  gulp.watch './src/template/*.html', ['build']