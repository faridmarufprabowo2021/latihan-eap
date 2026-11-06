# Ruang EAP — Platform Belajar & Simulasi UTS Bahasa Inggris Akademik

Aplikasi web interaktif khusus persiapan **Ujian Tengah Semester (UTS) English for Academic Purposes (EAP)** Program Studi **Teknik Informatika, Universitas Muhammadiyah Surakarta (UMS)**.

Aplikasi ini dibangun 100% berdasarkan dokumen kurikulum resmi, slide perkuliahan dosen, capaian pembelajaran (CLO / CPMK), peraturan ujian, serta bank soal pelatihan asli dosen (*READING Drilling ANS - Word*).

---

## 🎯 Komposisi & Bobot Nilai UTS Resmi (90 Menit / 100 Poin)

| Bagian | Domain Keterampilan | Nilai - Score | CPMK / CLO | Alat Tulis Ujian |
|:---:|:---|:---:|:---:|:---:|
| **1** | **Listening Comprehension** | **25 Poin** | **CLO 1** | Pensil 2B (LJK) |
| **2** | **Structure & Grammar** | **20 Poin** | **CLO 2** | Pensil 2B (LJK) |
| **3** | **Reading Comprehension** | **35 Poin** | **CLO 3** | Pensil 2B (LJK) |
| **4** | **Writing Paragraph Outline** | **20 Poin** | **CLO 4** | **WAJIB Pulpen** |
| **TOTAL** | **Keseluruhan UTS** | **100 Poin** | **CLO 1–4** | **Durasi: 90 Menit** |

---

## 📋 Pemetaan RPS Pertemuan 1 – 7 Khusus UTS

- **Pertemuan 1 (Listening):** *Identifying the main idea and paraphrasing the speakers' purpose*.
- **Pertemuan 2 (Listening):** *Extracting specific details and academic note-taking*.
- **Pertemuan 3 (Grammar):** *The basic parts of speech & Sentence Components (S-V-O-C-A)*.
- **Pertemuan 4 (Grammar):** *Simple, compound (coordinating conjunctions / FANBOYS), and complex sentences (subordinating conjunctions & punctuation rules)*.
- **Pertemuan 5 (Reading):** *Determining the main idea of a 300–500 word passage and outlining text structure*.
- **Pertemuan 6 (Reading):** *Elaborating topic sentences, detail information, pronoun references, and contextual clues*.
- **Pertemuan 7 (Writing):** *Constructing an outline of a short academic paragraph (Topic Sentence, Controlling Idea, Supporting Details, Transitions, Concluding Sentence)*.

---

## 💡 Fitur Utama Aplikasi

1. **Dashboard Kurikulum & Aturan UTS:**
   - Memetakan seluruh CLO, bobot persentase nilai akhir, dan peraturan mutlak ujian (Wajib bawa KTM, Kartu Ujian, Pensil 2B, Penghapus, dan Pulpen; hadir 30 menit sebelum ujian; keterlambatan 1 detik mendiskualifikasi).
2. **Modul Belajar Interaktif P1–P7:**
   - Ringkasan konsep mendalam, formula kalimat akademis, tabel aturan FANBOYS, panduan tanda koma kalimat kompleks, dan anatomi paragraf ilmiah.
3. **Arena Drilling Bank Soal Asli Dosen:**
   - Memuat seluruh teks bacaan asli dari dokumen pelatihan dosen (*READING Drilling ANS - Word*):
     - *Passage 1:* Formal Email Laura Collins (Internship Inquiry & Schedule)
     - *Passage 2:* Daily Nutrition Food Chart & Grain/Dairy Group
     - *Passage 3:* Telephone Directory Listings & Address Matching
     - *Passage 4:* Job Vacancy PT Citra Energy Development (Senior Secretary)
     - *Passage 5:* Email Invitation Gregor & Samia
     - *Passage 6:* Advertisement Jarvis Miracle Cleaner & Deluxe Home Cleaner
     - *Passage 7:* Airport Baggage Regulations (10kg limit & liquids rule)
     - *Passage 8:* Academic Tech News: MIT Autonomous Drones under Uncertainty
   - Dilengkapi sistem penilaian instan dan kunci pembahasan resmi dosen.
4. **Simulasi UTS 90 Menit (Full 100 Poin):**
   - Countdown timer 90:00 dengan indikator visual bahaya waktu.
   - Simulasi audio transcript realistis untuk Listening (25 pts).
   - Soal analisis gramatika & FANBOYS (20 pts).
   - Soal pemahaman teks bacaan (35 pts).
   - *Workspace Interactive Paragraph Outline* (20 pts) dengan rubric audit checklist otomatis.
   - Skor total 0–100, pemetaan nilai per CLO 1–4, predikat mutu (A/AB/B/C/D), dan review pembahasan lengkap.
5. **A4 Printable Cheat Sheet:**
   - Tampilan ramah cetak (`Ctrl + P`) dengan tata letak ringkas yang memuat seluruh intisari aturan ujian, tabel FANBOYS, rumus S-V-O-C-A, formula outline menulis, dan strategi membaca cepat.

---

## 🎨 Sistem Desain

- **Gaya Visual:** *Studio Paper Neo-Brutalist* (Warna palet warm paper, mustard, tomato, teal, dan blue dengan bayangan tegas brutalist).
- **Stabilitas Layout (Modern Web Standards):**
  - Bebas dari *Cumulative Layout Shift* (CLS).
  - Anti *horizontal overflow* di semua ukuran layar (responsif hingga lebar viewport 360px).
  - Penggunaan `scrollbar-gutter: stable;` dan pembungkus tabel aman `.rubrik-table-wrap`.
  - Desain mandiri (*zero external build tool / zero node dependency runtime*), langsung dapat dibuka melalui browser web.

---

## 🚀 Cara Menjalankan

Cukup buka berkas `index.html` langsung di peramban web pilihan Anda:
```bash
# Melalui PowerShell di Windows:
Start-Process "D:\latihan-eap\index.html"
```
Atau klik ganda berkas `D:\latihan-eap\index.html` di Windows File Explorer.

