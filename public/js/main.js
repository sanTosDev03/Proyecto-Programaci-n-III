document.addEventListener('DOMContentLoaded', async () => {
    const productTableBody = document.querySelector('.product-table tbody');

    // Función para renderizar la tabla de productos
    window.renderProducts = (products) => {
        productTableBody.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.idcod}</td>
                <td>${product.titulo}</td>
                <td>${product.precioPeso}</td>
                <td>${product.precioDolar}</td>
                <td>${product.fecha}</td>
                <td>
                    <button class="action-button" onclick="editProduct('${product.idcod}')">✏️</button>
                    <button class="action-button" onclick="removeProduct('${product.idcod}')">❌</button>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    };

    // Obtener y renderizar todos los productos al cargar la página
    const products = await getAllProducts();
    renderProducts(products);

    // Función para crear un nuevo producto
    window.addProduct = async (product) => {
        await createProduct(product);
        const updatedProducts = await getAllProducts();
        renderProducts(updatedProducts);
    };

    // Función para editar un producto
    window.editProduct = async (id) => {
        const product = (await getAllProducts()).find(p => p.idcod === id);
        if (product) {
            document.getElementById('product-id').value = product.idcod;
            document.getElementById('product-title').value = product.titulo;
            document.getElementById('product-peso').value = product.precioPeso;
            document.getElementById('product-dollar').value = product.precioDolar;
            document.getElementById('product-date').value = product.fecha;

            const productModal = document.getElementById('product-modal');
            productModal.style.display = 'block';
        }
    };

    // Función para eliminar un producto
    window.removeProduct = async (id) => {
        const confirmation = confirm('Are you sure you want to delete this product?');
        if (confirmation) {
            await deleteProduct(id);
            const updatedProducts = await getAllProducts();
            renderProducts(updatedProducts);
        }
    };
});
