document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const local = document.getElementById('local').value;
        const observacao = document.getElementById('observacao').value;

        if (nome && data && local && observacao) {
            const viagem = { nome, data, local, observacao };
            let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
            viagens.push(viagem);
            localStorage.setItem('viagens', JSON.stringify(viagens));
            form.reset();
            window.location.href = 'consulta.html';
        } else {
            alert('Preencha todos os campos!');
        }
    });
});
