// src/components/SocialProofSection.js
export function renderSocialProof(parent) {
  const section = document.createElement('section');
  section.id = 'social-proof';
  section.innerHTML = `
    <div class="container">
      <span class="badge">⭐ DIPERCAYA RIBUAN PEBISNIS</span>
      <h2 class="section-title">Kelas Korporatisasi Dengan 2.000+ Alumni</h2>
      <p class="section-subtitle">Dengarkan kisah sukses langsung dari para alumni kelas kami yang telah mentransformasi bisnis mereka</p>

      <!-- Stats Strip -->
      <div class="proof-stats-strip">
        <div class="proof-stat">
          <span class="proof-stat-number">2.000+</span>
          <span class="proof-stat-label">Total Alumni</span>
        </div>
        <div class="proof-stat-divider"></div>
        <div class="proof-stat">
          <span class="proof-stat-number">4.9/5</span>
          <span class="proof-stat-label">Rating Peserta</span>
        </div>
        <div class="proof-stat-divider"></div>
        <div class="proof-stat">
          <span class="proof-stat-number">50+</span>
          <span class="proof-stat-label">Angkatan Kelas</span>
        </div>
        <div class="proof-stat-divider"></div>
        <div class="proof-stat">
          <span class="proof-stat-number">30+</span>
          <span class="proof-stat-label">Kota di Indonesia</span>
        </div>
      </div>

      <!-- Video Testimoni -->
      <h3 class="subsection-title">🎥 Video Testimoni Alumni</h3>
      <div class="video-grid">
        <div class="video-card">
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/ER1Gbhc6mEY?modestbranding=1&rel=0&controls=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div class="video-card">
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/XoAotyAN2ng?modestbranding=1&rel=0&controls=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div class="video-card">
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/bvZJThh7pRw?modestbranding=1&rel=0&controls=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <!-- Testimoni Alumni Slider -->
      <h3 class="subsection-title" style="margin-top: 48px;">💬 Testimoni Tertulis Alumni</h3>

      <div class="slider-container">
        <div class="slider-track" id="testimonial-track">
          <div class="slide-item">
            <img src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Testimoni-1.webp" alt="Testimoni Alumni 1" loading="lazy">
          </div>
          <div class="slide-item">
            <img src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Testimoni-2.webp" alt="Testimoni Alumni 2" loading="lazy">
          </div>
          <div class="slide-item">
            <img src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Testimoni-3.webp" alt="Testimoni Alumni 3" loading="lazy">
          </div>
          <div class="slide-item">
            <img src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Testimoni-4.webp" alt="Testimoni Alumni 4" loading="lazy">
          </div>
        </div>
        <button class="slider-btn slider-btn-prev" id="testi-prev" aria-label="Sebelumnya">❮</button>
        <button class="slider-btn slider-btn-next" id="testi-next" aria-label="Berikutnya">❯</button>
        <!-- Dots -->
        <div class="slider-dots" id="testi-dots"></div>
      </div>
    </div>
  `;
  parent.appendChild(section);

  // Slider Logic
  const track = section.querySelector('#testimonial-track');
  const slides = section.querySelectorAll('.slide-item');
  const prevBtn = section.querySelector('#testi-prev');
  const nextBtn = section.querySelector('#testi-next');
  const dotsContainer = section.querySelector('#testi-dots');
  let currentIndex = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { currentIndex = i; updateSlider(); });
    dotsContainer.appendChild(dot);
  });

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  // Auto-play
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }, 5000);
}
