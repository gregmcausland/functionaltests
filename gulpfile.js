var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');

gulp.task('default', function() {
  buildScript('./src/app.js', './build/app.js');
});

function buildScript(inFile, outFile) {
  return browserify(inFile)
    .transform('babelify', {
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-react-jsx']
    })
    .bundle()
    .pipe(fs.createWriteStream(outFile));
}