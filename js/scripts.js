window.addEventListener('load', start);

var red = 0;
var green = 0;
var blue = 0;

var redInput = null;
var greenInput = null;
var blueInput = null;

function start() {
  redInput = document.querySelector('#redInput');
  greenInput = document.querySelector('#greenInput');
  blueInput = document.querySelector('#blueInput');

  redInput.value = document.querySelector('#redRange').value;
  greenInput.value = document.querySelector('#greenRange').value;
  blueInput.value = document.querySelector('#blueRange').value;

  red = redInput.value;
  green = greenInput.value;
  blue = blueInput.value;

  changeCanvas();
}

function handleRangeChange(element) {
  if (element.id === 'redRange') {
    redInput.value = element.value;
    red = element.value;
  }

  if (element.id === 'greenRange') {
    greenInput.value = element.value;
    green = element.value;
  }

  if (element.id === 'blueRange') {
    blueInput.value = element.value;
    blue = element.value;
  }

  changeCanvas();
}

function changeCanvas() {
  var canvas = document.querySelector('.canvas');
  canvas.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
