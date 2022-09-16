const timer = (id, deadline) => {
    const getTimeRemaining = () => {
        const time = Date.parse(deadline) - Date.parse(new Date()); //new Date() - возвращает текущее время
        const seconds = Math.floor((time / 1000) % 60),
              minutes = Math.floor((time / 1000 / 60) % 60),
              hours = Math.floor((time / 1000 / 60 / 60) % 24),
              days = Math.floor(time / 1000 / 60 / 60 / 24);
        
        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const setClock = (selector) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock(); //фиксим баг, чтобы таймер при обновлении страницы показывал коректные значения сразу.
        
        function updateClock() {
            const t = getTimeRemaining();

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        };
    };

    setClock(id);
};

export default timer;
