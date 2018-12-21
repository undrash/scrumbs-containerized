var gulp = require('gulp');


gulp.task( "copy", function () {
    gulp.src( "./assets/**/*" )
        .pipe( gulp.dest( "../nginx/scrumbs-client" ) );

    gulp.src( ["./dist/**/*", "!./dist/output.js"] )
        .pipe( gulp.dest( "../nginx/scrumbs-client" ) );

    gulp.src( "./dist/output.js" )
        .pipe( gulp.dest( "../nginx/scrumbs-client/js" ) );

});

gulp.task( "default", ["copy"], function () {
    console.info("Copy task executed.");
});
