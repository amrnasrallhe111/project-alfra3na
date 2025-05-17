// عدّاد تنازلي للعرض
function updateCounter() {
    const endDate = new Date("2024-12-31");
    const now = new Date();
    const diff = endDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent = days;
}

// إضافة للسلة مع خاصية الكوليكشن
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const productId = this.getAttribute("data-id");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        cart.push({
            id: productId,
            collection: "new-2024",
            quantity: 1
        });
        
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("تمت الإضافة إلى سلة التسوق!");
    });
});

// تشغيل عند تحميل الصفحة
window.onload = function() {
    updateCounter();
    setInterval(updateCounter, 86400000); // تحديث يومي
};







// التمرير بالأزرار
document.querySelector('.scroll-btn.left').addEventListener('click', () => {
    document.querySelector('.product-scroll-container').scrollBy(-300, 0);
});

document.querySelector('.scroll-btn.right').addEventListener('click', () => {
    document.querySelector('.product-scroll-container').scrollBy(300, 0);
});

// إضافة منتجات ديناميكيًا (مثال)
const scrollWrapper = document.querySelector('.product-scroll-wrapper');
for (let i = 1; i <= 8; i++) {
    scrollWrapper.innerHTML += `
        <div class="product-card">
            <img src="images/product-${i}.jpg" alt="Product ${i}">
            <h3>عباية ${i}</h3>
            <p>${400 + i * 50} جنيه</p>
        </div>
    `;
}

// نظام الإعجابات
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        let likes = JSON.parse(localStorage.getItem('likes')) || {};
        
        if (!likes[productId]) {
            likes[productId] = 1;
            this.classList.add('liked');
        } else {
            delete likes[productId];
            this.classList.remove('liked');
        }
        
        localStorage.setItem('likes', JSON.stringify(likes));
        this.querySelector('.like-count').textContent = likes[productId] || 0;
    });
});

// تحميل الإعجابات عند البدء
window.addEventListener('DOMContentLoaded', () => {
    const likes = JSON.parse(localStorage.getItem('likes')) || {};
    document.querySelectorAll('.like-btn').forEach(btn => {
        const productId = btn.getAttribute('data-product-id');
        if (likes[productId]) {
            btn.classList.add('liked');
            btn.querySelector('.like-count').textContent = likes[productId];
        }
    });
});
const likeSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3');

// داخل event listener للإعجاب
likeSound.currentTime = 0;
likeSound.play();