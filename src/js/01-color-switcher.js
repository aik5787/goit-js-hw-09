const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

let setIntervalId = null;


function startChangeColor() {
    
    setIntervalId = setInterval(() => {
        const newColor = getRandomHexColor();
        document.body.style.backgroundColor = newColor;
    }, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function stopChangeColor() {
    clearInterval(setIntervalId)
    startBtn.disabled = false;
    stopBtn.disabled = true;
}



    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}