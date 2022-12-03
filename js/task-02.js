const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const listArray = [];

function createList() {
for (let i = 0; i < ingredients.length; i +=1) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');
  listArray.push(li);
  }
  list.append(...listArray);
};

createList();