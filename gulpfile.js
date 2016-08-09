var gulp = require('gulp');
var template = require('gulp-template-compile');
var sass = require('gulp-sass');
var tojst = require('gulp-tojst');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var path = require('path');

gulp.task('jst', function () {
	return gulp.src('assets/templates/*.html')
		.pipe(tojst('jst.js', {
			separator: '\n',
			prettify: true,
			namespace: 'app.jst',

			processName: function (pathToFile) {
				return path.basename(pathToFile, '.html');
			},

			templateSettings: {
				interpolate: /\{\{(.+?)\}\}/g
			}

		}))
		.pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
	return gulp.src('./assets/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/sass/*.scss', ['sass']);
});


gulp.task('build-js', function () {
	return gulp.src([
		'vendors/jquery.js',
		'vendors/tooltip.js',
		"vendors/underscore.js",
		"vendors/backbone.js",
		"vendors/backbone.modelbinder.js",
		"assets/js/init-application.js",
		"assets/js/views/Map.js",
		"build/jst.js",
		"assets/js/models/Email.js",
		"assets/js/collections/EmailList.js",
		"assets/js/views/DetailedInfo.js",
		"assets/js/views/Email.js",
		"assets/js/views/EmailList.js",
		"assets/js/routers/Router.js",
		"run.js"
	])
		.pipe(uglify())
		.pipe(concat('builded.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('default', ['jst', 'sass', 'build-js', 'sass:watch']);