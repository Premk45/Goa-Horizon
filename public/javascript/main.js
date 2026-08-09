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





/// Jab pura page load ho jaye, tabhi ye script chale
document.addEventListener("DOMContentLoaded", function() {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-card');
            } else {
                entry.target.classList.remove('show-card'); 
            }
        });
    }, {
        threshold: 0.2 
    });

    // Cards ko select karna
    const cards = document.querySelectorAll('.travel-card');
    
    // Agar cards mil gaye page pe, toh observe karna shuru karo
    if(cards.length > 0) {
        cards.forEach((card) => {
            observer.observe(card);
        });
    } else {
        console.log("Cards nahi mile DOM mein.");
    }

});





function openFullGallery() {
    const modal = document.getElementById('fullGalleryModal');
    modal.classList.add('show-modal');
    // Body ka scroll band kar dete hain taaki piche page scroll na ho
    document.body.style.overflow = 'hidden'; 
}

function closeFullGallery() {
    const modal = document.getElementById('fullGalleryModal');
    modal.classList.remove('show-modal');
    // Body ka scroll wapas chalu kar dete hain
    document.body.style.overflow = 'auto'; 
}



document.addEventListener("DOMContentLoaded", function() {
    
    var swiper = new Swiper(".goaswiper", {
        // Mobile mein sirf 1 card dikhega
        slidesPerView: 1, 
        spaceBetween: 20,
        
        // Next aur Prev arrow buttons set karne ke liye
        navigation: {
            nextEl: ".goaswiper-next",
            prevEl: ".goaswiper-prev",
        },
        
        // Laptop aur PC views
        breakpoints: {
            768: {
                slidesPerView: 3,     // Ek sath 3 cards dikhenge
                spaceBetween: 30,     // Cards ke bich thoda gap
                slidesPerGroup: 1     // Ek click me 1 card aage badhega
            },
        },
    });
    
});