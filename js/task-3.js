const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const inputHandler = event => {
  const text = event.currentTarget.value.trim();
  refs.output.textContent = text || 'Anonymous';
};

refs.input.addEventListener('input', inputHandler);
