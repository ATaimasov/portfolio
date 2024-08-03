
import { Fancybox } from "@fancyapps/ui";

export function videomaking() {
    
    const videoLink = document.getElementById('video-link');

    if (videoLink) {

        videoLink.addEventListener('click', function (event) {

           
            Fancybox.show(
                
                [
                    {
                    src: '../videos/coding-way.mp4',
                    thumb: "../img/coding-way.png",
                    caption: 'Со звуком ведь лучше 🙂',
                    },
                    {
                        src: '../videos/batin-samogon-trailer.mp4',
                        thumb: "../img/batin-samogon-trailer.png",
                        caption: `Полная версия на <a style="text-underline-offset: 2px; color: currentColor"
                        href="https://www.youtube.com/watch?v=Krf5SKQqT44" target="_blank">ютубе</a> 😋`,
                        },
                    {
                    src: '../videos/laser.mp4',
                    thumb: "../img/laser.png",
                    caption: 'А это просто по приколу лазером пуляю 😎',
                    },
                    
                        
                    
                ],
            );
        })
    }


}



