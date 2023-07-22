
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTimePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const timer = document.querySelector(".timer");
const days = timer.querySelector("[data-days]");
const hours = timer.querySelector("[data-hours]");
const minutes = timer.querySelector("[data-minutes]");
const seconds = timer.querySelector("[data-seconds]");

startBtn.disabled = true;
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
       Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

startBtn.addEventListener("click", startTimer);

function startTimer() {
    const intervalId = setInterval(() => {
      dateTimePicker.disabled = true;
    const currentTime = new Date();
    const timeLeft = convertMs(selectedDate - currentTime);
 days.textContent = addLeadingZero(timeLeft.days);
    hours.textContent = addLeadingZero(timeLeft.hours);
    minutes.textContent = addLeadingZero(timeLeft.minutes);
    seconds.textContent = addLeadingZero(timeLeft.seconds);
     if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
         clearInterval(intervalId);
       dateTimePicker.disabled = false;
         startBtn.disabled = true;
    }
  }, 1000);
}


function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}