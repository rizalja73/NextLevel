// src/components/ClassGallerySection.js
export function renderClassGallery(parent) {
  const section = document.createElement('section');
  section.id = 'class-gallery';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Suasana Kelas</h2>
      <p class="section-subtitle">Intip kebersamaan, kehangatan, dan kolaborasi produktif di kelas-kelas kami sebelumnya</p>
      
      <div class="gallery-grid">
        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting.webp" alt="Suasana Kelas 1">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/SNF-Consulting-Konsultan-Perusahaan-6.webp" alt="Suasana Kelas 2">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/SNF-Consulting-Konsultan-Perusahaan-3.webp" alt="Suasana Kelas 3">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/Kelas-Korporatisasi-SNF-Consulting-9.jpg" alt="Suasana Kelas 4">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/Kelas-Korporatisasi-SNF-Consulting-5.jpg" alt="Suasana Kelas 5">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/SNF-Consulting-Konsultan-Perusahaan-7.webp" alt="Suasana Kelas 6">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/Kelas-Korporatisasi-SNF-Consulting-4.jpg" alt="Suasana Kelas 7">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-1.webp" alt="Suasana Kelas 8">
          <div class="gallery-overlay"></div>
        </div>

        <div class="gallery-item">
          <img class="gallery-img" src="https://snfconsulting.com/wp-content/uploads/2025/02/SNF-Consulting-Konsultan-Perusahaan-2.webp" alt="Suasana Kelas 9">
          <div class="gallery-overlay"></div>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
