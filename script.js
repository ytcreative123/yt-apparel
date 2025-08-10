// Animasi fade-in untuk gambar gallery
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".fade-in");
  images.forEach(img => {
    setTimeout(() => {
      img.classList.add("visible");
    }, 300);
  });

  // Form pemesanan
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("formMessage").textContent = "Pesanan berhasil dikirim! Kami akan segera menghubungi Anda.";
      form.reset();
    });
  }
});

// Buat modal gambar
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.createElement("div");
  modal.classList.add("image-modal");
  document.body.appendChild(modal);

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);

  document.querySelectorAll(".clickable-image").forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.createElement("div");
  popup.classList.add("image-popup");
  document.body.appendChild(popup);

  const popupImg = document.createElement("img");
  popup.appendChild(popupImg);

  document.querySelectorAll(".gallery-image").forEach(img => {
    img.addEventListener("click", () => {
      popupImg.src = img.src;
      popup.style.display = "flex";
    });
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
