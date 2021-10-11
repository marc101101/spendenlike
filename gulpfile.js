/*=============================================
 =            Gulp Starter by @dope            =
 =============================================*/

/**
 *
 * The packages we are using
 * Not using gulp-load-plugins as it is nice to see whats here.
 *
 **/
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  prefix = require("gulp-autoprefixer");
/**
 *
 * Styles
 * - Compile
 * - Compress/Minify
 * - Catch errors (gulp-plumber)
 * - Autoprefixer
 *
 **/
gulp.task("sass", function () {
  gulp
    .src("src/assets/sass/style.scss")
    .pipe(sass())
    .pipe(
      prefix("last 2 versions", "> 1%", "ie 10", "Android 2", "Firefox ESR")
    )
    .pipe(gulp.dest("assets/css/"));
});

//Only use for production site
gulp.task("watch", function () {
  gulp.watch("src/assets/sass/**/*.scss", ["sass"]);
});
