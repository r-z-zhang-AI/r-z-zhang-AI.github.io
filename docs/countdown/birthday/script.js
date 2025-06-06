function updateCountdown() {
    const now = new Date();
    let year = now.getFullYear();
    
    // 设置今年生日时间（6月12日 0:00 AM）
    let birthDay = new Date(year, 5, 12, 0, 0, 0);
    
    // 如果今年生日已过，计算明年
    if (now > birthDay) {
        birthDay = new Date(year + 1, 5, 12, 0, 0, 0);
    }
    
    const diff = birthDay - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 添加过渡动画
    function animateNumber(element, value) {
        if (element.textContent !== value.toString().padStart(2, '0')) {
            element.style.transform = 'rotateX(90deg)';
            setTimeout(() => {
                element.textContent = value.toString().padStart(2, '0');
                element.style.transform = 'rotateX(0deg)';
            }, 150);
        }
    }
    
    animateNumber(document.getElementById('days'), days);
    animateNumber(document.getElementById('hours'), hours);
    animateNumber(document.getElementById('minutes'), minutes);
    animateNumber(document.getElementById('seconds'), seconds);
}

// 立即执行一次，然后每秒更新
updateCountdown();
setInterval(updateCountdown, 1000);