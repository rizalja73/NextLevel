// src/components/WhatYouLearnSection.js
export function renderWhatYouLearn(parent) {
  const section = document.createElement('section');
  section.id = 'what-you-learn';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Lalu apa saja sih yang akan Anda Pelajari?</h2>
      <p class="section-subtitle">Kuasai fondasi bisnis mutakhir untuk melipatgandakan nilai dan kapasitas perusahaan Anda</p>
      
      <div class="learn-grid">
        <div class="learn-card">
          <div class="learn-card-icon">🔄</div>
          <div class="learn-card-content">
            <h3>Corporate Life Cycle (Siklus Hidup Korporasi)</h3>
            <p>Pelajari inti sari dari sejarah korporasi berbagai bangsa untuk diterapkan secara praktis dalam bisnis Anda.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">📈</div>
          <div class="learn-card-content">
            <h3>Konversi ROE ke ROI yang Menarik Investor</h3>
            <p>Strategi sistematis untuk meningkatkan Return on Investment secara berkelanjutan dan menarik minat pemodal.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">⚠️</div>
          <div class="learn-card-content">
            <h3>IPO Trap (Jebakan IPO)</h3>
            <p>Strategi mitigasi risiko dan penentuan timing yang tepat sebelum membawa bisnis Anda melantai di bursa saham.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">🏦</div>
          <div class="learn-card-content">
            <h3>Cara Kerja IC, Endowment Fund, dan Dana Wakaf</h3>
            <p>Mengoptimalkan Investment Company (IC) sebagai instrumen daya tak berwujud dalam mengelola aset tanpa bunga.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">💎</div>
          <div class="learn-card-content">
            <h3>Pemahaman Mendalam tentang Valuasi Perusahaan</h3>
            <p>Kenali perbedaan penting dan peran strategis antara par value, book value, dan market value.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">💡</div>
          <div class="learn-card-content">
            <h3>Mengoptimalkan Aset Tak Berwujud</h3>
            <p>Ubah nilai intangible asset menjadi likuiditas tunai tanpa dibebani bunga dan tanpa kewajiban pengembalian pokok.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">📉</div>
          <div class="learn-card-content">
            <h3>Menurunkan Biaya Modal (Cost of Capital)</h3>
            <p>Dapatkan alternatif sumber pendanaan dengan biaya lebih rendah dari bank, hanya kisaran 2-3% per tahun.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">🤝</div>
          <div class="learn-card-content">
            <h3>Strategi Merger dan Akuisisi</h3>
            <p>Siapkan modal berbiaya rendah dan peta jalan yang matang untuk ekspansi eksponensial lewat merger dan akuisisi.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">📊</div>
          <div class="learn-card-content">
            <h3>Dasar Valuasi Perusahaan</h3>
            <p>Memahami bagaimana nilai perusahaan dihitung dan dipersepsikan oleh pasar secara menyeluruh dan objektif.</p>
          </div>
        </div>

        <div class="learn-card">
          <div class="learn-card-icon">🚀</div>
          <div class="learn-card-content">
            <h3>Peran Venture Capitalist</h3>
            <p>Pahami cara kerja VC dalam mendorong pertumbuhan bisnis dan bagaimana menarik minat mereka untuk berinvestasi.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(section);
}
