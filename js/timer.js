export const timer = () => {
    function timerActive(timeEnd, daysSel, hoursSel, minutesSel, secondsSel) {
        const timeLast = timeEnd - new Date();
        const days = Math.floor(timeLast / (1000 * 60 * 60 * 24)),
            hours = Math.floor(timeLast % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(timeLast % (1000 * 60 * 60) / (1000 * 60 )),
            seconds = Math.floor(timeLast % (1000 * 60) / 1000);

        
            document.querySelector(daysSel).innerHTML = (days).toString().padStart(2, "0");
            document.querySelector(hoursSel).innerHTML = (hours).toString().padStart(2, "0");;
            document.querySelector(minutesSel).innerHTML = (minutes).toString().padStart(2, "0");;
            document.querySelector(secondsSel).innerHTML = (seconds).toString().padStart(2, "0");;

        if (timeLast <= 0) {
            clearInterval(interval);
        }
    }

    const timeNow = new Date(2024, 6, 1, 0, 0, 0)
    const interval = setInterval(() => timerActive(timeNow, '#days', '#hours', '#minutes', '#seconds'), 500)
}