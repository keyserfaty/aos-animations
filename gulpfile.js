// Gulpfile.js running on stratumui, 
// a css framework available on npmjs.com
var gulp 	= require('gulp'),
  	sass 	= require('gulp-sass'),
  	concat 	= require('gulp-concat'),
  	uglify 	= require('gulp-uglify'),
    rename 	= require('gulp-rename'),
    babel = require('gulp-babel'),
    minifyCSS = require('gulp-csso');

const prefix = 'animations.min'

var paths = {
  lib: {
    css: {
      src: 'src/css/animations.scss',
      dest: 'lib/dist',
    },
    js: {
      src: 'src/js/animations.js',
      dest: 'lib/dist',
    }
  },
  styles: {
    src: 'src/css/*.scss',
    dest: 'dist'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: 'dist'
  }
};

function libStyles () {
  return gulp
  .src(paths.lib.css.src, {
    sourcemaps: true
  })
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(rename({
	  basename: 'animations',
	  suffix: '.min'
	}))
.pipe(gulp.dest(paths.lib.css.dest));
}

function libScripts () {
  return gulp
	.src(paths.lib.js.src, {
		sourcemaps: true
  })
  .pipe(babel())
	.pipe(uglify())
	.pipe(concat(`${prefix}.js`))
	.pipe(gulp.dest(paths.lib.js.dest));
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
  .pipe(babel())
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
var build = gulp.parallel(libStyles, libScripts);

gulp
  .task(watch);

gulp
  .task(build);

gulp
  .task('build', build);

gulp
  .task('watch', watch);