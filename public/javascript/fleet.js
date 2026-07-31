function filterFleet(category, button) {
  // Update Active Class on Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Show/Hide Cards based on category
  const cards = document.querySelectorAll('.vehicle-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category').includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// let currentImageIndex = 0;
// let vehicleCards = [];

// // DOM load hone ke baad Click Listener Attatch karein
// document.addEventListener("DOMContentLoaded", () => {
//   vehicleCards = Array.from(document.querySelectorAll('.vehicle-card'));

//   vehicleCards.forEach((card, index) => {
//     card.addEventListener('click', () => {
//       openLightbox(index);
//     });
//   });
// });




let currentCardIndex = 0;
let allCards = [];

document.addEventListener("DOMContentLoaded", () => {
  // Sabhi vehicle cards ko collect karein
  allCards = Array.from(document.querySelectorAll('.vehicle-card'));
  
  allCards.forEach((card, index) => {
    // Card par cursor dynamic set hoga
    card.style.cursor = 'pointer';

    // Event listener click ke liye
    card.addEventListener('click', (e) => {
      // Agar card ke andar kisi specific action button (e.g. "Book Now") par click ho to modal na khule
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        return; 
      }
      openLightbox(index);
    });
  });
});

// Lightbox Open Function
function openLightbox(index) {
  if (allCards.length === 0) return;
  
  currentCardIndex = index;
  renderCardContent();
  
  // Modal show karein
  document.getElementById('cardLightbox').style.display = 'flex';
}

// Card ka HTML Lightbox container me Inject karne ke liye
function renderCardContent() {
  const container = document.getElementById('lightboxCardContent');
  container.innerHTML = ''; // Pehle wale content ko clear karein
  
  // Selected Card ka duplicate (clone) bana ke container me dalen
  const targetCard = allCards[currentCardIndex];
  const clonedCard = targetCard.cloneNode(true);
  
  container.appendChild(clonedCard);
}

// Next / Previous Slide Logic
function changeCard(direction) {
  if (allCards.length === 0) return;
  
  currentCardIndex += direction;
  
  // Loop back logic
  if (currentCardIndex < 0) {
    currentCardIndex = allCards.length - 1;
  } else if (currentCardIndex >= allCards.length) {
    currentCardIndex = 0;
  }

  renderCardContent();
}

// Close Function
function closeLightbox() {
  document.getElementById('cardLightbox').style.display = 'none';
}

// Background dark area click par close hoga
window.addEventListener('click', (e) => {
  const modal = document.getElementById('cardLightbox');
  if (e.target === modal) {
    closeLightbox();
  }
});

// Keyboard Arrow & ESC Key navigation
window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('cardLightbox');
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowLeft') changeCard(-1);
    if (e.key === 'ArrowRight') changeCard(1);
    if (e.key === 'Escape') closeLightbox();
  }
});