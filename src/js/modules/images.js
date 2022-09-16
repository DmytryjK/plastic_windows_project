const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img'),
          body = document.querySelector('body');
    
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.cssText = 'justify-content: center; align-items: center;';
    bigImage.style.cssText = 'max-width: 80%';
    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            body.style.overflow = 'visible';
        }
    })
};

export default images;