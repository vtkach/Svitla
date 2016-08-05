var gulp = require('gulp');
var template = require('gulp-template-compile');
var tojst = require('gulp-tojst');
var path = require('path');

gulp.task('jst', function () {
	gulp.src('assets/templates/*.html')
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


gulp.task('default', ['jst']);