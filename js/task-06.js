const inputRef = document.querySelector('input#validation-input');

inputRef.addEventListener('blur', (event) => {

    inputRef.classList.add('invalid');

    const inputValueLength = event.currentTarget.value.length;
    const inputDataLength = Number(inputRef.dataset.length);
    
    if (inputValueLength === inputDataLength) {
        return inputRef.classList.replace('invalid', 'valid');
    }
}
)   





