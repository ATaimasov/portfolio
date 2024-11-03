export const projects = [
    {
        id            : 1,
        type          : 'study',
        img           : '../img/AmazinPlaces.png',
        title         : 'Удивительные места в Японии',
        description   : `Проект по верстке`,
        subDescription: 'Статичный одностраничный сайт',
        stack         : {
            main      : ['HTML', 'CSS', 'JS'],
            libs      : [],
            additional: ['BEM']
        },
        linkGithub        : 'https://github.com/ATaimasov/Amazing-places',
        linkServer        : 'https://amazing-places.xn--80aag0apnud.xn--p1ai/',
        figma             : 'https://www.figma.com/design/OmOvlQ6tioaV8XtoDP5tbl/travel-landing-page-jacobvoyles-(Copy)?node-id=0-1&t=g5g6Sx36lF1adm7M-1',
        youtube           : 'https://www.youtube.com/watch?v=OkNfBnq_c7c&list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--&index=1',
        originalRepository: ''
    },
    {
        id            : 2,
        type          : 'own',
        img           : '/img/Homyakator.png',
        title         : 'Интернет-магазин "Хомякатор"',
        description   : 'Магазин для брутальных хомяков',
        subDescription: 'Есть возможность "оформить заказ" - данные с добавленными товарами отправятся на почту.',
        stack         : {
            main      : ['HTML', 'SCSS', 'JS'],
            libs      : ['jQuery', 'SlickSlider', 'FancyBox'],
            additional: ['Gulp', 'Webpack', 'BEM', 'PHPMailer']
        },
        linkGithub: 'https://github.com/ATaimasov/homyakator-market',
        linkServer: 'https://homyakator.xn--80aag0apnud.xn--p1ai/',
        figma     : 'https://www.figma.com/design/z6VPzp9GbNEkygSYjN6QtK/Boon-Market-(Copy)?node-id=1-2&t=rPYF6eiw4kkoWXRo-1',
        youtube   : '',
        originalRepository: '',
    },
    {
        id            : 3,
        type          : 'own',
        img           : '../img/Portfolio.png',
        title         : 'Портфолио',
        description   : `Использован принцип абстракции HTML-кода при формировании страницы проектов. `,
        subDescription: 'Использован свой дизайн.',
        stack         : {
            main      : ['HTML', 'SCSS', 'JS'],
            libs      : ['Swiper', 'Fontello', 'FancyBox'],
            additional: ['Gulp', 'Webpack', 'BEM', 'PHPMailer']
        },
        linkGithub: 'https://github.com/ATaimasov/Portfolio',
        linkServer: 'https://xn--80aag0apnud.xn--p1ai/',
        figma     : '',
        youtube   : '',
        originalRepository: ''
    },
    {
        id            : 4,
        type          : 'study',
        img           : '../img/cv-generator.png',
        title         : 'Генератор Резюме',
        description   : `Можно сформировать динамическое резюме и загрузить "комментарии"`,
        subDescription: 'Аватар добавляется посредством вставки ссылки на изображение (URL) в необходимое поле.',
        stack         : {
            main      : ['Vue'],
            libs      : [],
            additional: []
        },
        linkGithub: 'https://github.com/ATaimasov/_edu-cv-generator',
        linkServer: 'https://cv-generator.xn--80aag0apnud.xn--p1ai/',
        figma     : '',
        youtube   : 'https://www.youtube.com/watch?v=1rRD9uMF92o',
        originalRepository: ''
    },
    {
        id            : 5,
        type          : 'study',
        img           : '../img/weather-app.png',
        title         : 'Приложение погоды',
        description   : `Просмотр погоды по геоданным на 7 дней. Можно добавить локацию в избранное.`,
        subDescription: 'Было реализовано много своего: другие API-запросы, встроен Swiper, etc',
        stack         : {
            main      : ['Vue', 'Vue Router'],
            libs      : ['TailwindCSS', 'Swiper'],
            additional: ['Axios', 'Vite']
        },
        linkGithub: 'https://github.com/ATaimasov/_edu-weather-app',
        linkServer: 'https://weather-app.xn--80aag0apnud.xn--p1ai/',
        figma     : '',
        youtube   : 'https://www.youtube.com/watch?v=gUsBaB5ViAo&list=PL4cUxeGkcC9hfoy8vFQ5tbXO3vY0xhhUZ',
        originalRepository: 'https://github.com/johnkomarnicki/net_ninja_vue_3_weather_app'
    },
    {
        id            : 6,
        type          : 'own',
        img           : '../img/test-amocrm.png',
        title         : 'Создание сущностей amoCRM',
        description   : `Тестовое задание (описание в readme)`,
        subDescription: 'Создание сущностей происходит в аккаунте amoCRM посредством отправки POST-запроса с токеном',
        stack         : {
            main      : ['Vue', 'Pinia', 'CSS'],
            libs      : [],
            additional: ['Axios']
        },
        linkGithub: 'https://github.com/ATaimasov/_.test-amoCRM',
        linkServer: 'https://test-amocrm.xn--80aag0apnud.xn--p1ai/',
        figma     : '',
        youtube   : '',
        originalRepository: ''
    },
    {
        id            : 7,
        type          : 'own',
        img           : '../img/todo-app.png',
        title         : 'ToDo-List',
        description   : `Задачи/заметки можно добавлять, редактировать, удалять, отмечать выполненными.`,
        subDescription: 'Они сохраняются в localStorage',
        stack         : {
            main      : ['Vue', 'Pinia', 'CSS'],
            libs      : [],
            additional: ['uid']
        },
        linkGithub: 'https://github.com/ATaimasov/ToDo',
        linkServer: 'https://todo.xn--80aag0apnud.xn--p1ai/',
        figma     : '',
        youtube   : '',
        originalRepository: ''
    },
    {
        id            : 8,
        type          : 'own',
        img           : '../img/test-devicesAndNodes.png',
        title         : 'Устройства и узлы',
        description   : `Тестовое задание`,
        subDescription: 'Можно добавлять, удалять и редактировать узлы. Они сохраняются в localStorage',
        stack         : {
            main      : ['Vue', 'Pinia', 'CSS'],
            libs      : ['VueUse'],
            additional: ['uid']
        },
        linkGithub: 'https://github.com/ATaimasov/_.test-DevicesAndNodes',
        linkServer: 'https://devices-and-nodes.xn--80aag0apnud.xn--p1ai/',
        figma     : '',
        youtube   : '',
        originalRepository: ''
    },
]

// mutating array to make fresh projects have ascending order
projects.forEach((project, index) => {
    project.id = projects.length - index;
})

