document.addEventListener('DOMContentLoaded', function() {
    // التحقق من صحة النموذج قبل الإرسال
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // التحقق من صحة البيانات
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('الرجاء ملء جميع الحقول المطلوبة');
            return;
        }
        
        // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
        // مثلاً باستخدام fetch أو axios
        
        // عرض رسالة نجاح
        alert('شكرًا لك! تم استلام رسالتك وسنتواصل معك قريبًا.');
        
        // إعادة تعيين النموذج
        contactForm.reset();
    });
    
    // تأثيرات حركية عند التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.contact-form, .contact-info, .map-section');
        
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
        const elements = document.querySelectorAll('.contact-form, .contact-info, .map-section');
        
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