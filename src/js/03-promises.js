import Notiflix from 'notiflix';


const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  if (step < 0 || firstDelay < 0 || amount <= 0) {
    Notiflix.Notify.failure('Invalid input values. Please make sure Delay step is >= 0, firstDelay is >= 0, and amount is > 0.');
    return;
  }

  for (let i = 1; i <= amount; i += 1) {
      const currentDelay = i === 1 ? firstDelay : firstDelay + (i-1) * step;
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}






