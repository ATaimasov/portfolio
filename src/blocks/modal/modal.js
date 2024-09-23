import { fancyTextLaw, fancyText, fancyHtml } from './modalText.js';

function callModal(event,  text) {
  event.preventDefault();
  fancyHtml(text)
}

 function modalPolicy() {
    
    if (window.location.href.endsWith('contacts') || window.location.href.endsWith('contacts.html')) {

    const policy = document.getElementById('policy');
    policy.addEventListener('click', function (event) {
        callModal(event, fancyTextLaw.policy)
    })

    }

  }
modalPolicy()



   