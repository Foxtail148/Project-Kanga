fetch('sbkg.html')
    .then(response => response.text())
    .then(data => {
        // Inserir o HTML da sidebar no container
        document.getElementById('sidebar-container').innerHTML = data;

        // Depois de carregar a sidebar, marcar o item ativo
        const menuItems = document.querySelectorAll('.sidebar li');

        menuItems.forEach(item => {
            // Comparar o link com a página atual
            if (window.location.pathname.includes(item.querySelector('a').getAttribute('href'))) {
                item.classList.add('active'); // Adiciona a classe active ao <li>
            }

            // Ao clicar, guardar o item ativo
            item.addEventListener('click', () => {
                menuItems.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
            });
        });
    })
    .catch(error => console.error('Erro ao carregar a sidebar:', error));

// fetch('sbkg.html')
//     .then(response => response.text())
//     .then(data => {
//         // Inserir o HTML da sidebar no container
//         document.getElementById('sidebar-container').innerHTML = data;

//         // Depois da sidebar estar carregada, marcar item ativo
//         const menuItems = document.querySelectorAll('.sidebar a');

//         menuItems.forEach(item => {
//             // Comparar o link com a página atual
//             if (window.location.pathname.includes(item.getAttribute('href'))) {
//                 item.classList.add('active');
//             }

//             // Ao clicar, guardar o item ativo (opcional se usar includes acima)
//             item.addEventListener('click', () => {
//                 menuItems.forEach(link => link.classList.remove('active'));
//                 item.classList.add('active');
//             });
//         });
//     })
//     .catch(error => console.error('Erro ao carregar a sidebar:', error));