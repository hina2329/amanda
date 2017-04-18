// Dependencies
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');



/*
 ===== TASKS =====
 */

// Task: SASS Compiling
gulp.task('sass', function () {
    gulp.src('src/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('build/css/'));
});


// Task: Browser Syncing
gulp.task('browser-sync', function () {
    browserSync.init(
        [
            'build/css/style.css',
            'build/js/*js',
            'build/*.html'
        ],
        {
            server: {
                baseDir: './build'
            }
        }
    );
});


// Task: Watch
gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
});


// Task: DEFAULT
gulp.task('default', ['browser-sync', 'watch']);