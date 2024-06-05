document.addEventListener("DOMContentLoaded", function() {
    const viagemList = document.getElementById('viagemList');
    const search = document.getElementById('search');
    const totalViagens = document.getElementById('totalViagens');

    function displayViagens(viagens) {
        viagemList.innerHTML = '';
        viagens.forEach((viagem, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${viagem.nome} - ${viagem.data} - ${viagem.local}</span>
                <button class="delete" data-index="${index}">Excluir</button>
            `;
            viagemList.appendChild(li);
        });
        totalViagens.textContent = `Total de viagens cadastradas: ${viagens.length}`;
    }

    viagemList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            const index = event.target.dataset.index;
            let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
            viagens.splice(index, 1);
            localStorage.setItem('viagens', JSON.stringify(viagens));
            displayViagens(viagens);
        }
    });

    search.addEventListener('input', function(event) {
        const searchText = event.target.value.toLowerCase();
        let viagens = JSON.parse(localStorage.getItem('viagens')) || [];
        viagens = viagens.filter(viagem => 
            viagem.nome.toLowerCase().includes(searchText) ||
            viagem.data.toLowerCase().includes(searchText) ||
            viagem.local.toLowerCase().includes(searchText) ||
            viagem.observacao.toLowerCase().includes(searchText)
        );
        displayViagens(viagens);
    });

    displayViagens(JSON.parse(localStorage.getItem('viagens')) || []);
});
