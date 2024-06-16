document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('colaboradores');

    axios.get('https://netbil.com.br/api_netbil/api-teste-programacao/colaboradores', {
        headers: {
            authorization: 'LF22023L0TKCIZMAHNETR572022PG9BILIDNHR'
        }
    })
    .then (response => {
        const colaboradores = response.data;
        colaboradores.forEach(colaborador => {
            const colaboradorDiv = document.createElement('div');
            colaboradorDiv.classList.add('colaborador');

            const colaboradorImg = document.createElement('img');
            colaboradorImg.src = colaborador.foto;
            colaboradorImg.alt = colaborador.nome;
            colaboradorImg.width = 150;
            colaboradorImg.height = 150;

            const colaboradorInfo = document.createElement('div');
            colaboradorInfo.classList.add('colaborador-info');

            const colaboradorNome = document.createElement('h2');
            colaboradorNome.textContent = colaborador.nome;

            const colaboradorSobre = document.createElement('p');
            colaboradorSobre.textContent = colaborador.sobre;

            colaboradorInfo.appendChild(colaboradorNome);
            colaboradorInfo.appendChild(colaboradorSobre);

            colaboradorDiv.appendChild(colaboradorImg);
            colaboradorDiv.appendChild(colaboradorInfo);

            container.appendChild(colaboradorDiv);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar colaboradores:', error);
    });
});
