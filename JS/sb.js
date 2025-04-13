fetch('../html/sbkg.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;

        
        const menuItems = document.querySelectorAll('.sidebar li');

        menuItems.forEach(item => {
            if (window.location.pathname.includes(item.querySelector('a').getAttribute('href'))) {
                item.classList.add('active'); 
            }


            item.addEventListener('click', () => {
                menuItems.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
            });
        });
    })
    .catch(error => console.error('Erro ao carregar a sidebar:', error));
