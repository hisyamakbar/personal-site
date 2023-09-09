// Typed.js
import Typed from 'typed.js';
import confetti from 'canvas-confetti';

new Typed('#element', {
   strings: ["Busy coding!",
      "Learning mode: engaged.",
      "Code mode: focused.",
      "Learning mode: immersed.",
      "Dev mode: in progress.",
      "Coding marathon: intense.",
      "Immersed in coding."
   ],
   typeSpeed: 50,
   backDelay: 75,
   loop: true,
});

// confetti
const input = document.getElementById('queue')
const btnQueue = document.getElementById('btnQueue')
// Counting
const queueNumber = document.getElementById('queueNumber')
const textRemove = document.getElementById('textRemove')
let counter = 9999998


const action = () => {
   const inputValue = input.value.trim();

   if (inputValue.length >= 10 && inputValue.includes('@')) {



      const myCanvas = document.createElement('canvas');
      document.body.appendChild(myCanvas);

      const myConfetti = confetti.create(myCanvas, {
         resize: true,
         useWorker: true
      });
      confetti({
         particleCount: 200,
         spread: 360
         // any other options from the global
         // confetti function
      });
      myCanvas.remove()


      counter++;
      queueNumber.textContent = `Your queue number is ${counter}`;
      textRemove.remove()
      input.value = ''

   } else if (input.value === '') {
      queueNumber.textContent = `Your input is empty 🤣🤣🤣`;
      textRemove.remove()

   } else {
      queueNumber.textContent = `Make sure your email correct 🤨`;
      textRemove.remove()
   }
}


input.addEventListener('keydown', (key) => {
   if (key.key === 'Enter') {
      action()
   }
})

btnQueue.addEventListener('click', () => {

   action()
})

//Carret TypedJS
const carretTypedJs = document.querySelector('span.typed-cursor')

// Dark Mode
const toggleBtn = document.getElementById("toggleBtn");
const btnIcon = document.getElementById('btnIcon')
const html = document.querySelector("html");
toggleBtn.addEventListener("click", () => {
   if (toggleBtn.checked) {
      html.classList.add("dark")
      btnIcon.classList.remove(`bg-[url('/public/moon.svg')]`)
      btnIcon.classList.add(`bg-[url('/public/sun.svg')]`)
      carretTypedJs.style.color = "white"
   } else {
      html.classList.remove("dark");
      btnIcon.classList.remove(`bg-[url('/public/sun.svg')]`)
      btnIcon.classList.add(`bg-[url('/public/moon.svg')]`)
      carretTypedJs.style.color = "#0a0a0a"
   }
});