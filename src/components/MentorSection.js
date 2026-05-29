// src/components/MentorSection.js
export function renderMentor(parent) {
  const section = document.createElement('section');
  section.id = 'mentors';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Dibawakan Oleh</h2>
      <p class="section-subtitle">Belajar langsung dari praktisi dan konsultan manajemen berpengalaman</p>
      
      <div class="mentors-grid">
        <!-- Mentor 1: Reno Adrian -->
        <div class="mentor-card">
          <div class="mentor-img-wrapper">
            <img class="mentor-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Konsulting-Exclusive.webp" alt="Reno Adrian">
          </div>
          <div class="mentor-info">
            <span class="mentor-tag">Senior Associate Consultant</span>
            <h3 class="mentor-name">RENO ADRIAN</h3>
            <p class="mentor-title">Eindhoven University of Technology & UI Alumni</p>
            <p class="mentor-desc">
              Lulusan Teknik Industri Universitas Indonesia ini telah lama meniti karier sebagai konsultan bisnis. Profesional yang juga menempuh studi di Eindhoven University of Technology, Belanda ini memiliki spesialisasi analisis data korporasi yang kuat. Penyampaian materi dibawakan secara dinamis berbasis studi kasus nyata, literatur dunia, dan diskusi interaktif multi-bahasa.
            </p>
          </div>
        </div>

        <!-- Mentor 2: Iman Supriyono -->
        <div class="mentor-card">
          <div class="mentor-img-wrapper">
            <img class="mentor-img" src="https://snfconsulting.com/wp-content/uploads/2025/03/Kelas-Korporatisasi-SNF-Konsulting-Exclusive-Iman.webp" alt="Iman Supriyono">
          </div>
          <div class="mentor-info">
            <span class="mentor-tag">Founder & Managing Director</span>
            <h3 class="mentor-name">IMAN SUPRIYONO</h3>
            <p class="mentor-title">Strategic Finance Expert & Knowledge Entrepreneur</p>
            <p class="mentor-desc">
              Pendiri SNF Consulting yang berdedikasi mendampingi perusahaan bertumbuh optimal sesuai Corporate Life Cycle menuju fully corporatized company. Beliau adalah sparring partner pebisnis papan atas dalam menyusun tata kelola strategic finance.
            </p>
            <div class="mentor-highlights">
              <div class="mentor-highlight-item">
                <span>📚</span>
                <span>Penulis Buku Best Seller “FSQ” (Financial Spiritual Quotient)</span>
              </div>
              <div class="mentor-highlight-item">
                <span>⏳</span>
                <span>Berkiprah di dunia Strategic Management selama puluhan tahun.</span>
              </div>
              <div class="mentor-highlight-item">
                <span>💰</span>
                <span>Spesialisasi utama dalam restrukturisasi modal dan Strategic Finance.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
