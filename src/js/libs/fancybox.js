import { Fancybox } from "@fancyapps/ui";


export const fancyText = {
    successSend   : `<p class="popup-text">Данные успешно отправлены</p>`,
    requiredFields: `<p class="popup-text">Заполните обязательные поля</p>`,
    errorSend     : `<p class="popup-text">Возникла ошибка</p>`,
    // policy text in the policy.js
  }
  
  export function fancyHtml(text) {
    Fancybox.show(
      [
        {
          src: text,
          type: 'html',
        },
      ],
    );
  }
