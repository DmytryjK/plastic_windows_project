import isTheInputEmpty from './isTheInputEmpty';

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach(item => {

            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (e.target.previousElementSibling !== null && 
                e.target.previousElementSibling.classList.contains('error')) {
                    e.target.previousSibling.remove();
                } 

                if (e.target.classList.contains('popup_calc_button') && 
                (isTheInputEmpty('#width') || isTheInputEmpty('#height'))) {
                    const errorMessage = document.createElement('span');

                    errorMessage.innerHTML = '*Обязательные поля';
                    errorMessage.classList.add('error');
                    errorMessage.style.cssText = 'color: red; position: absolute; bottom: 90px; left: 50%; transform: translateX(-50%)';

                    e.target.before(errorMessage);
                } else {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
        
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                }
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.cssText = 'width: 50px; height: 50px; overflow-Y: scroll; visibility: hidden';

        document.body.appendChild(div);
        
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;