// src/components/HeroSection.js
export function renderHero(parent) {
  const section = document.createElement('section');
  section.id = 'hero';
  section.innerHTML = `
    <div class="container hero-content">
      <span class="badge">✨ EXCLUSIVE CLASS · KELAS KORPORATISASI</span>
      <h1 class="hero-headline">Bawa Bisnis Anda ke<br>Level Korporasi Berikutnya</h1>

      <div class="hero-warning-card">
        <div class="hero-warning-icon">⚠️</div>
        <div class="hero-warning-text">
          <h4>BAHAYA SCALE-UP TANPA FONDASI: SEPERTI MEMBANGUN DI ATAS PASIR.</h4>
          <p>Perusahaan bisa berujung tutup jika fondasi keuangan, sistem delegasi, dan biaya modal tidak dikelola secara benar. Pelajari cara yang terbukti.</p>
        </div>
      </div>

      <p class="hero-subheadline">Pelajari langkah demi langkah proses korporatisasi secara komprehensif — konversi ROE ke ROI, turunkan biaya modal (cost of capital) hingga di bawah 10% per tahun, dan bangun arsitektur bisnis sekelas perusahaan multinasional.</p>

      <div class="hero-cta">
        <button class="button button-primary" onclick="window.open('https://wa.me/6282279382434?text=Halo%20NextLevel%2C%20saya%20tertarik%20untuk%20mendaftar%20Kelas%20Korporatisasi%20dan%20mendapatkan%20info%20lebih%20lanjut.', '_blank')">
          🔥 Daftar Kelas Sekarang
        </button>
        <button class="button button-outline" onclick="location.href='#curriculum'">
          📋 Lihat Kurikulum Lengkap
        </button>
      </div>

      <div class="hero-stats">
        <div class="hero-stat-item">
          <span class="hero-stat-number">2.000+</span>
          <span class="hero-stat-label">Alumni Aktif</span>
        </div>
        <div class="hero-stat-item">
          <span class="hero-stat-number">3 Hari</span>
          <span class="hero-stat-label">Durasi Intensif</span>
        </div>
        <div class="hero-stat-item">
          <span class="hero-stat-number">5 Materi</span>
          <span class="hero-stat-label">Topik Utama</span>
        </div>
        <div class="hero-stat-item">
          <span class="hero-stat-number">≤13 Orang</span>
          <span class="hero-stat-label">Semi-Private Meeting</span>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
