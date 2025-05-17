// تأثيرات حركية عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    // تأثير ظهور العناصر عند التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.team-member, .stat-card');
        
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
        const elements = document.querySelectorAll('.team-member, .stat-card');
        
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

// تفعيل أزرار المشاركة
// document.querySelectorAll('.social-links a').forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         alert('سيتم توجيهك إلى صفحة التواصل الاجتماعي');
//     });
// });
// أضف هذا الكود إذا كان الرابط زراً
document.getElementById('fbLink').addEventListener('click', function() {
    window.open('https://web.facebook.com/amrnasr.31924', '_blank');
  });