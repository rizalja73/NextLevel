// src/components/CurriculumSection.js
export function renderCurriculum(parent) {
  const section = document.createElement('section');
  section.id = 'curriculum';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">3 Hari Kelas Dalam 5 Materi Utama</h2>
      <p class="section-subtitle">Struktur kurikulum mendalam yang dirancang untuk transformasi total bisnis Anda</p>
      
      <div class="curriculum-container">
        <!-- Tab Buttons -->
        <div class="curriculum-tabs">
          <button class="tab-btn active" data-tab="korporatisasi">1. Korporatisasi</button>
          <button class="tab-btn" data-tab="valuasi">2. Valuasi Perusahaan</button>
          <button class="tab-btn" data-tab="ic">3. Investment Company (IC)</button>
          <button class="tab-btn" data-tab="ceo">4. Kelas CEO</button>
          <button class="tab-btn" data-tab="rpd">5. Revenue & Profit Driver</button>
        </div>

        <!-- Tab Panels -->
        <!-- Panel 1: Korporatisasi -->
        <div class="curriculum-panel active" id="tab-panel-korporatisasi">
          <div class="panel-header">
            <h3>Materi Korporatisasi</h3>
          </div>
          <div class="curriculum-list">
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Corporate Life Cycle:</strong> Pembelajaran mendalam intisari sejarah korporasi dari berbagai bangsa di dunia.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Intangible Asset Monetization:</strong> Mengubah aset tak berwujud menjadi modal tunai tanpa bunga & tanpa pengembalian pokok.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>ROE to ROI Conversion:</strong> Strategi mengkonversi Return on Equity menjadi Return on Investment untuk memikat investor.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Exponential ROI Growth:</strong> Membangun pertumbuhan ROI yang aman hingga ratusan persen seiring ekspansi perusahaan.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Cost of Capital Reduction:</strong> Menurunkan biaya modal untuk ekspansi jauh di bawah bunga bank, hingga kisaran 2-3% per tahun.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Dasar-Dasar Valuasi:</strong> Pengenalan par value, book value, dan market value dalam penentuan harga saham.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Merger & Akuisisi:</strong> Cara menggalang dana berbiaya murah untuk ekspansi lewat akuisisi kompetitor.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>IPO Trap:</strong> Mengapa go-public bisa membuat perusahaan stagnan atau bangkrut jika dilakukan di waktu yang salah.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Studi Kasus Raksasa Global:</strong> Memahami kenapa Gojek, Facebook, & Alibaba baru masuk IPO setelah skala bisnis mereka meraksasa.</span>
            </div>
          </div>
        </div>

        <!-- Panel 2: Valuasi -->
        <div class="curriculum-panel" id="tab-panel-valuasi">
          <div class="panel-header">
            <h3>Materi Valuasi Perusahaan</h3>
          </div>
          <div class="curriculum-list">
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Definisi Nilai:</strong> Perbedaan fundamental par value, book value, market value, intangible asset, dan valuasi bisnis.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Value vs Valuation:</strong> Memahami penciptaan nilai riil dibandingkan dengan penaksiran harga pasar (valuasi).</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Prinsip Penciptaan Nilai:</strong> Fondasi dasar yang menentukan mengapa sebuah bisnis dinilai tinggi oleh pasar.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Metode Valuasi Bisnis:</strong> Rumus dan pendekatan matematis dalam menghitung nilai korporasi.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Opportunity Cost Concept:</strong> Menilai potensi kerugian dan keuntungan alternatif dari setiap investasi.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Discounted Cash Flow (DCF):</strong> Proyeksi arus kas masa depan dan perhitungannya terhadap nilai uang masa kini.</span>
            </div>
          </div>
        </div>

        <!-- Panel 3: IC -->
        <div class="curriculum-panel" id="tab-panel-ic">
          <div class="panel-header">
            <h3>Materi Investment Company (IC)</h3>
          </div>
          <div class="curriculum-list">
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>OpCo vs HoldCo/IC:</strong> Memahami perbedaan mendasar antara operating company (perusahaan operasional) dengan investment company.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Pendirian IC A-Z:</strong> Langkah taktis mendirikan, menstrukturisasi, dan mengelola investment company secara legal dan finansial.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Investasi Aman-Aman-Aman-Hasil:</strong> Formula portofolio investasi dengan risiko minimum namun dengan imbal hasil terukur.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Pendanaan Start-Up Rugi:</strong> Metode menginvestasikan dana secara aman pada perusahaan start-up yang secara pembukuan masih merugi.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Venture Capitalist (VC) Role:</strong> Menyelami peran VC dalam ekosistem pendanaan dan bagaimana berinteraksi dengan mereka.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>VC vs IC:</strong> Perbedaan strategi, jangka waktu investasi, dan kepemilikan saham antara VC dengan IC.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Wakaf & Endowment Fund:</strong> Pengelolaan dana abadi kemanusiaan dan sosial dengan menerapkan prinsip-prinsip profesional IC.</span>
            </div>
          </div>
        </div>

        <!-- Panel 4: CEO -->
        <div class="curriculum-panel" id="tab-panel-ceo">
          <div class="panel-header">
            <h3>Materi Kelas CEO</h3>
          </div>
          <div class="curriculum-list">
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Risiko Hukum Pengurus:</strong> Batasan tanggung jawab direksi dan komisaris hingga menyangkut harta pribadi mereka.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Direksi & Komisaris:</strong> Tata kelola hubungan kerja, checks and balances, serta pembagian wewenang yang sehat.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Kompensasi Eksekutif:</strong> Sistem gaji, bonus, opsi saham, dan fasilitas bagi direksi serta komisaris secara profesional.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Wewenang Pengambilan Keputusan:</strong> Batas otoritas direksi dalam transaksi bisnis tanpa melanggar RUPS.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Studi Kasus Riil:</strong> Peran direksi mengelola par value, book value, market value, dan intangible asset demi pertumbuhan eksponensial.</span>
            </div>
          </div>
        </div>

        <!-- Panel 5: RPD -->
        <div class="curriculum-panel" id="tab-panel-rpd">
          <div class="panel-header">
            <h3>Materi Revenue & Profit Driver (RPD)</h3>
          </div>
          <div class="curriculum-list">
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Pengertian RPD:</strong> Identifikasi faktor pendorong utama pendapatan dan laba bersih di dalam bisnis Anda.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>RPD Lintas Industri:</strong> Contoh dan karakteristik RPD pada industri manufaktur, jasa, ritel, hingga teknologi digital.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Karakteristik Dasar RPD:</strong> Bagaimana mengisolasi dan mendominasi variabel utama yang melipatgandakan keuntungan.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Variabel & Statistika RPD:</strong> Penerapan metode analisis data dan statistik untuk memprediksi serta mengendalikan RPD.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Core Competence & RPD:</strong> Menyelaraskan kompetensi inti perusahaan dengan mesin pencetak uang utama bisnis Anda.</span>
            </div>
            <div class="curriculum-item">
              <span class="curriculum-item-check">✅</span>
              <span><strong>Single vs Multiple RPD:</strong> Memilih fokus pada satu pendorong utama atau mendistribusikan ke beberapa pilar profit.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
  parent.appendChild(section);

  // Tab Interaction Logic
  const tabButtons = section.querySelectorAll('.tab-btn');
  const tabPanels = section.querySelectorAll('.curriculum-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active to clicked button
      button.classList.add('active');

      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('active'));
      // Show targeted panel
      const targetTab = button.getAttribute('data-tab');
      const targetPanel = section.querySelector(`#tab-panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}
