
// var gulp = require('gulp');
// function defaultTask(cb) {
//     // place code for your default task here

//     gulp.task('default', function() {
//         // gulp.src('./client/index.html')
//         gulp.src('./src/index.html')
//             .pipe(gulp.dest('./dist/index.html'))
//     });
//     cb();
//   }
  
//   exports.default = defaultTask
  
var gulp = require('gulp');
var del = require('del');

gulp.task('default',  gulp.series(clean, copyIndex));

function clean(done) {
    del(['dist']);
    done();  //# Async callback for completion.
}

function copyIndex(done) {
    return gulp.src('./src/index.html').pipe(gulp.dest('./dist', {overwrite: true}));
}