// src/components/ScheduleSection.js
export function renderSchedule(parent) {
  const section = document.createElement('section');
  section.id = 'schedule';
  section.innerHTML = `
    <div class="container">
      <span class="badge" style="background: rgba(10,31,68,0.08); color: var(--color-primary); border-color: rgba(10,31,68,0.15);">📅 JADWAL KELAS</span>
      <h2 class="section-title">Jadwal Terdekat</h2>
      <p class="section-subtitle">Pilih tanggal terbaik untuk mempercepat proses pertumbuhan bisnis Anda</p>
      
      <div class="schedule-wrapper">
        <div class="schedule-info">
          <h3>Rencanakan Kehadiran Anda</h3>
          <p>Amankan kursi Anda sekarang juga. Investasikan waktu 3 hari bersama tim manajemen kunci Anda untuk mendesain ulang arsitektur pertumbuhan perusahaan Anda.</p>
          
          <div class="schedule-warning">
            <strong>⚠️ Kuota Sangat Terbatas!</strong>
            <span>Kelas kami dirancang eksklusif dengan konsep <em>semi-private meeting</em>. Kami membatasi kapasitas maksimal hanya <strong>13 peserta</strong> per angkatan untuk menjaga dinamika diskusi yang mendalam dan kerahasiaan data bisnis Anda.</span>
          </div>

          <div class="schedule-details">
            <div class="schedule-detail-item">
              <span class="schedule-detail-icon">📍</span>
              <span>Surabaya, Jawa Timur (Offline)</span>
            </div>
            <div class="schedule-detail-item">
              <span class="schedule-detail-icon">⏰</span>
              <span>3 Hari Intensif (08.00 – 17.00 WIB)</span>
            </div>
            <div class="schedule-detail-item">
              <span class="schedule-detail-icon">👥</span>
              <span>Maks. 13 Peserta per Angkatan</span>
            </div>
          </div>

          <button class="button button-primary" onclick="window.open('https://wa.me/6281358447267?text=Halo%20NextLevel%2C%20saya%20tertarik%20mendaftar%20dan%20ingin%20tahu%20jadwal%20terdekat%20Kelas%20Korporatisasi.', '_blank')">📩 Tanyakan Jadwal & Ketersediaan</button>
        </div>
        
        <div class="schedule-img-wrapper">
          <img class="schedule-img" src="https://snfconsulting.com/wp-content/uploads/2025/06/Jadwal-Kelas-SNF-min.webp" alt="Poster Jadwal Kelas SNF" loading="lazy">
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
