const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds')


const newYears =  '1 jan 2022'

function countDown() {
    const currentYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date ( currentYearDate-currentDate  ) /1000;
    const days = Math.floor (totalSeconds/3600/24);
    const hours = Math.floor (totalSeconds/3600) % 24;
    const minutes = Math.floor (totalSeconds/60) % 60;
    const seconds = Math.floor (totalSeconds%60);
    
    console.log(days,hours,minutes,seconds);

    dayEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}

countDown();


setInterval(countDown,1000);