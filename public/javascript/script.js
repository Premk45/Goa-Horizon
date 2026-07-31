
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
            
        // Icon change karne ke liye (☰ se ✕)
       if (mobileMenu.classList.contains('show')) {
            menuToggle.innerHTML = '✕';
        } else {
            menuToggle.innerHTML = '☰';
        }
    });

        // Mobile menu ke kisi link par click karne par menu close ho jaye
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                menuToggle.innerHTML = '☰';
            });
        });