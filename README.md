
# ASI Edu — Website Edukasi ASI (PWA, hosting gratis)

## 1) Edit konfigurasi
- Buka `assets/js/main.js`
- Ganti:
  - `PRETEST_URL` dengan link Google Form pretest
  - `POSTTEST_URL` dengan link Google Form posttest
  - `WA_NUMBER` dengan nomor konselor (format internasional tanpa `+`, contoh: 62812xxxx)

## 2) Deploy gratis (pilih salah satu)
### Opsi A — Vercel
1. Buat akun di vercel.com (gratis).
2. `New Project` → **Import** dari GitHub atau **Deploy** dengan drag-and-drop folder ini (Static).
3. Setelah deploy, dapatkan URL (contoh: https://asi-edu.vercel.app).

### Opsi B — Netlify
1. Buat akun di app.netlify.com (gratis).
2. `Add new site` → **Deploy manually** → drag-and-drop folder ini ke dropzone.
3. Dapatkan URL (contoh: https://asi-edu.netlify.app).

### Opsi C — Firebase Hosting
1. Install Node.js & Firebase CLI (opsional).
2. `firebase deploy` pada folder ini (butuh setup awal).

## 3) Buat QR Code
- Gunakan generator QR gratis (contoh: qr-code-generator.com) → arahkan ke URL situs Anda.
- Cetak QR dan tempel di ruang KIA/ruang laktasi.

## 4) Testing
- Buka situs di HP Android → `Add to Home screen` → uji offline mode (aktif karena PWA).
- Coba tautan Pretest/Posttest.
- Isi kuis → skor tersimpan lokal.

## 5) Privasi & Etika
- Data hanya dikumpulkan lewat Google Forms Anda.
- Sertakan informed consent pada pretest/posttest.

## 6) Kustomisasi
- Edit konten modul di `/modules/*.html`.
- Ubah warna di `assets/css/style.css`.
- Ganti ikon di `/img`.

Selesai! 🎉
