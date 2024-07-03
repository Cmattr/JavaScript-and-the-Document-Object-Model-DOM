let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productDiv.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        productContainer.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});