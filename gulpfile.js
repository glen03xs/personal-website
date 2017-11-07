// Necessary Modules
var gulp = require('gulp'),
    browserSync =  require('browser-sync'),
    sass = require('gulp-sass');

// Configure BrowserSync
gulp.task('browser-sync', function() {
    var files = [
        'css/styles.css',
        'js/custom.js',
        './*.html'
    ];

    // Initialize Browsersync
    browserSync.init(files, {
        proxy: "http://localhost/html-gs/",
        browser: "google chrome",
        reloadDelay: 500
    });
});

// Configure SASS task to run when the specified .scss files change.
// BrowserSync will also reload browses.
gulp.task('sass', function() {
    return gulp.src('css/sass/*.scss')
    .pipe(sass({
        'outputStyle' : 'nested'
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

// Create the default task that can be called using 'gulp'.
// The task will process SASS, run browser-sync and start watching for changes.
li