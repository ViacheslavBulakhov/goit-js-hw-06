const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients')

const createItem = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;

  let itemList = [];
  itemList.push(listItem);
  
  return listRef.append(...itemList);
});


