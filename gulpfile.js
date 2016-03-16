var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');

gulp.task('default', function() {
  buildScript('./src/app.js', './build/app.js');
});

function buildScript(inFile, outFile) {
  return browserify(inFile)
    .transform('babelify')
    .bundle()
    .pipe(fs.createWriteStream(outFile));
}