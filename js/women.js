document.addEventListener('DOMContentLoaded', function() {
    // تفعيل/إلغاء تفعيل القوائم الفرعية
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const title = item.querySelector('.menu-title');
        
        title.addEventListener('click', function(e) {
            e.preventDefault();
            item.classList.toggle('active');
            
            // إغلاق باقي القوائم الفرعية
            if (item.classList.contains('active')) {
                menuItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // تفعيل فلتر الألوان
    const colorFilters = document.querySelectorAll('.color-filter');
    
    colorFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            colorFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            // هنا يمكنك إضافة كود تصفية المنتجات حسب اللون
        });
    });
    
    // تفعيل فلتر المقاسات
    const sizeFilters = document.querySelectorAll('.size-filter');
    
    sizeFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            sizeFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            // هنا يمكنك إضافة كود تصفية المنتجات حسب المقاس
        });
    });
    
    // تفعيل خيارات الترتيب
    const sortSelect = document.getElementById('sort');
    
    sortSelect.addEventListener('change', function() {
        // هنا يمكنك إضافة كود ترتيب المنتجات حسب الخيار المحدد
        console.log('تم اختيار:', this.value);
    });
    
    // تأثيرات حركية عند التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card');
        
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
        const elements = document.querySelectorAll('.product-card');
        
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