// src/components/Footer.js
export function renderFooter(parent) {
  const foot = document.createElement('footer');
  foot.id = 'footer';
  foot.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>NextLevel</h3>
          <p>Membantu pelaku bisnis scale up secara terstruktur, aman, dan berkelanjutan melalui edukasi tata kelola keuangan, korporatisasi, dan pilar bisnis modern.</p>
          <div class="footer-social">
            <a href="https://wa.me/6281358447267" target="_blank" aria-label="WhatsApp" class="footer-social-link">📱 WhatsApp</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Menu Utama</h4>
          <a href="#hero">Beranda</a>
          <a href="#what-you-learn">Materi Utama</a>
          <a href="#curriculum">Kurikulum</a>
          <a href="#benefits">Benefits</a>
          <a href="#social-proof">Testimoni</a>
        </div>
        <div class="footer-links">
          <h4>Hubungi Kami</h4>
          <a href="https://wa.me/6281358447267" target="_blank">WhatsApp Admin</a>
          <a href="#schedule">Jadwal Kelas</a>
          <a href="#mentors">Mentor Kami</a>
          <a href="#facilities">Fasilitas</a>
          <a href="#notable-alumni">Alumni</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} NextLevel & SNF Consulting Partner. All rights reserved.</p>
      </div>
    </div>
  `;
  parent.appendChild(foot);
}
