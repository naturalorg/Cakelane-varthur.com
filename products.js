// Products Database
// To add a new product, simply copy one of the product objects below and modify the details
// Make sure to place your cake image in the 'assets' folder and update the image path

const products = [
    {
        id: 1,
        name: "Elegant Wedding Cake",
        category: "wedding",
        description: "A stunning three-tier wedding cake adorned with delicate sugar flowers and elegant piping.",
        image: "assets/cake1.jpg", // Replace with your actual image path
        weight: "750g",
        price: "₹1,299/-",
        features: [
            "3-tier design",
            "Custom sugar flowers",
            "Choice of flavors",
            "Serves 80-100 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Elegant Wedding Cake (750g) - ₹1,299"
    },
    {
        id: 2,
        name: "Unicorn Birthday Cake",
        category: "birthday",
        description: "Magical unicorn-themed cake perfect for children's birthday parties with vibrant colors.",
        image: "assets/cake2.jpg",
        weight: "500g",
        price: "₹699/-",
        features: [
            "Custom unicorn design",
            "Colorful buttercream",
            "Edible decorations",
            "Serves 20-25 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Unicorn Birthday Cake (500g) - ₹699"
    },
    {
        id: 3,
        name: "Chocolate Truffle Delight",
        category: "custom",
        description: "Rich chocolate cake layers with smooth truffle filling, perfect for chocolate lovers.",
        image: "assets/cake3.jpg",
        weight: "400g",
        price: "₹549/-",
        features: [
            "Premium chocolate",
            "Truffle filling",
            "Chocolate ganache",
            "Serves 15-20 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Chocolate Truffle Delight (400g) - ₹549"
    },
    {
        id: 4,
        name: "Floral Garden Cake",
        category: "wedding",
        description: "Beautiful cake decorated with handcrafted edible flowers in pastel colors.",
        image: "assets/cake4.jpg",
        weight: "600g",
        price: "₹899/-",
        features: [
            "Handcrafted flowers",
            "Pastel buttercream",
            "2-tier design",
            "Serves 40-50 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Floral Garden Cake (600g) - ₹899"
    },
    {
        id: 5,
        name: "Superhero Theme Cake",
        category: "birthday",
        description: "Action-packed superhero design with vibrant colors and custom figurines.",
        image: "assets/cake5.jpg",
        weight: "500g",
        price: "₹649/-",
        features: [
            "Custom superhero design",
            "Edible figurines available",
            "Bold colors",
            "Serves 20-25 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Superhero Theme Cake (500g) - ₹649"
    },
    {
        id: 6,
        name: "Red Velvet Classic",
        category: "custom",
        description: "Traditional red velvet cake with cream cheese frosting and elegant decoration.",
        image: "assets/cake6.jpg",
        weight: "350g",
        price: "₹499/-",
        features: [
            "Classic red velvet",
            "Cream cheese frosting",
            "Elegant design",
            "Serves 12-15 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Red Velvet Classic (350g) - ₹499"
    },
    {
        id: 7,
        name: "Rustic Naked Cake",
        category: "wedding",
        description: "Trendy semi-naked cake with fresh berries and flowers for a rustic wedding aesthetic.",
        image: "assets/cake7.jpg",
        weight: "650g",
        price: "₹999/-",
        features: [
            "Semi-naked style",
            "Fresh berries",
            "Fresh flowers",
            "Serves 50-60 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Rustic Naked Cake (650g) - ₹999"
    },
    {
        id: 8,
        name: "Princess Castle Cake",
        category: "birthday",
        description: "Enchanting castle-shaped cake perfect for little princesses with pink frosting.",
        image: "assets/cake8.jpg",
        weight: "550g",
        price: "₹749/-",
        features: [
            "Castle design",
            "Pink buttercream",
            "Edible towers",
            "Serves 25-30 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Princess Castle Cake (550g) - ₹749"
    },
    {
        id: 9,
        name: "Fruit Paradise Cake",
        category: "custom",
        description: "Light and fresh cake topped with seasonal fruits and whipped cream.",
        image: "assets/cake9.jpg",
        weight: "450g",
        price: "₹599/-",
        features: [
            "Fresh seasonal fruits",
            "Light whipped cream",
            "Sponge cake base",
            "Serves 15-18 guests"
        ],
        whatsappMessage: "Hi! I'm interested in the Fruit Paradise Cake (450g) - ₹599"
    }
];

// Don't modify the code below unless you know what you're doing
// This code handles displaying the products on the page

const whatsappNumber = "919886757309"; // Your WhatsApp number

function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}" onclick="openModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/2563eb/ffffff?text=Cake+Image'">
                <span class="product-badge">${product.category}</span>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-meta">
                        <div class="product-weight">${product.weight}</div>
                        <div class="product-price">${product.price}</div>
                    </div>
                    <button class="btn btn-primary buy-btn" onclick="event.stopPropagation(); orderOnWhatsApp(${product.id})">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

function displayProducts(filter = 'all') {
    const productGrid = document.getElementById('productGrid');
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    productGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function orderOnWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category.toUpperCase();
    document.getElementById('modalDescription').textContent = product.description;
    
    // Add weight and price to modal
    const weightElement = document.getElementById('modalWeight');
    if (weightElement) {
        weightElement.textContent = product.weight;
    }
    
    const priceElement = document.getElementById('modalPrice');
    if (priceElement) {
        priceElement.textContent = product.price;
    }
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    
    const modalButton = document.getElementById('modalButton');
    const message = encodeURIComponent(product.whatsappMessage);
    modalButton.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Initialize products when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
