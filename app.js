// ==========================================
// NotulaMoM - AI Minutes of Meeting Platform
// Interactive Frontend Script (Dark Theme)
// ==========================================

// Sample Datasets for Interactive MoM Presets
const momPresets = {
  sprint: {
    title: "Weekly Engineering Sprint #42",
    meta: "Durasi: 45 Menit • 6 Peserta • Platform: Google Meet • Status: Disetujui",
    summary: "Rapat sprint minggu ke-42 membahas integrasi API Gateway, perbaikan latensi query database sebesar 40%, dan persiapan peluncuran fitur ekspor otomatis notulensi rapat ke PDF/Word.",
    decisions: [
      "Mengadopsi arsitektur microservices ringan untuk modul audio transcriber.",
      "Jadwal freeze code ditetapkan pada Jumat, 13 November 2026 pukul 18:00 WIB.",
      "Penundaan refactoring modul billing ke Sprint #43 demi mengutamakan stabilitas live-sync."
    ],
    actionItems: [
      { task: "Optimasi indexing query PostgreSQL", pic: "Reza Pratama", role: "Backend Lead", deadline: "12 Nov 2026", status: "In Progress", statusColor: "emerald" },
      { task: "Desain UI modal e-signature MoM", pic: "Sarah Dewi", role: "UI/UX Designer", deadline: "13 Nov 2026", status: "Review", statusColor: "blue" },
      { task: "End-to-end testing audio recorder GMeet", pic: "Budi Santoso", role: "QA Engineer", deadline: "14 Nov 2026", status: "Pending", statusColor: "amber" }
    ],
    plainText: `MINUTES OF MEETING (MoM)
Topik: Weekly Engineering Sprint #42
Tanggal: 11 November 2026
Durasi: 45 Menit
Partisipan: Reza, Sarah, Budi, Dimas, Amanda, Farhan

1. RINGKASAN EKSEKUTIF
Rapat sprint membahas integrasi API Gateway, optimasi latensi query database, dan persiapan peluncuran fitur ekspor otomatis notulensi rapat ke PDF/Word.

2. KEPUTUSAN KUNCI
- Mengadopsi arsitektur microservices ringan untuk modul audio transcriber.
- Freeze code ditetapkan pada Jumat, 13 November 2026 pukul 18:00 WIB.
- Modul billing ditunda ke Sprint #43.

3. ACTION ITEMS & PIC
- Reza Pratama (Backend Lead): Optimasi indexing query PostgreSQL (Deadline: 12 Nov 2026)
- Sarah Dewi (UI/UX Designer): Desain UI modal e-signature MoM (Deadline: 13 Nov 2026)
- Budi Santoso (QA Engineer): End-to-end testing audio recorder GMeet (Deadline: 14 Nov 2026)`
  },

  bod: {
    title: "Rapat Direksi (BOD) & Evaluasi Kinerja Q3",
    meta: "Durasi: 1 Jam 30 Menit • 8 Direksi & Komisaris • Sifat: Rahasia (Confidential)",
    summary: "Evaluasi kinerja keuangan kuartal 3 menunjukkan kenaikan laba bersih sebesar 28% YoY. Direksi menyetujui ekspansi unit bisnis enterprise cloud dan pengalokasian capex IT senilai Rp 2,4 Miliar.",
    decisions: [
      "Menyetujui laporan keuangan interim Q3 tanpa catatan minor.",
      "Menyetujui alokasi Capex IT Rp 2,4 Miliar untuk lisensi infrastruktur & automasi AI.",
      "Pembentukan taskforce efisiensi operasional lintas divisi di bawah Direktur Operasi."
    ],
    actionItems: [
      { task: "Penyusunan draft revisi Rencana Kerja Anggaran (RKAP)", pic: "Dr. Hendrawan", role: "Direktur Keuangan", deadline: "20 Nov 2026", status: "Urgent", statusColor: "rose" },
      { task: "Finalisasi vendor audit independen ISO 27001", pic: "Indah Permata", role: "VP Governance & Risk", deadline: "25 Nov 2026", status: "In Progress", statusColor: "emerald" },
      { task: "Distribusi surat keputusan BOD ke seluruh kepala divisi", pic: "Sekretariat Korporat", role: "Corp Secretary", deadline: "14 Nov 2026", status: "Pending", statusColor: "amber" }
    ],
    plainText: `MINUTES OF MEETING (MoM) - RAHASIA
Topik: Rapat Direksi (BOD) & Evaluasi Kinerja Q3
Tanggal: 11 November 2026
Durasi: 90 Menit
Pimpinan Rapat: Direktur Utama

1. RINGKASAN EKSEKUTIF
Evaluasi kinerja Q3 mencatat pertumbuhan laba bersih 28% YoY. Disepakati alokasi capex IT sebesar Rp 2,4 Miliar untuk automasi proses kerja dan kepatuhan ISO 27001.

2. KEPUTUSAN KUNCI
- Pengesahan laporan keuangan interim Q3.
- Persetujuan belanja modal IT Rp 2,4 Miliar.
- Pembentukan Satuan Tugas Efisiensi Operasional.

3. ACTION ITEMS & PIC
- Dr. Hendrawan (Direktur Keuangan): Draft revisi RKAP (Deadline: 20 Nov 2026)
- Indah Permata (VP GRC): Vendor audit ISO 27001 (Deadline: 25 Nov 2026)
- Sekretariat Korporat: Distribusi salinan SK BOD (Deadline: 14 Nov 2026)`
  },

  client: {
    title: "Kickoff Meeting: Implementasi Sistem ERP Pro",
    meta: "Durasi: 60 Menit • Tim Internal & Tim Klien PT Nusantara Semesta",
    summary: "Kickoff implementasi modul inventory dan finance. Tim klien menyetujui timeline implementasi 12 minggu dengan milestone pertama migrasi master data per 30 November.",
    decisions: [
      "Ruang lingkup fase 1 mencakup modul Purchase Order, Gudang, dan General Ledger.",
      "Rapat koordinasi mingguan diadakan setiap hari Selasa pukul 10:00 WIB via Teams.",
      "Format template master data disepakati menggunakan standarisasi Excel v2.1."
    ],
    actionItems: [
      { task: "Kirim template master chart of accounts ke klien", pic: "Arya Wiguna", role: "Lead Consultant", deadline: "13 Nov 2026", status: "In Progress", statusColor: "emerald" },
      { task: "Penyediaan akses VPN & staging server klien", pic: "Faisal (Client IT)", role: "IT Manager Klien", deadline: "17 Nov 2026", status: "Waiting", statusColor: "blue" },
      { task: "Penandatanganan Berita Acara Kickoff", pic: "Project Manager", role: "PM Internal", deadline: "15 Nov 2026", status: "Pending", statusColor: "amber" }
    ],
    plainText: `MINUTES OF MEETING (MoM)
Topik: Kickoff Implementasi Sistem ERP Pro
Klien: PT Nusantara Semesta
Tanggal: 11 November 2026

1. RINGKASAN EKSEKUTIF
Kickoff berjalan lancar dengan kesepakatan timeline 12 minggu. Milestone pertama fokus pada pembersihan dan migrasi master data finance & inventory.

2. KEPUTUSAN KUNCI
- Scope fase 1 mencakup PO, Inventory, GL.
- Rutinitas weekly meeting tiap Selasa pk 10.00 WIB.
- Standar template master data disetujui.

3. ACTION ITEMS & PIC
- Arya Wiguna: Kirim template master CoA (Deadline: 13 Nov 2026)
- Faisal (Klien): Setup akun VPN staging (Deadline: 17 Nov 2026)
- Project Manager: Berita Acara Kickoff Meeting (Deadline: 15 Nov 2026)`
  },

  general: {
    title: "Townhall Bulanan & Sosialisasi Kebijakan Kerja Fleksibel",
    meta: "Durasi: 40 Menit • Seluruh Karyawan (145 Peserta) • Platform: Zoom Webinar",
    summary: "Penyampaian pencapaian target bulanan perusahaan serta peluncuran resmi kebijakan Flexible Working Arrangement (FWA) 3 hari WFO dan 2 hari WFA yang mulai berlaku 1 Desember.",
    decisions: [
      "Kebijakan Flexible Working Arrangement berlaku efektif mulai 1 Desember 2026.",
      "Tunjangan konektivitas internet bulanan disesuaikan untuk seluruh karyawan aktif.",
      "Sistem presensi online wajib diisi sebelum pukul 09:00 WIB di hari WFA."
    ],
    actionItems: [
      { task: "Rilis buku panduan operasional FWA ke portal HR", pic: "Dewi Lestari", role: "Head of People", deadline: "18 Nov 2026", status: "In Progress", statusColor: "emerald" },
      { task: "Konfigurasi sistem presensi geo-tagging di HRIS", pic: "Tim HRIS", role: "HR Tech", deadline: "22 Nov 2026", status: "Pending", statusColor: "amber" },
      { task: "FAQ sosialisasi dan sesi Q&A susulan via Slack", pic: "Internal Comm", role: "Corporate Comm", deadline: "15 Nov 2026", status: "Ready", statusColor: "blue" }
    ],
    plainText: `MINUTES OF MEETING (MoM)
Topik: Townhall Bulanan & Sosialisasi Kebijakan FWA
Peserta: Seluruh Karyawan (145 Orang)
Tanggal: 11 November 2026

1. RINGKASAN EKSEKUTIF
Manajemen mengumumkan kebijakan Flexible Working Arrangement (3 WFO / 2 WFA) mulai Desember 2026 dengan dukungan tunjangan konektivitas internet baru.

2. KEPUTUSAN KUNCI
- Pelaksanaan FWA mulai 1 Desember 2026.
- Penyesuaian tunjangan kuota internet.
- Kebijakan check-in digital maksimal 09:00 WIB.

3. ACTION ITEMS & PIC
- Dewi Lestari: Rilis guidebook HR (Deadline: 18 Nov 2026)
- Tim HRIS: Setting lokasi presensi mobile (Deadline: 22 Nov 2026)
- Internal Comm: Broadcast FAQ di Slack #announcement (Deadline: 15 Nov 2026)`
  }
};

