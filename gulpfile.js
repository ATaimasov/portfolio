import gulp from "gulp";
// config
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

import dotenv from 'dotenv';
dotenv.config();

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev  : !process.argv.includes('--build'),
    path   : path,
    gulp   : gulp,
    plugins: plugins
}

// tasks
import { reset } from "./gulp/tasks/reset.js";
import { copyImages, copySVG, copyVideos, copyFavicons, copyFonts, copyMailer } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { ftp } from "./gulp/tasks/ftp.js";

function watcher () {
    gulp.watch(path.watch.images, copyImages);
    gulp.watch(path.watch.favicons, copySVG);
    gulp.watch(path.watch.videos, copyVideos);
    gulp.watch(path.watch.favicons, copyFavicons);
    gulp.watch(path.watch.fonts, copyFonts);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const copy = gulp.parallel(copyImages, copySVG, copyVideos, copyFavicons, copyFonts, copyMailer);

const mainTasks = gulp.parallel(images, copy, html, scss, js);
const dev       = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build     = gulp.series(reset, mainTasks);
const deployFTP = gulp.series(reset, mainTasks, ftp);


export { dev, build, deployFTP };

gulp.task('default', dev);
