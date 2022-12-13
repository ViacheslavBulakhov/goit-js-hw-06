function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector('div>input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxRef = document.querySelector('div#boxes');

let dimensionsBox = 20;
let elements = 0;

btnCreateRef.addEventListener('click', createBoxes);

btnDestroyRef.addEventListener('click', () => {
  boxRef.innerHTML = ('');
  inputRef.value = "";
  dimensionsBox = 20;
})

inputRef.addEventListener('blur', (event) => {
  elements = event.currentTarget.value;
}
)

function createBoxes(amount) {
  for (let i = 0; i < elements; i += 1) {
    dimensionsBox += 10;
    const createEl = document.createElement('div');
    const colorChange = getRandomHexColor();
    createEl.style.width = `${dimensionsBox}px`;
    createEl.style.height = `${dimensionsBox}px`;
    createEl.style.backgroundColor = colorChange;
    boxRef.append(createEl);
  }
}


