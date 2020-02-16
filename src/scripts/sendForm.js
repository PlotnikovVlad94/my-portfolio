import formValidate from './validate';

export default function sendForm(options) {
    const form = options.form;
    const inputs = document.querySelectorAll('.js-input');
    const action = document.action;
    const method = document.method;
    const activeClass = 'is-active';

    inputs.forEach((input) => {
        input.addEventListener('focus', addFocusToInput);
        input.addEventListener('blur', removeFocusFromInput);
    });

    form.addEventListener('submit', function (event) {

        //  Тут что-то не так
        event.preventDefault();
        
        var result = true;
        
        const valResult = formValidate({
            inputs: inputs
        });

        for (const field in valResult) {
            if (valResult[field] === false) result = false; 
        }
        
        if (result === true) submitForm();
        
    });

    /**
     * @description Add active class for label and input wrapper.
     */
    function addFocusToInput() {
        const parent = this.parentElement;

        parent.classList.add(activeClass);
    }

    /**
     * @description Remove active class for label and input wrapper.
     */
    function removeFocusFromInput() {
        const parent = this.parentElement;

        parent.classList.remove(activeClass);

        this.value.length === 0
            ? parent.classList.remove('is-full')
            : parent.classList.add('is-full');
    }

    /**
     * @description Submit form data to server.
     */
    function submitForm() {
        const formData = new FormData(form);

        fetch(action, {
            method: method,
            headers: { 'X-Requested-With':'XMLHttpRequest' },
            body: formData
        })
            .then(response => {
                if (response.ok) response.json();
            })
            .then(() => clearForm())
            .then(() => openModal.style.display = 'flex')
            .catch(error => console.log(error));
    }

    const openModal = document.querySelector('.modal');
    const closeModal = document.querySelector('.btn-close');

    closeModal.addEventListener('click', function (e) {
        e.preventDefault();
        openModal.style.display = 'none';
    });

    /**
     * @description Clear input elements.
     */
    function clearForm() {
        inputs.forEach((input) => input.value = '');
    }
}
