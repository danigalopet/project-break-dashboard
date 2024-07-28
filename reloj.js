function pad(value) {
    return value < 10 ? '0' + value : value;
}

function updateTime() {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();

    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const messageElement = document.getElementById('message');

    if (timeElement && dateElement && messageElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        dateElement.textContent = `${day}/${month}/${year}`;

        let message = '';
        if (hours >= 0 && hours <= 7) {
            message = 'Es hora de descansar. Apaga y sigue mañana';
        } else if (hours >= 7 && hours <= 12) {
            message = 'Buenos días, desayuna fuerte y a darle al código';
        } else if (hours >= 12 && hours <= 14) {
            message = 'Echa un rato más pero no olvides comer';
        } else if (hours >= 14 && hours <= 16) {
            message = 'Espero que hayas comido';
        } else if (hours >= 16 && hours <= 18) {
            message = 'Buenas tardes, el último empujón';
        } else if (hours >= 18 && hours <= 22) {
            message = 'Esto ya son horas extras, ... piensa en parar pronto';
        } else {
            message = 'Buenas noches, es hora de pensar en parar y descansar';
        }

        messageElement.textContent = message;
    }
}

setInterval(updateTime, 1000);
updateTime();
