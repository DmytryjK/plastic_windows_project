const modals = () => {
    function bindModal(triggerBtnSelector, modalWindowSelector, closeBtnSelector, closeClickOverlay = true) {
        const triggerBtn = document.querySelectorAll(triggerBtnSelector),
              modalWindow = document.querySelector(modalWindowSelector),
              closeBtn = document.querySelector(closeBtnSelector),
              windows = document.querySelectorAll('[data-modal]');

        triggerBtn.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                };

                windows.forEach(element => {
                    element.style.display = 'none';
                });
    
                modalWindow.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        })

        closeBtn.addEventListener('click', () => {
            modalWindow.style.display = "none";
            document.body.style.overflow = "";

            windows.forEach(element => {
                element.style.display = 'none';
            });

            // document.body.classList.remove('modal-open');
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow && closeClickOverlay) {
                modalWindow.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');

                windows.forEach(element => {
                    element.style.display = 'none';
                });
            }
        })
    };

    //show model by some time (60 sec)
    function showModalByTime (selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    // popup_engineer
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');

    // popup
    bindModal('.phone_link', '.popup', '.popup .popup_close');

    // popup_calc
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    //showModalAfter 60 sec
    // showModalByTime('.popup', 60000);
};

export default modals;