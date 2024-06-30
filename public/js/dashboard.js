document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Error al cargar los datos JSON');
        const data = await response.json();

        // Mostrar ingreso total
        document.getElementById('totalIncome').textContent = data.totalIncome;

        // Configuración del gráfico de ganancias mensuales
        const monthlyGainsData = data.monthlyGains.map(item => item.gain);
        const monthlyLabels = data.monthlyGains.map(item => item.month);

        const ctxGains = document.getElementById('monthlyGainsChart').getContext('2d');
        new Chart(ctxGains, {
            type: 'line',
            data: {
                labels: monthlyLabels,
                datasets: [{
                    label: 'Monthly Gains',
                    data: monthlyGainsData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Configuración del gráfico de productos más vendidos por cantidad
        const productNames = data.products.map(product => product.titulo);
        const totalSales = data.products.map(product => product.cantidadVendida.reduce((a, b) => a + b, 0));

        const ctxProductsSold = document.getElementById('productsSoldChart').getContext('2d');
        new Chart(ctxProductsSold, {
            type: 'bar',
            data: {
                labels: productNames,
                datasets: [{
                    label: 'Total Products Sold',
                    data: totalSales,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Configuración del gráfico de productos que más ingresos generaron
        const totalIncomePerProduct = data.products.map(product =>
            product.cantidadVendida.reduce((a, b) => a + b, 0) * product.precioDolar);

        const ctxProductsIncome = document.getElementById('productsIncomeChart').getContext('2d');
        new Chart(ctxProductsIncome, {
            type: 'bar',
            data: {
                labels: productNames,
                datasets: [{
                    label: 'Total Income Per Product',
                    data: totalIncomePerProduct,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Población de la tabla de productos vendidos por mes
        const productTableBody = document.getElementById('productTableBody');
        data.products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.idcod}</td>
                <td>${product.titulo}</td>
                <td>${product.cantidadVendida[0]}</td>
                <td>${product.cantidadVendida[1]}</td>
                <td>${product.cantidadVendida[2]}</td>
                <td>${product.cantidadVendida[3]}</td>
                <td>${product.cantidadVendida[4]}</td>
                <td>${product.cantidadVendida[5]}</td>
            `;
            productTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
