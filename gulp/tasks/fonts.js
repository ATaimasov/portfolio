import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
    const fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
    return fs.promises.readdir(app.path.build.fonts)
        .then((fontsFiles) => {
            if (fontsFiles.length > 0) {
                return new Promise((resolve, reject) => {
                    fs.writeFile(fontsFile, '', (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            let newFileOnly;
                            for (let i = 0; i < fontsFiles.length; i++) {
                                let fontFileName = fontsFiles[i].split('.')[0];
                                if (newFileOnly !== fontFileName) {
                                    let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                                    let fontWeights = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                                    if (fontWeights.toLowerCase() === 'thin') {
                                        fontWeights = 100;
                                    } else if (fontWeights.toLowerCase() === 'extralight') {
                                        fontWeights = 200;
                                    } else if (fontWeights.toLowerCase() === 'light') {
                                        fontWeights = 300;
                                    } else if (fontWeights.toLowerCase() === 'medium') {
                                        fontWeights = 500;
                                    } else if (fontWeights.toLowerCase() === 'semibold') {
                                        fontWeights = 600;
                                    } else if (fontWeights.toLowerCase() === 'bold') {
                                        fontWeights = 700;
                                    } else if (fontWeights.toLowerCase() === 'extrabold' || fontWeights.toLowerCase() === 'heavy') {
                                        fontWeights = 800;
                                    } else if (fontWeights.toLowerCase() === 'black') {
                                        fontWeights = 900;
                                    } else {
                                        fontWeights = 400;
                                    }
                                    fs.appendFile(fontsFile,
                                        `@font-face {\n\tfont-family: ${fontName}; \n\tfont-display: swap; \n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff"); \n\tfont-weight: ${fontWeights}; \n\tfont-style: normal; \n}\r\n`,
                                        (err) => {
                                            if (err) {
                                                reject(err);
                                            }
                                        });
                                    newFileOnly = fontFileName;
                                }
                            }
                            resolve();
                        }
                    });
                });
            } else {
                console.log('No fonts files found.');
                return Promise.resolve();
            }
        })
        .catch((err) => {
            console.error(err);
        });
}
