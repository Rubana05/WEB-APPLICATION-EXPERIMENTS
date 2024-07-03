document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Aloe Vera',
            description: 'Great for skin and digestion.',
            price: 9.99,
            imageUrl: 'https://via.placeholder.com/200',
            category: 'Skin Care'
        },
        {
            name: 'Lavender',
            description: 'Calming and soothing herb.',
            price: 7.99,
            imageUrl: 'https://via.placeholder.com/200',
            category: 'Relaxation'
        },
        {
            name: 'Peppermint',
            description: 'Good for digestion and headaches.',
            price: 5.99,
            imageUrl: 'https://via.placeholder.com/200',
            category: 'Digestive Health'
        },
        // Add more products as needed
    ];

    const productContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productContainer.appendChild(productElement);
    });
});
