// Product List
const products = [
    { name: "UTTAM", price: 1990, img: "G" },
    { name: "Tata Panida", price: 299, img: "https://via.placeholder.com/150" },
    { name: "Produnike t-shirt", price: 399, img: "https://via.placeholder.com/150" }
];

// Cart Array
let cart = [];

// Load Products on Screen
function loadProducts() {
    let list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((p, i) => {
        list.innerHTML += `
            <div class="product-card">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${i})">Add to Cart</button>
            </div>
        `;
    });
}

// Add to Cart Function
function addToCart(index) {
    cart.push(products[index]);
    updateCartCount();
}

// Update Cart Count in Header
function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}

// Search Product
function searchProduct() {
    let text = document.getElementById("searchBox").value.toLowerCase();
    let list = document.getElementById("productList");
    list.innerHTML = "";

    products
        .filter(p => p.name.toLowerCase().includes(text))
        .forEach((p, i) => {
            list.innerHTML += `
                <div class="product-card">
                    <img src="${p.img}">
                    <h3>${p.name}</h3>
                    <p>₹${p.price}</p>
                    <button onclick="addToCart(${i})">Add to Cart</button>
                </div>
            `;
        });
}

loadProducts();
updateCartCount();

