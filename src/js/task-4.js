const refs = {
  form: document.querySelector('.login-form'),
};

const submitHandler = event => {
  event.preventDefault();

  const form = event.currentTarget;

  const data = {};
  for (const el of form.elements) {
    if (el.name) {
      data[el.name] = el.value.trim();
    }
  }

  const allFilled = Object.values(data).every(val => val !== '');
  if (!allFilled) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(data);

  form.reset();
};

refs.form.addEventListener('submit', submitHandler);