let currentPresetKey = 'sprint';

// Render MoM Preset with Dark Theme Styling
function renderPreset(key) {
  currentPresetKey = key;
  const data = momPresets[key];
  if (!data) return;

  document.getElementById('demo-title').textContent = data.title;
  document.getElementById('demo-meta').textContent = data.meta;

  const contentContainer = document.getElementById('preset-content');
  
  let actionItemsRows = data.actionItems.map(item => `
    <tr class="hover:bg-slate-800/60 transition-colors">
      <td class="py-2.5 px-3 font-semibold text-white">${item.task}</td>
      <td class="py-2.5 px-3">
        <div class="font-medium text-slate-200">${item.pic}</div>
        <div class="text-[10px] text-slate-400">${item.role}</div>
      </td>
      <td class="py-2.5 px-3 text-slate-400 font-mono text-[11px]">${item.deadline}</td>
      <td class="py-2.5 px-3">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-${item.statusColor}-500/20 text-${item.statusColor}-300 border border-${item.statusColor}-500/30">
          ${item.status}
        </span>
      </td>
    </tr>
  `).join('');

  let decisionsList = data.decisions.map(item => `
    <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
      <div class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</div>
      <span>${item}</span>
    </li>
  `).join('');

  contentContainer.innerHTML = `
    <!-- Executive Summary Box -->
    <div class="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
      <h5 class="font-bold text-brand-300 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
        <i data-lucide="sparkles" class="w-4 h-4 text-brand-400"></i> Ringkasan Eksekutif (AI Generated)
      </h5>
      <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">${data.summary}</p>
    </div>

    <!-- Key Decisions -->
    <div>
      <h5 class="font-bold text-slate-200 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <i data-lucide="check-circle" class="w-4 h-4 text-indigo-400"></i> Keputusan Resmi Rapat (Binding Decisions)
      </h5>
      <ul class="space-y-2">
        ${decisionsList}
      </ul>
    </div>

    <!-- Action Items Table -->
    <div>
      <div class="flex items-center justify-between mb-2">
        <h5 class="font-bold text-slate-200 text-xs uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="list-checks" class="w-4 h-4 text-amber-400"></i> Matriks Tindak Lanjut & Penanggung Jawab (PIC)
        </h5>
        <span class="text-[11px] text-slate-400">Sinkron ke WhatsApp & Jira</span>
      </div>
      <div class="overflow-x-auto border border-slate-700/80 rounded-xl">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-800/90 text-slate-400 font-bold uppercase text-[10px] border-b border-slate-700">
            <tr>
              <th class="py-2.5 px-3">Tugas / Action Item</th>
              <th class="py-2.5 px-3">PIC (Penanggung Jawab)</th>
              <th class="py-2.5 px-3">Target Selesai</th>
              <th class="py-2.5 px-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 bg-slate-900/60">
            ${actionItemsRows}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Refresh icons inside dynamic content
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Switch Preset Tab
function switchPreset(key) {
  const buttons = document.querySelectorAll('#preset-buttons .preset-btn');
  buttons.forEach(btn => {
    if (btn.dataset.preset === key) {
      btn.className = 'preset-btn active px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 bg-brand-600 text-white border-brand-500 shadow-md shadow-brand-600/30';
    } else {
      btn.className = 'preset-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800';
    }
  });

  renderPreset(key);
}

// Copy Preset to Clipboard
function copyCurrentPreset() {
  const data = momPresets[currentPresetKey];
  if (!data) return;

  navigator.clipboard.writeText(data.plainText).then(() => {
    showToast("Teks Minutes of Meeting (MoM) berhasil disalin!");
  }).catch(() => {
    showToast("Gagal menyalin teks.");
  });
}

// Copy Hero MoM
function copySampleMoM() {
  const heroText = `MINUTES OF MEETING (MoM) #MOM-2026-11-04
Topik: Sprint Planning Q3 & Launching Demo
Waktu: Rabu, 11 Nov 2026 • 14:00 - 15:00 WIB
Partisipan: Budi, Rina, Dimas, Amanda, dkk.

Ringkasan: Rapat menyepakati percepatan peluncuran web demo menjadi 20 November 2026. Alokasi resource tim backend difokuskan pada integrasi SSO & API proxy.

Keputusan:
- Migrasi penuh ke Coolify VPS internal (Domain *.connect.proxsis.com)
- Penambahan kapasitas storage cloud disetujui

Action Items:
1. Finalisasi Landing Page Statis - PIC: Budi Santoso (14 Nov 2026)
2. Uji Coba Sinkronisasi Notifikasi WA - PIC: Rina Amelia (16 Nov 2026)`;

  navigator.clipboard.writeText(heroText).then(() => {
    showToast("Contoh Notulensi berhasil disalin ke clipboard!");
  });
}

// Download Simulated PDF Document
function downloadSamplePDF() {
  const data = momPresets[currentPresetKey] || momPresets.sprint;
  const content = `=====================================================
          MINUTES OF MEETING (MoM) RESMI
=====================================================
Dokumen ID : MOM-NOTULA-${Date.now().toString().slice(-6)}
Judul      : ${data.title}
Detail     : ${data.meta}
Tanggal    : 11 November 2026
Status     : Resmi Disahkan (Digital Approved)

-----------------------------------------------------
1. RINGKASAN EKSEKUTIF
-----------------------------------------------------
${data.summary}

-----------------------------------------------------
2. KEPUTUSAN KUNCI (DECISIONS LOG)
-----------------------------------------------------
${data.decisions.map((d, i) => `${i + 1}. ${d}`).join('\n')}

-----------------------------------------------------
3. MATRIKS TINDAK LANJUT (ACTION ITEMS & PIC)
-----------------------------------------------------
${data.actionItems.map(item => `- [${item.status}] ${item.task} | PIC: ${item.pic} (${item.role}) | Batas: ${item.deadline}`).join('\n')}

=====================================================
Dihasilkan secara otomatis oleh platform NotulaMoM AI
Keabsahan Dokumen Terverifikasi Secara Digital
=====================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `MoM-${currentPresetKey.toUpperCase()}-2026-11-11.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Draft Notulensi MoM berhasil diunduh!");
}

// Toast Notification Helper
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}

// ==========================================
// ROI Calculator Logic
// ==========================================
const meetingsSlider = document.getElementById('meetings-slider');
const attendeesSlider = document.getElementById('attendees-slider');
const rateSlider = document.getElementById('rate-slider');

const meetingsVal = document.getElementById('meetings-val');
const attendeesVal = document.getElementById('attendees-val');
const rateVal = document.getElementById('rate-val');

const hoursSavedDisplay = document.getElementById('hours-saved');
const moneySavedDisplay = document.getElementById('money-saved');

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

function updateRoiCalculation() {
  if (!meetingsSlider || !attendeesSlider || !rateSlider) return;

  const meetings = parseInt(meetingsSlider.value, 10);
  const attendees = parseInt(attendeesSlider.value, 10);
  const hourlyRate = parseInt(rateSlider.value, 10);

  // Labels
  meetingsVal.textContent = `${meetings} Rapat / minggu`;
  attendeesVal.textContent = `${attendees} Orang`;
  rateVal.textContent = `${formatRupiah(hourlyRate)} / jam`;

  const monthlyMeetings = meetings * 4.3;
  const hoursSavedPerMonth = Math.round(monthlyMeetings * 1.4);
  const moneySavedPerMonth = hoursSavedPerMonth * hourlyRate;

  hoursSavedDisplay.textContent = `${hoursSavedPerMonth} Jam`;
  moneySavedDisplay.textContent = formatRupiah(moneySavedPerMonth);
}

if (meetingsSlider && attendeesSlider && rateSlider) {
  meetingsSlider.addEventListener('input', updateRoiCalculation);
  attendeesSlider.addEventListener('input', updateRoiCalculation);
  rateSlider.addEventListener('input', updateRoiCalculation);
  updateRoiCalculation();
}

// ==========================================
// Billing Cycle Toggle (Monthly vs Annual) - Dark
// ==========================================
const btnMonthly = document.getElementById('billing-monthly');
const btnAnnual = document.getElementById('billing-annual');
const pricePro = document.getElementById('price-pro');
const periodPro = document.getElementById('period-pro');

if (btnMonthly && btnAnnual && pricePro) {
  btnMonthly.addEventListener('click', () => {
    btnMonthly.className = 'px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-white shadow-sm';
    btnAnnual.className = 'px-4 py-2 rounded-lg text-xs font-bold transition-all text-slate-400 hover:text-white flex items-center gap-1.5';
    pricePro.textContent = 'Rp 199.000';
    periodPro.textContent = '/ user / bln';
  });

  btnAnnual.addEventListener('click', () => {
    btnAnnual.className = 'px-4 py-2 rounded-lg text-xs font-bold transition-all bg-slate-800 text-white shadow-sm flex items-center gap-1.5';
    btnMonthly.className = 'px-4 py-2 rounded-lg text-xs font-bold transition-all text-slate-400 hover:text-white';
    pricePro.textContent = 'Rp 159.000';
    periodPro.textContent = '/ user / bln (tagihan tahunan)';
  });
}

// ==========================================
// FAQ Accordion Toggle
// ==========================================
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('svg') || btn.querySelector('[data-lucide]');
  const isHidden = content.classList.contains('hidden');

  // Close all other FAQs in same accordion
  const allContents = document.querySelectorAll('#faq-accordion > div > div');
  const allIcons = document.querySelectorAll('#faq-accordion > div > button svg, #faq-accordion > div > button [data-lucide]');

  allContents.forEach(el => el.classList.add('hidden'));
  allIcons.forEach(ic => ic.classList.remove('rotate-180'));

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.classList.add('rotate-180');
  }
}

// ==========================================
// Demo Modal Handlers
// ==========================================
const demoModal = document.getElementById('demo-modal');
const modalContainer = document.getElementById('modal-container');
const modalTitle = document.getElementById('modal-title');
const demoForm = document.getElementById('demo-form');
const modalSuccess = document.getElementById('modal-success');

function openDemoModal(titleText = 'Coba Gratis NotulaMoM') {
  if (!demoModal || !modalContainer) return;

  if (modalTitle) modalTitle.textContent = titleText;
  if (demoForm) demoForm.classList.remove('hidden');
  if (modalSuccess) modalSuccess.classList.add('hidden');

  demoModal.classList.remove('hidden');
  setTimeout(() => {
    demoModal.classList.remove('opacity-0');
    modalContainer.classList.remove('scale-95');
    modalContainer.classList.add('scale-100');
  }, 10);
}

function closeDemoModal() {
  if (!demoModal || !modalContainer) return;

  demoModal.classList.add('opacity-0');
  modalContainer.classList.remove('scale-100');
  modalContainer.classList.add('scale-95');

  setTimeout(() => {
    demoModal.classList.add('hidden');
  }, 200);
}

// Close on outside click
if (demoModal) {
  demoModal.addEventListener('click', (e) => {
    if (e.target === demoModal) {
      closeDemoModal();
    }
  });
}

// Form Submission Simulation
function handleFormSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('submit-btn');
  const originalHtml = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Memproses Permintaan...</span>
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHtml;
    demoForm.classList.add('hidden');
    modalSuccess.classList.remove('hidden');
    if (window.lucide) {
      lucide.createIcons();
    }
  }, 1200);
}

// ==========================================
// Mobile Menu Navigation Toggle
// ==========================================
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  // Close mobile menu when clicking nav links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ==========================================
// Header Scroll Effect
// ==========================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg', 'shadow-black/50');
    } else {
      header.classList.remove('shadow-lg', 'shadow-black/50');
    }
  }
});

// ==========================================
// Initialize on DOM Ready
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderPreset('sprint');

  if (window.lucide) {
    lucide.createIcons();
  }
});
