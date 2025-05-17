// تحديث عداد السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// تفعيل التنقل النشط
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setActiveNav();
});