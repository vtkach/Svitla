var gulp = require('gulp');
var template = require('gulp-template-compile');
var sass = require('gulp-sass');
var tojst = require('gulp-tojst');
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

gulp.task('default', ['jst', 'sass', 'sass:watch']);