const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path");
const app = require("../config/app")

// Плагины
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

const js = () => {
    return src(path.js.src)
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest))
}

module.exports = js;