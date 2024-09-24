import { fancyTextLaw, fancyText, fancyHtml } from './modalText.js';

function callModal(event,  text) {
  event.preventDefault();
  fancyHtml(text)
}

 function modalPolicy() {
    
   const policy = document.getElementById('policy');

    if (policy) {

    policy.addEventListener('click', function (event) {
        callModal(event, fancyTextLaw.policy)
    })

    }

  }
modalPolicy()



   