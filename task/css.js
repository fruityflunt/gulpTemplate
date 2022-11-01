const { src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js")

// Плагины
const size = require("gulp-size");
const concat = require("gulp-concat");
const autoprefix = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");

const css = () => {
    return src(path.css.src)
    .pipe(concat("main.css"))
    .pipe(webpCss())
    .pipe(autoprefix())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({title: "main.css"}))
    .pipe(dest(path.css.dest))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(dest(path.css.dest))
}

module.exports = css;