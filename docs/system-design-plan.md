# Rancangan Arsitektur Sistem (System Design)
# LWU Learning Management System (LMS)

Dokumen ini memaparkan rancangan arsitektur sistem secara menyeluruh (End-to-End) dari level database hingga frontend. Rancangan ini disusun berdasarkan pemahaman dan kapabilitas teknis saat ini, dengan fokus pada performa, skalabilitas, dan efisiensi pengembangan.

## 1. Lapisan Aplikasi (Frontend & Backend Terpadu)
Aplikasi dibangun menggunakan pendekatan arsitektur terpadu (monolith modern) yang berpusat pada framework Next.js.

- Framework: Next.js (App Router).
- Render Strategy: Menggunakan Server-Side Rendering (SSR) dan React Server Components (RSC). SSR memastikan data selalu mutakhir saat halaman dimuat dan sangat optimal untuk SEO serta metrik Core Web Vitals.
- Data Mutation: Pembaruan data (seperti menambah transaksi, mengubah progres kursus, atau memperbarui profil) tidak lagi mengandalkan endpoint REST API tradisional. Alih-alih, sistem akan menggunakan React Server Actions. Ini memungkinkan eksekusi logika server dan kueri database secara langsung dari interaksi antarmuka di sisi klien, dengan keamanan tipe (type-safety) yang terjamin dan kompleksitas jaringan yang minim.

## 2. Lapisan Database (Relational & Teroptimasi)
Sistem manajemen pembelajaran (LMS) memiliki entitas data yang sangat terstruktur dan saling berelasi (seperti relasi antara Pengguna, Kursus, dan Riwayat Pembelian). Oleh karena itu, database relasional adalah pilihan mutlak.

- Database Engine: PostgreSQL.
- Koneksi & Pooling: Untuk mencegah masalah habisnya koneksi database (connection exhaustion) akibat arsitektur serverless Next.js, sistem menggunakan mekanisme Singleton Global Connection Pooling. Klien ORM (seperti Prisma atau Drizzle) akan diinisialisasi sebagai singleton di tahap development, dan memanfaatkan connection pooler (seperti PgBouncer) di tahap produksi.
- Performa & Pengambilan Data: 
  - Indexing: Menerapkan penambahan indeks pada kolom yang sering dijadikan parameter pencarian atau filter (contoh: indeks pada `user_id` di tabel Transaksi atau `category` di tabel Kursus) untuk mempercepat pencarian data.
  - Eager Loading: Menghindari anomali N+1 query dengan mengimplementasikan Eager Loading saat mengambil data berelasi. Sistem akan menarik data Kursus beserta data Relasi Instruktur secara bersamaan dalam satu kueri join di tingkat database.
  - Query Optimization: Melakukan pemilihan kolom (select) secara spesifik hanya pada atribut data yang dibutuhkan oleh frontend (menghindari pengambilan data secara utuh atau SELECT *), sehingga ukuran transfer data (payload) menurun secara drastis.

## 3. Mekanisme Otentikasi (Authentication)
Keamanan akses platform akan dikelola secara stateless, yang sangat cocok dengan lingkungan serverless.

- Standar Keamanan: JSON Web Tokens (JWT).
- Implementasi: Saat pengguna berhasil melakukan autentikasi, token JWT akan diterbitkan dan disimpan secara aman di dalam HttpOnly Cookies. Mekanisme HttpOnly ini melindungi sesi dari serangan pencurian token via skrip klien (XSS). Token ini kemudian akan divalidasi pada setiap eksekusi Server Actions dan transisi halaman oleh middleware server.

## 4. Lapisan Caching (Performa Resolusi Data)
Untuk meringankan beban komputasi database dan meminimalisir waktu tunggu (latency) bagi pengguna, sistem menerapkan strategi caching.

- Server-side Caching: Memanfaatkan Next.js Data Cache bawaan. Data publik yang relatif statis, seperti daftar katalog kursus atau spesifikasi ebook, akan di-cache di tingkat server. Data ini di-revalidate berdasarkan interval waktu tertentu (Time-based Revalidation) atau saat pemicu spesifik terjadi (On-demand Revalidation).
- Client-side Caching: Untuk interaksi di sisi klien yang membutuhkan sinkronisasi data yang cepat dan manajemen status yang kompleks, sistem dapat diintegrasikan dengan React Query. Library ini menangani caching sisi klien dengan sangat baik, menyediakan fitur seperti eksekusi stale-while-revalidate, sinkronisasi ulang saat tab browser kembali difokuskan, serta pemusatan permintaan data yang identik (request deduplication).

## Ringkasan Arsitektur
Arsitektur di atas mengeliminasi batas tradisional antara lapisan frontend dan backend dengan menyatukannya ke dalam satu alur kerja framework, namun tetap sangat tangguh dalam menangani beban operasional melalui optimasi database PostgreSQL tingkat lanjut dan manajemen caching berlapis. Struktur ini menyeimbangkan kecepatan pengembangan dengan kualitas rekayasa perangkat lunak skala produksi.
