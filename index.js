addEventListener("submit", function(event) {
    const inputs = document.querySelectorAll('.campo');
    let formValido = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            formValido = false;
            if (!input.classList.contains('is-invalid')) {
                input.classList.add('is-invalid');
                const p = document.createElement('p');
                p.className = 'obrigatorio';
                p.textContent = '* Campo obrigatório';
                input.parentNode.insertBefore(p, input.nextSibling);
            }
        }
    });

    if(!formValido){
        event.preventDefault();
    }

})


const inputs = document.querySelectorAll('.campo');

inputs.forEach(input => {
    input.addEventListener("input", function() {
            if (input.value.trim() !== '') {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                const p = input.parentNode.querySelector('.obrigatorio');
                if (p) {
                    p.remove();
                }
            }
        });
});


