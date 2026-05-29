// src/components/NotableAlumniSection.js
export function renderNotableAlumni(parent) {
  const section = document.createElement('section');
  section.id = 'notable-alumni';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Beberapa Public Figure Alumnus</h2>
      <p class="section-subtitle">Para pemimpin bisnis, direktur, dan tokoh publik yang telah belajar bersama kami</p>
      
      <div class="slider-container" style="max-width: 100%;">
        <div class="alumni-carousel">
          <div class="alumni-track" id="alumni-track">
            
            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/elementor/thumbs/Kelas-Korporatisasi-SNF-Consulting-Klien-3-r2duzrg409cqhjsvvkojtjqmokmsccyfy32r2f6v5c.webp" alt="Rovan Alfarry">
                <h4 class="alumni-name">Rovan Alfarry</h4>
                <p class="alumni-role">Founder & CEO<br>orderonline.id</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/elementor/thumbs/Kelas-Korporatisasi-SNF-Consulting-Klien-5-r2dv0gtr4sbh70s0rdnh6vc2pz5p46r71kov0w58hc.webp" alt="Prima Alvernia">
                <h4 class="alumni-name">Prima Alvernia</h4>
                <p class="alumni-role">Founder & CEO<br>Mammaroti</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/elementor/thumbs/Kelas-Korporatisasi-SNF-Consulting-Klien-8-r2dv20a8c0fe80jgrjmgrzc9rpkcqbvcx76ic7v0a8.webp" alt="Salman Alfarisyi">
                <h4 class="alumni-name">Salman Alfarisyi</h4>
                <p class="alumni-role">CEO<br>RSIA Annisa Pekanbaru</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/elementor/thumbs/Gus-Rai-Founder-PT.-Hatten-Bali-Tbk-SNF-Consulting-r2np6nfdx4cwsefbn7s3rwm9lh4l3t3l14fjalbkmo.webp" alt="Gus Rai">
                <h4 class="alumni-name">Gus Rai</h4>
                <p class="alumni-role">Founder & CEO<br>PT. Hatten Bali Tbk</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/elementor/thumbs/74de00c7-6c16-4e55-8a2e-e94f5671bc4f_compressed-scaled-r30ro0sv5ucczvy5ahkn3thwbmz8w5agdbtw18410w.webp" alt="Apik Primadya">
                <h4 class="alumni-name">Apik Primadya</h4>
                <p class="alumni-role">Founder & CEO<br>Apique Group</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Klien-6.webp" alt="Hebbie Agus Kurnia">
                <h4 class="alumni-name">Hebbie Agus Kurnia</h4>
                <p class="alumni-role">Founder & CEO<br>Hilir Digital</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Klien-2.webp" alt="Rendra Masdrajad Safaat">
                <h4 class="alumni-name">Rendra Masdrajad</h4>
                <p class="alumni-role">Anggota DPRD Malang &<br>Komisaris PT. Primaland</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Klien-1.webp" alt="Elang Gumilang">
                <h4 class="alumni-name">Elang Gumilang</h4>
                <p class="alumni-role">Investor &<br>Business Leader</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Consulting-Klien-4.webp" alt="Saprian">
                <h4 class="alumni-name">Saprian (Bang Sap)</h4>
                <p class="alumni-role">Founder & CEO<br>Environesia Group</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/2025/03/Ken-Narotama-Komisioner-Samudera-Indonesia-SNF-Consulting.webp" alt="Ken Narotama">
                <h4 class="alumni-name">Ken Narotama</h4>
                <p class="alumni-role">Komisaris<br>Samudera Indonesia</p>
              </div>
            </div>

            <div class="alumni-card">
              <div class="alumni-card-inner">
                <img class="alumni-photo" src="https://snfconsulting.com/wp-content/uploads/2025/03/Bayu-Susila-Founder-Bakmi-Akiu_compressed-SNF-Consulting.webp" alt="Bayu Susila">
                <h4 class="alumni-name">Bayu Susila</h4>
                <p class="alumni-role">Founder & CEO<br>Bakmi AKIU</p>
              </div>
            </div>

          </div>
        </div>
        <button class="slider-btn slider-btn-prev" id="alumni-prev">❮</button>
        <button class="slider-btn slider-btn-next" id="alumni-next">❯</button>
      </div>
    </div>
  `;
  parent.appendChild(section);

  // Alumni Slider Logic
  const track = section.querySelector('#alumni-track');
  const cards = section.querySelectorAll('.alumni-card');
  const prevBtn = section.querySelector('#alumni-prev');
  const nextBtn = section.querySelector('#alumni-next');
  let currentOffset = 0;

  function getVisibleCardsCount() {
    if (window.innerWidth > 1024) return 4;
    if (window.innerWidth > 600) return 2;
    return 1;
  }

  function slide() {
    const visibleCards = getVisibleCardsCount();
    const cardWidthPercent = 100 / visibleCards;
    
    // Bounds check
    const maxOffset = cards.length - visibleCards;
    if (currentOffset > maxOffset) currentOffset = 0;
    if (currentOffset < 0) currentOffset = maxOffset;

    track.style.transform = `translateX(-${currentOffset * cardWidthPercent}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentOffset++;
    slide();
  });

  prevBtn.addEventListener('click', () => {
    currentOffset--;
    slide();
  });

  // Re-align on resize
  window.addEventListener('resize', slide);
}
