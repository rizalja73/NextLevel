// src/components/BenefitsSection.js
export function renderBenefits(parent) {
  const section = document.createElement('section');
  section.id = 'benefits';
  section.innerHTML = `
    <div class="container">
      <span class="badge" style="background: rgba(11,61,46,0.08); color: var(--color-accent); border-color: rgba(11,61,46,0.2);">🎯 KEUNTUNGAN EKSKLUSIF</span>
      <h2 class="section-title">Benefits Mengikuti Kelas KORPORATISASI</h2>
      <p class="section-subtitle">Nilai tambah eksklusif yang akan mengubah cara Anda mengelola dan menskalakan bisnis</p>
      
      <div class="benefits-wrapper">
        <div class="benefits-list">
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span class="benefit-text">Belajar langkah demi langkah proses korporatisasi secara clear, komprehensif, dan data-driven.</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span class="benefit-text">Menjadi lebih paham dalam membaca dan menganalisa laporan keuangan secara taktis.</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span class="benefit-text">Mempelajari kunci sukses ekspansi perusahaan menuju kelas korporasi multinasional.</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span class="benefit-text">Membangun networking strategis dengan para CEO, direksi, komisaris, pemegang saham, dan investor terkemuka di Indonesia.</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span class="benefit-text">Memiliki insting dan kemampuan pengambilan keputusan bisnis yang jauh lebih strategis dan presisi.</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span class="benefit-text">Menyingkap strategi dan rahasia sukses raksasa global dalam melakukan scale up perusahaan besar.</span>
          </div>
        </div>

        <div class="benefit-banner">
          <span class="banner-badge">🔑 Kunci Utama Scaling</span>
          <h3 class="banner-title">BIAYA MODAL (COST OF CAPITAL) UNTUK EKSPANSI BISA TURUN DI BAWAH 10%, HINGGA HANYA 2-3% PER TAHUN!</h3>
          <p class="banner-desc">"Perusahaan tidak akan pernah menjadi besar ketika Anda belum mampu menurunkan biaya modal."</p>
          <button class="button button-primary" style="margin-top: 24px;" onclick="window.open('https://wa.me/6281358447267?text=Halo%20NextLevel%2C%20saya%20ingin%20tahu%20lebih%20detail%20tentang%20Kelas%20Korporatisasi.', '_blank')">Pelajari Lebih Lanjut</button>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
