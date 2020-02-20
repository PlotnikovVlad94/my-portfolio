import formValidate from './validate.js';

export default function sendForm(options) {
    const form = options.form;
    const inputs = form.querySelectorAll('.js-input');
    const action = form.action;
    const method = form.method;
    const activeClass = 'is-active';
    inputs.forEach((input) => {
        input.addEventListener('focus', addFocusToInput);
        input.addEventListener('blur', removeFocusFromInput);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        let result = true;
        const valResult = formValidate({
            inputs: inputs
        });
        for (const field in valResult) {
            if (valResult[field] === false)
                result = false;
        }
        if (result === true)
            submitForm();
    });


    function addFocusToInput() {
        const parent = this.parentElement;
        parent.classList.add(activeClass);
    }

    function removeFocusFromInput() {
        const parent = this.parentElement;
        parent.classList.remove(activeClass);
        this.value.length === 0 ?
            parent.classList.remove('is-full') :
            parent.classList.add('is-full');
    }

    function submitForm() {
        const formData = new FormData(form);
        formData.append('name', 'user');
        formData.append('phone', '+79200390407');
        formData.append('comment', 'comment');
        formData.append('to', 'plotnikov.va94@gmail.com');
        fetch(action, {
                method: method,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            })
            .then(response => {
                if (response.ok)
                    response.json();
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

    function clearForm() {
        inputs.forEach((input) => input.value = '');
    }
}






