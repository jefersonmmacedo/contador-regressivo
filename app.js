const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const loading = document.querySelector('#loading');
const countdown = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() +1;
const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearContainer.textContent = nextYear;

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;


function insertDataViwer(days, hours, minutes, seconds) {
    daysContainer.textContent =  getTimeUnit(days);
    hoursContainer.textContent =  getTimeUnit(hours);
    minutesContainer.textContent =  getTimeUnit(minutes);
    secondsContainer.textContent =  getTimeUnit(seconds);
}

function updateCountDow() {
    const currentTime = new Date();
    const difference = newYearDate - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertDataViwer(days, hours, minutes, seconds);    
}

function initalContDown() {
    loading.remove();
    countdown.style.display = 'flex'
}

setTimeout(initalContDown, 1000)

setInterval(updateCountDow,  1000)