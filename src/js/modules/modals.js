const modals = () => {
    function bindModal(triggerBtnSelector, modalWindowSelector, closeBtnSelector) {
        const triggerBtn = document.querySelectorAll(triggerBtnSelector),
              modalWindow = document.querySelector(modalWindowSelector),
              closeBtn = document.querySelector(closeBtnSelector);

        triggerBtn.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }
    
                modalWindow.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        })

        closeBtn.addEventListener('click', () => {
            modalWindow.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow) {
                modalWindow.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');
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

    //showModalAfter 60 sec
    // showModalByTime('.popup', 60000);
};

export default modals;