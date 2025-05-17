document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const toggleSidebar = document.getElementById('toggleSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    // فتح القائمة الجانبية
    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.add('show');
        mainContent.classList.add('sidebar-open');
    });
    
    // إغلاق القائمة الجانبية
    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('show');
        mainContent.classList.remove('sidebar-open');
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== toggleSidebar) {
            sidebar.classList.remove('show');
            mainContent.classList.remove('sidebar-open');
        }
    });
    
    // منع إغلاق القائمة عند النقر داخلها
    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // تأثيرات حركية عند التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .feature-card, .category-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // إعداد العناصر قبل الظهور
    const setupAnimation = function() {
        const elements = document.querySelectorAll('.product-card, .feature-card, .category-card');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
        });
    };
    
    setupAnimation();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // تشغيل مرة أولى عند التحميل
});
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}
updateCartCount(); // تحديث عند التحميل

// بيانات المنتجات (يمكن استبدالها ببيانات من Firebase)
const products = [
    { id: 1, name: "قميص رجالي", price: "150 ج.م", category: "رجالي" },
    { id: 2, name: "عباية سوداء", price: "250 ج.م", category: "حريمي" },
    { id: 3, name: "جينز أزرق", price: "200 ج.م", category: "رجالي" }
];

// دالة البحث
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    // مسح النتائج السابقة
    resultsContainer.innerHTML = '';

    if (!searchTerm) {
        resultsContainer.innerHTML = '<p>الرجاء إدخال كلمة بحث</p>';
        return;
    }

    // فلترة المنتجات
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
    );

    // عرض النتائج
    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = '<p>لا توجد نتائج مطابقة</p>';
    } else {
        filteredProducts.forEach(product => {
            resultsContainer.innerHTML += `
                <div class="product-result">
                    <h3>${product.name}</h3>
                    <p>السعر: ${product.price}</p>
                    <p>القسم: ${product.category}</p>
                </div>
            `;
        });
    }
}
// دالة تغيير اللغة
function changeLanguage(lang) {
    fetch(`./lang/${lang}.json`)
      .then(response => response.json())
      .then(data => {
        // استبدال النصوص في الصفحة
        document.querySelector('[data-translate="welcome"]').innerText = data.welcome;
        document.querySelector('[data-translate="shop_now"]').innerText = data.shop_now;
        // ... أضف بقية العناصر هنا
      });
  }
  
  // تغيير اللغة عند اختيارها من القائمة
  document.getElementById('language-switcher').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
  });
  
  // تحميل اللغة الافتراضية عند فتح الصفحة
  changeLanguage('ar');