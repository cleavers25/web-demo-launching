# NotulaMoM - AI Minutes of Meeting (MoM) Platform
> Landing page statis frontend modern untuk platform pembuatan Notulensi Rapat (Minutes of Meeting) otomatis berbasis Artificial Intelligence.

---

## 📋 Fitur Utama Landing Page

1. **Top Announcement & Navbar Sticky:**
   - Navigasi responsif dengan glassmorphism effect dan mobile drawer.
   - Shortcut ke bagian Fitur, Cara Kerja, Interactive Demo, Kalkulator ROI, Harga, dan FAQ.

2. **Hero Section dengan Interactive Mockup:**
   - Headline persuasif berorientasi hasil.
   - Simulasi UI Rapat Live: Merekam audio Google Meet, mendeteksi keputusan penting secara otomatis, dan menghasilkan format MoM terstruktur dalam hitungan detik.

3. **Komparasi Problem & Solution (Before vs After):**
   - Perbandingan jelas antara cara manual (notulis panik, lama, tugas terlupakan) vs NotulaMoM (otomatis, instan, PIC jelas).

4. **Katalog Fitur Enterprise:**
   - AI Smart Meeting Summarizer.
   - Auto PIC & Action Item Extractor (terintegrasi ke Jira/Trello/WA).
   - Multi-tier Approval & E-Signature resmi.
   - Dukungan Bilingual & Dialek Bisnis Indonesia.
   - Keamanan Enkripsi AES-256 & ISO 27001.
   - Semantic Search (Pusat Pengetahuan Rapat).

5. **Live Interactive MoM Demo:**
   - Pengunjung dapat memilih 4 preset jenis rapat:
     - 💻 *Weekly Engineering Sprint (IT / Tech)*
     - 👔 *Rapat Direksi (BOD / Management Confidential)*
     - 🤝 *Client Kickoff Meeting (Consulting)*
     - 📢 *Townhall / Sosialisasi Perusahaan*
   - Fitur **Salin Teks MoM** ke clipboard dengan notifikasi toast.
   - Fitur **Download Draft MoM (PDF/TXT)** langsung dari browser.

6. **Kalkulator Interaktif Penghematan (ROI Calculator):**
   - Slider interaktif: Jumlah rapat per minggu, jumlah peserta, dan standar biaya per jam.
   - Menghitung estimasi jam kerja yang dihemat dan efisiensi biaya per bulan secara real-time.

7. **Integrasi Ekosistem Kerja:**
   - Zoom, Google Meet, Microsoft Teams, WhatsApp, Jira/Trello, dan Notion/Slack.

8. **Paket Harga & Billing Toggle:**
   - Toggle Tagihan Bulanan vs Tahunan (Diskon 20%).
   - Paket: Starter (Gratis), Pro Team (Paling Populer), dan Enterprise.

9. **Accordion Tanya Jawab (FAQ):**
   - 5 pertanyaan paling sering ditanyakan dengan interaksi akordeon mulus.

10. **Interactive Registration & Demo Modal:**
    - Modal formulir pendaftaran uji coba gratis 14 hari dengan validasi input dan animasi konfirmasi sukses.

---

## 📁 Struktur File

```
.
├── index.html               # File utama HTML5 semantic + Tailwind CSS
├── app.js                   # Logika interaktif Vanilla JS (Demo Switcher, ROI Calc, Modal, FAQ)
├── AI_DEPLOYMENT_CONFIG.md  # Panduan deployment otomatis Coolify & Wildcard Proxy
└── README.md                # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Secara Lokal

Cukup buka file `index.html` langsung di browser favorit Anda, atau jalankan web server lokal ringan:

### Menggunakan Python 3:
```bash
python3 -m http.server 8080
```
Buka browser di: `http://localhost:8080`

### Menggunakan Node.js / npx:
```bash
npx serve .
```

---

## 🌐 Teknologi yang Digunakan
- **HTML5 Semantic & SEO Ready**
- **Tailwind CSS v3 (CDN)**: Desain responsif, clean, modern typography
- **Lucide Icons**: Ikon vektor modern
- **Google Fonts (Plus Jakarta Sans)**
- **Vanilla JavaScript**: Tanpa dependensi framework yang berat, cepat, dan ringan
