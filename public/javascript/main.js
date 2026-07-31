function startDailyCountdown() {
    function updateTimer() {
        const hoursEl = document.getElementById('t-hours');
        const minsEl = document.getElementById('t-mins');
        const secsEl = document.getElementById('t-secs');

        // Agar HTML elements nahi mile toh code aage run nahi karega (Error se bachaane ke liye)
        if (!hoursEl || !minsEl || !secsEl) return;

        const now = new Date();
        
        // Aaj raat 12 baje (midnight) ka time set karna
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        
        // Time difference milliseconds me
        const diff = midnight - now;

        // Agar time nikal jaye (kisi wajah se), toh 00 par set kar do
        if (diff <= 0) {
            hoursEl.innerText = "00";
            minsEl.innerText = "00";
            secsEl.innerText = "00";
            return;
        }

        // Milliseconds ko hours, mins, seconds me convert karna
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Single digit number ko '0' ke sath pad karna (e.g., 9 ko 09 banana)
        hoursEl.innerText = String(h).padStart(2, '0');
        minsEl.innerText = String(m).padStart(2, '0');
        secsEl.innerText = String(s).padStart(2, '0');
    }

    // Har 1 second (1000ms) ke baad timer update karein
    setInterval(updateTimer, 1000);
    
    // Page load hote hi ek baar direct function call karna taaki 00 na dikhe
    updateTimer();
}

// Ensure karte hain ki HTML pura load hone ke baad hi Timer start ho
document.addEventListener("DOMContentLoaded", function() {
    startDailyCountdown();
});



document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            const isActive = currentItem.classList.contains('active');

            // 1. Pehle sabhi items ko close kar do
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // 2. Agar clicked item pehle se active nahi tha, toh usko open (active) kar do
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });
});