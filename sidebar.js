const sidebar_open = document.querySelector('.sidebar-toggle');
const sidebar_close = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar')

sidebar_open.addEventListener('click', () => {
    //console.log(sidebar.classList.toggle);
    sidebar.classList.toggle('show-sidebar');
});

sidebar_close.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
});