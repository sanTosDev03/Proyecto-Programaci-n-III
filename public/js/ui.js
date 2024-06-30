document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const dropdownMenu = document.getElementById('dropdown-menu');

    logo.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target !== logo && !logo.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
