/*/ ================================ \*\
|*| REQUIRE PLUGINS
\*\ ================================ /*/
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var transform = require("vinyl-transform");
var through2 = require('through2');
// un
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var xto6 = require('gulp-xto6');



/*/ ================================ \*\
|*| TASKS
\*\ ================================ /*/
// Stylus
gulp.task('stylus', function() {
	var files = ['./src/stylus/**/*.stylus'];
	gulp.src(files)
		.pipe(plumber()) // error時にwatchを止めないやつ
		.pipe(stylus('main.css'))
		.pipe(gulp.dest('./src/dist/css'));
});

// Concat
gulp.task('concat', function() {
	var files = ['./src/dist/css/**/*.css'];
	gulp.src(files)
		.pipe(plumber())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./main/css'));
});

// Babel
gulp.task('babel', function() {
	var files = ['./src/es6/*.js'];
	gulp.src(files)
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('./src/dist/js'));
});

// browserify
gulp.task('browserify', function() {
	gulp.src('./src/dist/js/main.js')
		.pipe(through2.obj(function(file, encode, callback) {
			browserify(file.path)
				.bundle(function(err, res) {
					file.contents = res;
					callback(null, file)
				});
		}))
		.pipe(gulp.dest('./main/js'));
});

// Concat
/*gulp.task('concat', function() {
	var files = ['./src/js/*.js'];
	gulp.src(files)
		.pipe(plumber())
		.pipe(concat('particles.js'))
		.pipe(gulp.dest('./test/js'));
});*/

// Xto6
/*gulp.task('xto', function() {
	return gulp.src('./########')
		.pipe(xto6())
		.pipe(gulp.dest('./########'));
});*/

/*/ ================================ \*\
|*| DEFAULT TASK (WATCH)
\*\ ================================ /*/
gulp.task('default', function() {
	gulp.watch('./src/stylus/**/*stylus', ['stylus']);
	gulp.watch('./src/es6/**/*js', ['babel']);
	gulp.watch('./src/dist/js/**/*js', ['browserify']);
});
