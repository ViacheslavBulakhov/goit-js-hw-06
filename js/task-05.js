const inputRef = document.querySelector('input#name-input');
const textForChangeRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', (event) => {

    textForChangeRef.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        textForChangeRef.textContent = 'Anonymous'
    }

})
