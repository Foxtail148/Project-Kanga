// Carregar a sidebar dinamicamente
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        // Coloca o HTML da sidebar dentro do contêiner
        document.getElementById('sidebar-container').innerHTML = data;

        // Agora a sidebar está carregada, podemos adicionar os eventos de clique
        const menuItems = document.querySelectorAll('.sidebar a');

        // Adiciona um evento de clique em cada item de menu
        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                // Remove a classe 'active' de todos os itens
                menuItems.forEach(link => link.classList.remove('active'));

                // Adiciona a classe 'active' ao item clicado
                this.classList.add('active');

                // Redireciona para a página correspondente
                const page = this.getAttribute('href');
                window.location.href = page;
            });
        });
    });
