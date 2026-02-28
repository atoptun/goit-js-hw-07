const categories = document.querySelector('#categories');

console.log('Number of categories:', categories.children.length);

const catArr = Array.from(categories.children);

catArr.forEach(item => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements: ', item.querySelector('ul').children.length);
});
