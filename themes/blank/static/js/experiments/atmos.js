// console.log('atmos.js on the case');
// This ID should the be the name of the experiment page:
//

// Atmosphere in this case
// Get the parent wrapper node:

const parentWrapper = document.querySelector('article');
// Get the DOM node:
const svgContainer = document.querySelector('#atmosphere');

// Get the viewport dimensions and set up two constants:
const x = document.body.clientWidth; // use the client window width
const y = document.body.clientHeight; // use the client window height
const radius = getRandomIntInclusive(50, 200);

function makeCircles(numberOfCircles) {
  // make sure all of the elements are somewhere in the viewBox
  svgContainer.setAttribute('viewBox', `0 0 ${x} ${y}`);
  for (let i = 0; i < numberOfCircles; i++) {
    const newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircle.setAttribute('cx', getRandomInt(x));
    newCircle.setAttribute('cy', getRandomInt(y));
    newCircle.setAttribute('r', getRandomInt(radius));
    newCircle.style.color = `hsla(0, 0, 100%, ${getRandomInt(100)}%)`;
    newCircle.style.fill = 'currentColor';
    newCircle.style.filter = `blur(${getRandomInt(3)}px)`;
    svgContainer.appendChild(newCircle);
  }
}
// show and animate them

// kick it all off
makeCircles(getRandomInt(25));

// GSAP animation
// Do a simple check to see if gsap is available
const circles = document.querySelectorAll('circle');
const circArr = Array.from(circles);
if (gsap) {
  // get all the circles in the svg element

  const opts = { x: x, duration: 10, repeat: -1, delay: 0.3 };
  gsap.to(circArr, { opts });
}
