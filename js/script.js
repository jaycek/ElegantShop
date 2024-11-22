// Product Array
const products = [
    { id: 1, name: 'Clothing', price: 25.99, category: 'Clothing', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZxkdwjPD9k9zSxVYQMTvbX3igD6nuO_-pR1c8fKv4YSYJTX4qkj-BEhzhapHtCQ_sb5jaDLKsmZvBDEEx9FRbXw-0k8GaQ0Ca-PiqDiQvbtmQJbHuUXeevQ' },
    { id: 2, name: 'Accessories', price: 45.99, category: 'Accessories', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzyFgElelWJlrh-Z4VoqoRhaEyzDFr147yiF5B-4UX6LtOu2ybPKFNKe3zHP3haVEM_0L5Z9poysjuy3hZDbVLeyP0bJ3UQSdzZjSopG9es7Lo5Ducd4N3' },
    { id: 3, name: 'Clothing', price: 67.99, category: 'Accessories', img: '    https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8_p6OASj5hRU0a-RNtNolaPYbPUJVb4ijSX6DbNKTf9yKd4GoHh0vxIuwWYtSnvUdseoePrbVmuJA9K8wJzHHqnitoEiuA7kh1FFLIHY' },
   
    // Add more products
];

const productList = document.getElementById('product-list');
const cartSummary = document.getElementById('cart-summary');
let cart = [];

// Display Products using map()
function displayProducts(products) {
    productList.innerHTML = products.map(product => `
        <div class="col-md-4">
            <div class="card product-card">
                <img src=${product.img} class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add Product to Cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);
    cartSummary.textContent = `Total Items: ${totalItems} | Total Price: $${totalPrice}`;
}

// Initialize Display
displayProducts(products);
