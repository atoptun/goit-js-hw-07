const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  numberInput: document.querySelector('[data-number]'),
  boxContainer: document.querySelector('#boxes'),
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = amount => {
  const boxes = [];
  let size = 30;

  for (let index = 0; index < amount; index++) {
    boxes.push(`<div style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()};"></div>`);
    size += 10;
  }

  refs.boxContainer.insertAdjacentHTML('beforeend', boxes.join(''));
};

const destroyBoxes = () => {
  refs.boxContainer.replaceChildren();
};

refs.createBtn.addEventListener('click', event => {
  const number = +refs.numberInput.value.trim();
  if (isNaN(number) || number < 1 || number > 100) {
    // alert('Wrong number. Must be from 1 to 100.');
    return;
  }

  destroyBoxes();
  createBoxes(number);
  refs.numberInput.value = '';
});

refs.destroyBtn.addEventListener('click', event => {
  destroyBoxes();
});
