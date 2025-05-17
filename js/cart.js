// بيانات عينة للسلة
let cartItems = [
    {
        id: 1,
        name: "عباية فرعوني مطرزة ",
        price: 1500,
        image: "",
        quantity: 1
    },
    {
        id: 2,
        name: "عباية مطرزة",
        price: 450,
        image: "imgs/product2.jpg",
        quantity: 2
    }
];

// عرض عناصر السلة
function displayCartItems() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';
    
    let itemsCount = 0;
    let subtotal = 0;
    
    cartItems.forEach(item => {
        itemsCount += item.quantity;
        subtotal += item.price * item.quantity;
        
        cartContainer.innerHTML += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">${item.price} ج.م</p>
                    <div class="cart-item-actions">
                        <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeItem(${item.id})">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    // تحديث الملخص
    document.getElementById('itemsCount').textContent = itemsCount;
    document.getElementById('subtotal').textContent = subtotal + ' ج.م';
    document.getElementById('total').textContent = subttotal + ' ج.م';
}

// تحديث الكمية
function updateQuantity(id, change) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        
        if (item.quantity < 1) {
            removeItem(id);
        } else {
            displayCartItems();
        }
    }
}

// حذف المنتج
function removeItem(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    displayCartItems();
}

// إرسال طلب واتساب
function sendWhatsAppOrder() {
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    
    if (!name || !phone) {
        alert('الرجاء إدخال الاسم ورقم الهاتف');
        return;
    }
    
    // إنشاء رسالة الطلب
    let message = `السلام عليكم، أود طلب المنتجات التالية:\n\n`;
    message += `الاسم: ${name}\n`;
    message += `رقم الهاتف: ${phone}\n\n`;
    message += `الطلبيات:\n`;
    
    cartItems.forEach(item => {
        message += `- ${item.name} (${item.quantity} × ${item.price} ج.م)\n`;
    });
    
    message += `\nالإجمالي: ${document.getElementById('total').textContent}`;
    
    // تشفير الرسالة
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201554889377?text=${encodedMessage}`;
    
    // فتح الواتساب
    window.open(whatsappUrl, '_blank');
}

// فتح نموذج الواتساب
function openWhatsApp() {
    document.getElementById('whatsappBox').style.display = 'block';
    document.getElementById('clientName').focus();
}

// تحميل السلة عند فتح الصفحة
window.addEventListener('DOMContentLoaded', displayCartItems);