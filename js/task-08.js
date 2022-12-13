const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {

    event.preventDefault();
    const alrt = 'Все поля должны быть заполнены'

    if (`${event.currentTarget.elements.password.value}`=== '' ||
    `${event.currentTarget.elements.email.value}` === '') {
        alert(alrt);
    }
    
    const formResult = {
        email : event.currentTarget.elements.email.value,
        password:event.currentTarget.elements.password.value
    }
    console.log(formResult);
    event.currentTarget.elements.email.value = "",
    event.currentTarget.elements.password.value = "";
}


