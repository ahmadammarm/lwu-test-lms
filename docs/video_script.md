# 🎥 Skrip Video Presentasi LMS Dashboard (Maks. 6 Menit)

Berikut adalah panduan komprehensif untuk merekam video presentasi Anda. Skrip ini dibagi menjadi beberapa segmen waktu agar Anda dapat menjaga durasi tetap di bawah 6 menit. 

Anda dapat membaca skrip ini sambil melakukan *screen record* (merekam layar) yang menampilkan kode di VS Code dan hasil website di browser.

---

## 🕒 Segmen 1: Pembukaan & Pengenalan (0:00 - 0:45)
**Visual di layar:** Halaman utama (Dashboard) dari LMS yang sudah berjalan di browser.

**Audio / Suara Anda:**
> "Halo semuanya, perkenalkan saya [Nama Anda]. Pada kesempatan kali ini, saya akan mempresentasikan hasil pengerjaan *take-home test* untuk posisi Web Developer Intern di Learning With Us. 
> 
> Tujuan dari proyek ini adalah membangun *Student Dashboard* untuk sebuah Learning Management System (LMS). Fokus utama saya dalam pengerjaan ini adalah menciptakan UI/UX yang *clean*, modern, dan *SaaS-ready*, sekaligus memastikan struktur *codebase* yang rapi dan mudah di-*maintain*."

---

## 🕒 Segmen 2: Demo Fitur & UI/UX (0:45 - 2:00)
**Visual di layar:** Navigasi melalui aplikasi di browser. Klik menu Sidebar, buka halaman *Courses*, *Ebooks*, dan *Purchase History*. Tampilkan juga interaksi *hover* dan *dropdown*.

**Audio / Suara Anda:**
> "Pertama, mari kita lihat *interface*-nya. Saya mengusung tema warna *Navy Blue* agar terlihat profesional namun tetap ramah untuk platform edukasi. 
> 
> * Di halaman **Dashboard**, saya mengimplementasikan *summary cards* untuk memberikan ringkasan cepat kepada *student* mengenai progres belajar mereka.
> * Di halaman **Courses dan Ebooks**, saya menggunakan *grid layout* yang responsif. Saya juga sudah membuat halaman detail dinamis untuk masing-masing item, lengkap dengan *breadcrumbs* untuk kemudahan navigasi.
> * Di halaman **Purchase History**, saya menambahkan fitur pencarian (search) dan paginasi (pagination) secara *client-side* agar UX-nya terasa sangat cepat dan tidak perlu *reload* halaman.
> 
> Selain itu, saya menggunakan komponen dari **Shadcn UI** untuk elemen seperti *Sidebar*, *Dropdown Profile*, dan modal *Logout Alert Dialog* untuk memastikan aksesibilitas (a11y) yang baik."

---

## 🕒 Segmen 3: Penjelasan Struktur Kode & Teknologi (2:00 - 4:00)
**Visual di layar:** Beralih ke layar VS Code (Code Editor). Tunjukkan struktur folder `/app`, `/components`, dan file krusial seperti `Header.tsx`, `AppSidebar.tsx`, dan `layout.tsx`.

**Audio / Suara Anda:**
> "Dari sisi teknis, proyek ini dibangun menggunakan **Next.js App Router** dengan **TypeScript** dan **Tailwind CSS**. 
> 
> * Struktur folder sangat modular. Semua halaman bersarang di dalam `/app/dashboard/` yang dibungkus oleh `layout.tsx` sentral. Di dalam `layout.tsx` ini, saya memanggil komponen `AppSidebar` dan `Header`, sehingga komponen navigasi tidak perlu di-*render* ulang setiap kali pindah halaman (memaksimalkan performa *routing* Next.js).
> * Untuk *styling*, saya sangat meminimalisir CSS kustom dan 100% memaksimalkan *utility classes* dari Tailwind. Hal ini membuat kolaborasi lebih mudah karena standar *styling* sudah terikat pada *framework*.
> * Saya juga sangat memperhatikan *best practices* dalam penulisan HTML di React. Contohnya, memastikan komponen `Link` dari Next.js digunakan dengan benar di dalam tombol atau menu agar tidak terjadi *hydration error* dan *routing* berjalan secara SPA (Single Page Application)."

---

## 🕒 Segmen 4: Pendapat & Rancangan System Design (4:00 - 5:30)
**Visual di layar:** Tampilkan gambar diagram arsitektur sederhana (jika ada) ATAU buka file `README.md` pada bagian "Proposed Backend Architecture".

**Audio / Suara Anda:**
> "Sebagai penutup, sesuai dengan instruksi, saya ingin menyampaikan pendapat dan rancangan saya mengenai *System Design* jika proyek ini dilanjutkan ke tahap *Full-stack* secara *end-to-end*. Dengan *skill* yang saya miliki saat ini, ini adalah pendekatan yang akan saya gunakan:
> 
> 1. **Database Layer:** Saya akan memilih **PostgreSQL** karena LMS sangat bergantung pada relasi data yang kuat (contoh: *User* memiliki *Course*, *Course* memiliki *Modules* dan *Transactions*). Untuk mempermudah manajemen skema dan migrasi, saya akan menggunakan ORM seperti **Prisma** atau **Drizzle**.
> 2. **Backend / API Layer:** Karena kita sudah menggunakan **Next.js**, saya tidak akan membuat *server* Express terpisah. Saya akan memaksimalkan fitur **React Server Components (RSC)** dan **Server Actions** dari Next.js. Hal ini memungkinkan pengambilan data (*data fetching*) yang aman secara langsung di server tanpa perlu membuat endpoint *REST API* manual. Ini jauh lebih cepat, hemat *cost* infrastruktur, dan sangat *developer-friendly*.
> 3. **Frontend Layer:** Frontend akan bertindak mengkonsumsi data dari *Server Components* tersebut.
> 4. **Authentication & Deployment:** Untuk keamanan *login*, saya akan menggunakan **NextAuth (Auth.js)** yang terintegrasi dengan *database*. Keseluruhan aplikasi ini kemudian akan di-*deploy* di **Vercel** atau platform serverless serupa untuk kemudahan *scaling*."

---

## 🕒 Segmen 5: Penutup (5:30 - 6:00)
**Visual di layar:** Kembali ke tampilan layar aplikasi LMS atau kamera *webcam* Anda.

**Audio / Suara Anda:**
> "Pendekatan arsitektur ini menurut saya sangat ideal, efisien, dan modern. Tidak *over-engineered* seperti *microservices*, namun sangat tangguh untuk skala operasional edukasi digital.
> 
> Sekian penjelasan dari saya mengenai proyek *Student Dashboard LMS* ini. Kode sumber lengkap dapat diakses melalui repositori GitHub yang telah saya lampirkan. Terima kasih atas waktu dan kesempatan yang diberikan!"

---

## 💡 Tips Ekstra Saat Rekaman:
- Lakukan **latihan bicara (rehearsal)** 1-2 kali menggunakan stopwatch sebelum benar-benar merekam.
- Pastikan resolusi layar *screen record* minimal 1080p agar teks kode di VS Code dapat terbaca jelas oleh *reviewer*.
- **Jangan terburu-buru.** Jika durasi dirasa kurang dari 6 menit, itu tidak masalah! Lebih baik singkat dan jelas (misal 4-5 menit) daripada terlalu panjang dan membosankan.
