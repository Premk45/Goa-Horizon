// Jab bhi window scroll hogi, ye function chalega
window.addEventListener('scroll', function() {
  const navbars = document.getElementById('myNavbar');
  
  // Agar scroll 50 pixels se zyada hai
  if (window.scrollY > 50) {
    navbars.classList.add('scrolled');
  } else {
    // Agar wapas upar aa gaye
    navbars.classList.remove('scrolled');
  }
});