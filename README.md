# Simulator Kredit Mobil (PWA)

Simulator kredit konvensional, hybrid, Mini For Max (8 tahun), dan EV. Bisa dipasang di HP lewat Chrome dan tetap jalan tanpa internet.

## Isi paket (11 file, semuanya di satu tingkat, tanpa folder)
```
index.html              aplikasi
manifest.json           data instalasi (nama, ikon, warna)
sw.js                   service worker (mode offline)
cek.html                halaman pengecekan instalasi
icon-192.png  icon-512.png  icon-maskable-512.png
apple-touch-icon.png  favicon-32.png  favicon.svg    (ikon mobil sport)
README.md               panduan ini
```

## 1. Upload ke GitHub
1. Buka github.com, login, lalu **New repository**. Beri nama, misalnya `simulator-kredit`, pilih **Public**, klik **Create repository**.
2. Klik **uploading an existing file**, lalu pilih atau seret **ke-11 file** sekaligus. Tidak ada folder, jadi bisa diunggah dari HP maupun komputer. Jangan unggah file `.zip`-nya, karena GitHub tidak membukanya. Pastikan semua file tampil di halaman utama repository.
3. Klik **Commit changes**.

## 2. Aktifkan GitHub Pages
1. Di repository, buka **Settings > Pages**.
2. Pada **Source**, pilih **Deploy from a branch**. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
3. Tunggu 1-2 menit. Alamat aplikasi muncul di halaman yang sama:
   `https://USERNAME.github.io/simulator-kredit/`

## 3. Pasang di HP (Chrome Android)
1. Buka alamat di atas di **Chrome**.
2. Ketuk tombol **Pasang** di pojok kanan atas aplikasi, atau menu Chrome (titik tiga) lalu **Instal aplikasi** / **Tambahkan ke layar utama**.
3. Ikon mobil sport muncul di layar utama. Buka dari sana dan aplikasi tampil layar penuh.

## Catatan penting
- **Data tersimpan di HP itu sendiri.** Riwayat hitungan dan perubahan di tab Database (bunga, admin, dan lainnya) disimpan di browser perangkat. Tidak otomatis tersinkron antar HP dan hilang kalau Anda menghapus data situs Chrome.
- Kalau ingin database bersama untuk satu tim, itu perlu server atau layanan penyimpanan tambahan.
- **Memperbarui aplikasi:** ganti `index.html` di GitHub, lalu naikkan angka versi di `sw.js` (`sim-kredit-v2` menjadi `sim-kredit-v3`, dan seterusnya). Tutup dan buka lagi aplikasi di HP, dan versi baru dipakai.
- Tarif (bunga, admin, asuransi, dan lainnya) mengikuti Excel Juni 2026. Cek ulang kalau memo tarif berubah.

## Jika tidak bisa dipasang
Gejala umum: tombol **Pasang** tidak muncul, atau muncul pesan **"Tidak dapat membuka aplikasi"**. Artinya Chrome menganggap aplikasi sudah terpasang atau ada sisa pemasangan lama yang rusak.

1. **Copot sisa pemasangan lama.** Buka Pengaturan HP, lalu Aplikasi, cari "Sim Kredit" atau "Simulator Kredit Mobil", lalu Copot/Uninstall kalau ada. Hapus juga ikon pintasan lamanya dari layar utama.
2. **Bersihkan data situs.** Di Chrome: menu titik tiga, Setelan, Setelan situs, Semua situs, pilih `NAMA.github.io`, lalu **Hapus data & setel ulang izin**. (Riwayat dan pengaturan Database di HP itu ikut terhapus.)
3. **Pastikan file terbaru sudah di GitHub:** semua 11 file di atas (cek di halaman utama repository bahwa ikon `icon-192.png` dan `icon-512.png` ada). Hapus `manifest.webmanifest` lama kalau masih ada. Tunggu 1-2 menit sampai Pages selesai.
4. Buka `https://USERNAME.github.io/NAMA-REPO/` di Chrome, tunggu sekitar 10 detik, lalu menu titik tiga dan pilih **Instal aplikasi**. Jangan pilih "Tambahkan ke layar utama" karena itu hanya pintasan.
5. Masih gagal? Buka `https://USERNAME.github.io/NAMA-REPO/cek.html`. Halaman itu mengecek HTTPS, manifest, ikon, dan service worker satu per satu. Kirim tangkapan layarnya.
