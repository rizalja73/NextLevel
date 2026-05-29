// src/components/FacilitiesSection.js
export function renderFacilities(parent) {
  const section = document.createElement('section');
  section.id = 'facilities';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Fasilitas yang Didapatkan</h2>
      <p class="section-subtitle">Dukungan penuh untuk kenyamanan belajar dan perkembangan bisnis Anda berkelanjutan</p>
      
      <div class="facilities-grid">
        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-3.webp" alt="Grup WA Alumni">
          <h3 class="facility-name">Grup WA Alumni</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-6.webp" alt="Jejaring Bisnis">
          <h3 class="facility-name">Jejaring Bisnis</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-5.webp" alt="Diskusi Semi Privat">
          <h3 class="facility-name">Diskusi Semi Privat</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-8.webp" alt="Simulasi di Setiap Kelas">
          <h3 class="facility-name">Simulasi di Setiap Kelas</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-7.webp" alt="Materi Buku">
          <h3 class="facility-name">Materi Buku</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-4.webp" alt="Makan Siang dan Camilan">
          <h3 class="facility-name">Makan Siang & Camilan</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-2.webp" alt="Konsultasi setelah Kelas">
          <h3 class="facility-name">Konsultasi setelah Kelas</h3>
        </div>

        <div class="facility-card">
          <img class="facility-icon-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Icon-1.webp" alt="Sertifikat Kelas">
          <h3 class="facility-name">Sertifikat Kelas</h3>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
