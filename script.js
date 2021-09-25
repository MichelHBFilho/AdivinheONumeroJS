(() => {
    const btnComecar = document.querySelector('[data-comecar]')
    const body = document.querySelector('body');
    btnComecar.addEventListener('click', () => {
        body.innerHTML = `
        <h1 class="titulo">Adivinhe o numero</h1>
        <label for="chute" id="lblChute">Estou pensando em um numero entre 1-100</label>
        <input type="number" placeholder="Chute o numero" id="chute">
        <button id="comecar" data-recomecar>Recomeçar</button>
        `

        const btnReComecar = document.querySelector('[data-recomecar]');
        btnReComecar.addEventListener('click', () => {
            document.location.reload();
        })

        const input = document.querySelector('#chute');
        const label = document.querySelector('#lblChute');
        const numero = parseInt(Math.random() * (100 - 1) + 1);
        input.addEventListener('keypress', (event) => {
            if (event.keyCode !== 13) return;
            if (input.value == numero) {
                label.textContent = `Você acertou o numero era ${numero}`
            } else {
                label.textContent = 'Tente novamente';
            }
        })
    })
})()