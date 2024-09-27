export const projectsInfo = [
    {
        id: 1,
        type: 'study',
        img:  '../img/AmazinPlaces.png',
        title: 'Удивительные места в Японии',
        description: `Учебный проект по верстке: одностраничник.`,
        subDescription: '',
        stack: {
            main: ['HTML', 'CSS', 'JS'],
            libs: [],
            additional: ['BEM']
        },
        linkGithub: 'https://github.com/ATaimasov/Amazing-places',
        linkServer: 'https://amazing-places.xn--80aag0apnud.xn--p1ai/',
        figma: 'https://www.figma.com/design/OmOvlQ6tioaV8XtoDP5tbl/travel-landing-page-jacobvoyles-(Copy)?node-id=0-1&t=g5g6Sx36lF1adm7M-1',
        youtube: 'https://www.youtube.com/watch?v=OkNfBnq_c7c&list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--&index=1'
    },
    {
        id: 2,
        type: 'own',
        img:  '/img/Homyakator.png',
        title: 'Интернет-магазин "Хомякатор"',
        description: 'Проект создан с перспективой на будущее и предоставляет собой аналогию интернет-магазина для людей, но ориентированного на потребителей пушистых и щекастых, а также фанатов брутальных хомяков.',
        subDescription: 'Есть возможность "оформить заказ" - данные с добавленными товарами отправятся на почту.',
        stack: {
            main: ['HTML', 'SCSS', 'JS'],
            libs: ['jQuery', 'SlickSlider', 'FancyBox'],
            additional: ['Gulp', 'Webpack', 'BEM', 'PHPMailer']
        },
        linkGithub: 'https://github.com/ATaimasov/homyakator-market',
        linkServer: 'https://homyakator.xn--80aag0apnud.xn--p1ai/',
        figma: 'https://www.figma.com/design/z6VPzp9GbNEkygSYjN6QtK/Boon-Market-(Copy)?node-id=1-2&t=rPYF6eiw4kkoWXRo-1',
        youtube: ''
    },
    {
        id: 3,
        type: 'own',
        img:  '../img/Portfolio.png',
        title: 'Портфолио',
        description: `Проект-визитница, где нескучно рассказываю о себе, своих проектах и опыте работы.`,
        subDescription: 'Использован принцип абстракции HTML кода при формировании страницы проектов',
        stack: {
            main: ['HTML', 'SCSS', 'JS'],
            libs: ['Swiper', 'Fontello', 'FancyBox'],
            additional: ['Gulp', 'Webpack', 'BEM', 'PHPMailer']
        },
        linkGithub: 'https://github.com/ATaimasov/Portfolio',
        linkServer: 'https://xn--80aag0apnud.xn--p1ai/',
        figma: 'https://www.figma.com/design/h96DNWwE0gxClkL6zAG7i9/Lightfolio-(Copy)?node-id=0-1&t=IbO4vzWDV3x5wpkv-1',
        youtube: ''
    },
    {
        id: 4,
        type: 'study',
        img:  '../img/cv-generator.png',
        title: 'Проект: "Генератор Резюме"',
        description: `Учебный проект из курса Vue JS - Полный курс c нуля `,
        subDescription: 'Result University (Владилен Минин)',
        stack: {
            main: ['Vue'],
            libs: [],
            additional: []
        },
        linkGithub: 'https://github.com/ATaimasov/_edu-cv-generator',
        linkServer: '#',
        figma: '',
        youtube: 'https://www.youtube.com/watch?v=1rRD9uMF92o'
    },
]


// don't use capital letters
export const stackLinks = {
    libsLinks: {
        swiper: 'https://swiperjs.com/',
        fancybox: 'https://fancyapps.com/fancybox/',
        fontello: 'https://fontello.com/',
        jquery: 'https://jquery.com/',
        slickslider: 'https://kenwheeler.github.io/slick/'
    },
    additionalLinks: {
        phpmailer: 'https://github.com/PHPMailer/PHPMailer',
        gulp: 'https://gulpjs.com/',
        webpack: 'https://webpack.js.org/',
        bem: 'https://ru.bem.info/methodology/',
    }
    
    
}