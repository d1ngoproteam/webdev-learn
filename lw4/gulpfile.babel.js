'use strict';
var gulp = require('gulp');
var inject = require('gulp-inject');
var watch = require('gulp-watch');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var suffix = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var browserSync = require("browser-sync");
var removeHtmlComments = require('gulp-remove-html-comments');
var reload = browserSync.reload;
var gulpsync = require('gulp-sync')(gulp);
var babelRegister = require('babel-register');

var path = {
  build: {
  html: 'build/',
  js: 'build/js/',
  css: 'build/css/',
  audio: 'build/audio/',
},
src: {
  html: 'src/*.html',
  js: 'src/js/registration.js',
  jquery: 'src/js/jquery-3.2.1.min.js',
  style: 'src/css/*.css',
},
watch: {
  html: 'src/**/*.html',
  js: 'src/js/**/*.js',
  style: 'src/css/**/*.css'
},
  clean: './build'
};

var config = {
  server: {
    baseDir: "./build"
  },
  tunnel: true,
  host: 'localhost',
  port: 7080,
  logPrefix: "d1ngoproteam"
};

gulp.task('html:build', function () {
  gulp.src(path.src.html)
  .pipe(gulp.dest(path.build.html))
  .on('end', function () {
    gulp.src(path.build.html + 'index.html')
    .pipe(inject(gulp.src('./build/js/*.js', {read: false}), {relative: true}))
    .pipe(inject(gulp.src('./build/css/*.css', {read: false}), {relative: true}))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(path.build.html));
  })
  .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
  gulp.src(path.src.style)
  .pipe(prefixer())
  .pipe(cssmin())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest(path.build.css))
  .pipe(reload({stream: true}));
});


gulp.task('js:build', function () {
  gulp.src(path.src.js)
  .pipe(babel())
  .pipe(uglify())
  .pipe(suffix({suffix: '.min'}))
  .pipe(gulp.dest(path.build.js))
  .pipe(reload({stream: true}));
});

gulp.task('move:jquery', function(){
  gulp.src(path.src.jquery)
  .pipe(gulp.dest(path.build.js))
});

gulp.task('build', gulpsync.sync([
  'move:jquery',
  'js:build',
  'style:build',
  'html:build',
]));

gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
});

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('dev', ['build', 'webserver', 'watch']);

gulp.task('default', ['dev']);
