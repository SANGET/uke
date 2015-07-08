/**
 * Created by AlexZhang on 7/7/15.
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function () {
  return plugins.nodemon({
    script: 'index.js',
    ext: 'js json',
    env: {
      'NODE_ENV': 'development'
    }
  }).on('restart', function () {
    return console.log('restarted!');
  });
});

gulp.task('demo', function () {
  return plugins.nodemon({
    script: 'demo.js -p 2000',
    ext: 'coffee json',
    env: {
      'NODE_ENV': 'development'
    }
  }).on('restart', function () {
    return console.log('restarted!');
  });
});
