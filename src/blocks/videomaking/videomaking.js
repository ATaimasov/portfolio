
import { Fancybox } from "@fancyapps/ui";

export function videomaking() {
    
    const videoLink = document.getElementById('video-link');

    if (videoLink) {
        videoLink.addEventListener('click', function (event) {

            event.preventDefault();
            Fancybox.show(
                [
                    {
                    src: '../videos/coding-way.mp4',
                    
                    },
                ],
            );
        
        })
    }


}



