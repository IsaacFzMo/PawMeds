function showPage(pageId) {
    document.querySelectorAll('.content').forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    const targetPage = document.getElementById(pageId);
    targetPage.style.display = 'block';
    setTimeout(() => {
        targetPage.classList.add('active');
    }, 10);
}

window.onload = function() {
    showPage('home-page');
}



let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₡${item.price} 
            <button onclick="removeFromCart(${index})">X</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `Total: ₡${total}`;
}

function sendOrder() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let message = "Hola PawMeds! Quiero hacer un pedido:%0A";
    cart.forEach(item => {
        message += `• ${item.name} - ₡${item.price}%0A`;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0ATotal: ₡${total}`;

    const phoneNumber = "50660337363"; // ← Tu número actualizado
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
}

