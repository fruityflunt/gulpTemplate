const { src, dest} = require("gulp");

// Конфигурация
const path = require("../config/path");
const app = require("../config/app")

// Плагины
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");

const html = () => {
    return src(path.html.src)
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({title: "HTML BEFORE: "}))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({title: "HTML AFTER: "}))
        .pipe(dest(path.html.dest));
}

module.exports = html;