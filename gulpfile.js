const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('build', () => (
    gulp.src('src/intercom-fashion.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
));

gulp.task('watch', () => {
    gulp.watch('src/intercom-fashion.js', ['build']);
});

gulp.task('default', ['build', 'watch']);