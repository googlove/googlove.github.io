document.addEventListener("DOMContentLoaded", () => {
    // 1. Анімація прогрес-барів для навичок
    const progressFills = document.querySelectorAll('.progress-fill');
    setTimeout(() => {
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth;
        });
    }, 300);

    // 2. Логіка віджета годинника та дати
    function updateClock() {
        const now = new Date();
        
        // Форматування часу
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Форматування дати українською
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('uk-UA', options);
        
        const dateElement = document.getElementById('date');
        if (dateElement) {
            dateElement.textContent = dateStr;
        }
        
        // Оновлення поточного року у футері
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = now.getFullYear();
        }
    }
    
    // Запускаємо годинник
    setInterval(updateClock, 1000);
    updateClock(); // Перший виклик без затримки
});
