// // Jab bhi window scroll hogi, ye function chalega
// window.addEventListener('scroll', function() {
//   const navbars = document.getElementById('myNavbar');
  
//   // Agar scroll 50 pixels se zyada hai
//   if (window.scrollY > 50) {
//     navbars.classList.add('scrolled');
//   } else {
//     // Agar wapas upar aa gaye
//     navbars.classList.remove('scrolled');
//   }
// });



// Jab bhi window scroll hogi, ye function chalega
window.addEventListener('scroll', function() {
  const navbars = document.getElementById('myNavbar');
  const menuToggle = document.getElementById('menuToggle'); // Menu button ko yahan select kiya
  
  // Agar scroll 50 pixels se zyada hai
  if (window.scrollY > 50) {
    if (navbars) navbars.classList.add('scrolled');
    if (menuToggle) menuToggle.style.color = 'black'; // Scroll hone par color black
  } else {
    // Agar wapas upar aa gaye
    if (navbars) navbars.classList.remove('scrolled');
    if (menuToggle) menuToggle.style.color = ''; // Upar aane par wapas purana color (CSS wala)
  }
});







document.addEventListener("DOMContentLoaded", function() {
    
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Check karna ki elements actually exist karte hain
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            // Class toggle karein
            mobileMenu.classList.toggle('show');
            console.log(mobileMenu.classList);
            
            // Icon change karein (☰ se ✕)
            if (mobileMenu.classList.contains('show')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });

        // Links par click karne se menu band ho
        const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                menuToggle.innerHTML = '☰';
            });
        });
    } else {
        console.error("menuToggle ya mobileMenu HTML mein nahi mila!");
    }
});
