import { Fancybox } from "@fancyapps/ui";


export const fancyText = {
    successSend   : `<p class="modal-text">Данные успешно отправлены</p>`,
    requiredFields: `<p class="modal-text">Заполните обязательные поля</p>`,
    errorSend     : `<p class="modal-text">Возникла ошибка</p>`,
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
