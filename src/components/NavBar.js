// src/components/NavBar.js
export function renderNavBar(parent) {
  const nav = document.createElement('nav');
  nav.className = 'nav-bar';
  nav.innerHTML = `
    <div class="container nav-container">
      <div class="nav-logo">
        <img src="./logo_positif_sukses-removebg-preview.png" alt="NextLevel Logo" class="nav-logo-img">
        <span>NextLevel</span>
      </div>
      <ul class="nav-links">
        <li><a class="nav-link" href="#hero">Beranda</a></li>
        <li><a class="nav-link" href="#what-you-learn">Materi Utama</a></li>
        <li><a class="nav-link" href="#curriculum">Kurikulum</a></li>
        <li><a class="nav-link" href="#social-proof">Testimoni</a></li>
        <li><a class="nav-link" href="#mentors">Mentor</a></li>
        <li><a class="nav-link" href="#facilities">Fasilitas</a></li>
        <li><a class="nav-link" href="#schedule">Jadwal</a></li>
      </ul>
      <button class="button button-primary nav-cta-btn" onclick="window.open('https://wa.me/6281358447267?text=Halo%20NextLevel%2C%20saya%20ingin%20daftar%20Kelas%20Korporatisasi', '_blank')">
        Daftar Sekarang
      </button>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="nav-mobile-menu" id="nav-mobile-menu">
      <a class="nav-link" href="#hero">Beranda</a>
      <a class="nav-link" href="#what-you-learn">Materi Utama</a>
      <a class="nav-link" href="#curriculum">Kurikulum</a>
      <a class="nav-link" href="#social-proof">Testimoni</a>
      <a class="nav-link" href="#mentors">Mentor</a>
      <a class="nav-link" href="#facilities">Fasilitas</a>
      <a class="nav-link" href="#schedule">Jadwal</a>
      <div class="nav-mobile-cta">
        <button class="button button-primary" style="width:100%" onclick="window.open('https://wa.me/6281358447267?text=Halo%20NextLevel%2C%20saya%20ingin%20daftar%20Kelas%20Korporatisasi', '_blank')">
          Daftar Sekarang
        </button>
      </div>
    </div>
  `;
  parent.insertBefore(nav, parent.firstChild);

  // Hamburger toggle
  const hamburger = nav.querySelector('#nav-hamburger');
  const mobileMenu = nav.querySelector('#nav-mobile-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(10, 31, 68, 0.98)';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
      nav.style.background = 'rgba(10, 31, 68, 0.95)';
      nav.style.boxShadow = 'none';
    }
  });
}
