var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var nib = require('nib');

var config = {
  styles : {
    main: './src/styles/master.styl',
    watch: './src/styles/**/*.styl',
    output: './dist/css'
  }
};

gulp.task('server',function()
{
  gulp.src('./dist')
    .pipe(webserver({
      host: '0.0.0.0',
      port: '8000',
      livereload: true

    }))
});

gulp.task('build:css',function()
{
    gulp.src(config.styles.main)
      .pipe(stylus({
        use: nib(),
        'include css': true
      }))
      .pipe(minifyCSS())
      .pipe(rename('gridminCss.min.css'))
      .pipe(gulp.dest(config.styles.output));
});

gulp.task('watch',function()
{
  gulp.watch(config.styles.watch,['build:css']);
});

gulp.task('build',['build:css']);
gulp.task('default',['server','watch','build:css']);
