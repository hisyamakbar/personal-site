// Typed.js
import Typed from 'typed.js';
import confetti from 'canvas-confetti';

new Typed('#element', {
   strings: ["Busy coding!",
      "Code: focused",
      "Learning: immersed",
      "Dev: in progress",
      "Coding: intense",
      "Development: deep dive",
      "Immersed: coding"
   ],
   typeSpeed: 50,
   backDelay: 75,
   loop: true,
});

// navbar shadow
window.addEventListener('scroll', () => {
   const navbar = document.getElementById('navbar')
   if (window.pageYOffset > 0) {
      navbar.classList.add('shadow-sm')
      navbar.classList.add('dark:shadow-sm')
   } else {
      navbar.classList.remove('shadow-sm')
      navbar.classList.remove('dark:shadow-sm')
   }
})

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

// playing with navbar
const itemNav = document.querySelectorAll('header div a')
const cards = document.querySelectorAll('main .card')

itemNav.forEach(item => {
   item.addEventListener(('click'), () => {
      const navActive = document.querySelector('.linkActive');

      if (navActive) {
         navActive.classList.remove('linkActive');
      }

      if (!item.classList.contains('linkActive')) {
         item.classList.add('linkActive');
      }

      cards.forEach(card => {
         card.classList.add('blur-sm');
         if (item.textContent.includes('All')) {
            card.classList.toggle('blur-sm')
         }
      });

      if (item.textContent.includes('About')) {
         const busyElement = document.getElementById('busy');
         const twitter = document.getElementById('twitter');

         if (busyElement) {
            busyElement.classList.toggle('blur-sm');
         }
         if (twitter) {
            twitter.classList.toggle('blur-sm');
         }
      }

      if (item.textContent.includes('Projects')) {
         const projectsElement = document.getElementById('projects');
         if (projectsElement) {
            projectsElement.classList.toggle('blur-sm');
         }
      }

      if (item.textContent.includes('Other')) {
         const other2Element = document.getElementById('queueContainer');
         const otherElement = document.getElementById('other');
         if (otherElement) {
            otherElement.classList.toggle('blur-sm');
         }
         if (other2Element) {
            other2Element.classList.toggle('blur-sm');
         }
      }
   })
});