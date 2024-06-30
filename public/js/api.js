const apiUrl = 'https://api.yumserver.com/17012/products'; 

// Obtener todos los productos
async function getAllProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error al obtener productos');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// Crear un nuevo producto
async function createProduct(product) {
    try {
        console.log('Sending product data:', product); // Depuración
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        if (!response.ok) throw new Error('Error al crear producto');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}


// Modificar un producto existente
async function updateProduct(product) {
    try {
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        if (!response.ok) throw new Error('Error al modificar producto');
        return await response.text();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Eliminar un producto
async function deleteProduct(id) {
    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idcod: id })
        });
        if (!response.ok) throw new Error('Error al eliminar producto');
        return await response.text();
    } catch (error) {
        console.error('Error:', error);
    }
}
