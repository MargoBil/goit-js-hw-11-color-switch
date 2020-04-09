'use strict';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const startBtn = document.querySelector ('[data-action="start"]');
const stopBtn = document.querySelector ('[data-action="stop"]');
const body = document.querySelector ('body');

let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor (Math.random () * (max - min + 1) + min);
};

const getDifferentBodyColor = () => {
  const randomIdxOfColor = randomIntegerFromInterval (
    0,
    Number (colors.length - 1)
  );
  let randomColor = colors[randomIdxOfColor];
  body.style.backgroundColor = randomColor;
};

const changeBodyColor = event => {
  if (isActive) {
    return;
  }
  isActive = true;
  const interval = setInterval (getDifferentBodyColor, 1000);
  getDifferentBodyColor ();
  const stop = event => {
    clearInterval (interval);
    isActive = false;
  };
  stopBtn.addEventListener ('click', stop);
};

startBtn.addEventListener ('click', changeBodyColor);

