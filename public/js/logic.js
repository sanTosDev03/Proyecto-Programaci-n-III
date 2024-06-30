document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('product-modal');
    const addProductButton = document.getElementById('add-product-button');
    const closeModalButton = document.getElementById('close-modal');
    const productForm = document.getElementById('product-form');
    const searchBar = document.getElementById('search-bar');

    // Mostrar modal
    addProductButton.addEventListener('click', () => {
        productModal.style.display = 'block';
        productForm.reset();
    });

    // Cerrar modal
    closeModalButton.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    // Cerrar modal cuando se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target == productModal) {
            productModal.style.display = 'none';
        }
    });

    // Manejar el envío del formulario para agregar/editar producto
    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(productForm);
        const product = {
            idcod: formData.get('idcod'),
            titulo: formData.get('title'),
            precioPeso: parseFloat(formData.get('precioPeso')),
            precioDolar: parseFloat(formData.get('precioDolar')),
            fecha: formData.get('fecha')
        };

        if (product.idcod) {
            await updateProduct(product);
        } else {
            delete product.idcod; // Asegúrase de no enviar un ID vacío en un nuevo producto
            console.log('Creating new product:', product); // Depuración
            await createProduct(product);
        }
        productModal.style.display = 'none';
        const updatedProducts = await getAllProducts();
        renderProducts(updatedProducts);
    });

    // Funcionalidad de búsqueda
    searchBar.addEventListener('input', async (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const products = await getAllProducts();
        const filteredProducts = products.filter(product => product.titulo.toLowerCase().includes(searchTerm));
        renderProducts(filteredProducts);
    });

    // Funcionalidad de ordenamiento
    document.getElementById('sort-peso-asc').addEventListener('click', async () => {
        const products = await getAllProducts();
        products.sort((a, b) => a.precioPeso - b.precioPeso);
        renderProducts(products);
    });

    document.getElementById('sort-peso-desc').addEventListener('click', async () => {
        const products = await getAllProducts();
        products.sort((a, b) => b.precioPeso - a.precioPeso);
        renderProducts(products);
    });

    document.getElementById('sort-dollar-asc').addEventListener('click', async () => {
        const products = await getAllProducts();
        products.sort((a, b) => a.precioDolar - b.precioDolar);
        renderProducts(products);
    });

    document.getElementById('sort-dollar-desc').addEventListener('click', async () => {
        const products = await getAllProducts();
        products.sort((a, b) => b.precioDolar - a.precioDolar);
        renderProducts(products);
    });
});
