export const copyImages = () => {
    return app.gulp.src(app.path.src.images, { encoding: false })
    .pipe(app.plugins.rename ( {
        dirname: ''
    }))
        .pipe(app.gulp.dest(app.path.build.images))
}

export const copySVG = () => {
    return app.gulp.src(app.path.src.svg, { encoding: false })
    .pipe(app.plugins.rename ( {
        dirname: ''
    }))
        .pipe(app.gulp.dest(app.path.build.svg))
}

export const copyVideos = () => {
    return app.gulp.src(app.path.src.videos, { encoding: false })
    .pipe(app.plugins.rename ( {
        dirname: ''
    }))
        .pipe(app.gulp.dest(app.path.build.videos))
}


export const copyFavicons = () => {
    return app.gulp.src(app.path.src.favicons)
        .pipe(app.gulp.dest(app.path.build.favicons))
}

