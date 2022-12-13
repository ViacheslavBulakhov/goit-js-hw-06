const btnDecrementRef = document.querySelector('button[data-action="decrement"]')
const btnIncrementRef = document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector('#value')
let val = 0 ;

btnIncrementRef.addEventListener("click", (event) => {
    val += 1;
    valueRef.textContent = val;
});
btnDecrementRef.addEventListener("click", (event) => {
    val -= 1;
    valueRef.textContent = val;
});



