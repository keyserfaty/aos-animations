// Gulpfile.js running on stratumui, 
// a css framework available on npmjs.com
var gulp 	= require('gulp'),
  	sass 	= require('gulp-sass'),
  	concat 	= require('gulp-concat'),
  	uglify 	= require('gulp-uglify'),
    rename 	= require('gulp-rename'),
    minifyCSS = require('gulp-csso');

var paths = {
  lib: {
    src: 'src/animations.scss',
    dest: 'dist/lib',
  },
  styles: {
    src: 'src/*.scss',
    dest: 'dist'
  },
  scripts: {
    src: 'src/*.js',
    dest: 'dist'
  }
};

function lib () {
  return gulp
  .src(paths.lib.src, {
    sourcemaps: true
  })
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(rename({
	  basename: 'animate',
	  suffix: '.min'
	}))
.pipe(gulp.dest(paths.lib.dest));
}

function styles() {
  return gulp
  	.src(paths.styles.src, {
      sourcemaps: true
    })
    .pipe(sass())
    .pipe(concat('styles.css'))
.pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp
	.src(paths.scripts.src, {
		sourcemaps: true
	})
	.pipe(uglify())
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp
	  .watch(paths.scripts.src, scripts);
  gulp
  	.watch(paths.styles.src, styles);
}

var watch = gulp.parallel(styles, scripts, watch);
var build = gulp.parallel(lib);

gulp
  .task(watch);

gulp
  .task(build);

gulp
  .task('build', build);

gulp
  .task('watch', watch);