# Cuan Tracker 🤤

[![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

WebApp *full-stack* sederhana untuk mencatat dan memvisualisasikan pengeluaran pribadi.
---
## ✨ Fitur Utama

* ✅ **Input Transaksi:** Tambah catatan pengeluaran baru dengan nama, jumlah, kategori, dan tanggal.
* 🔄 **Manipulasi Data:** Edit dan hapus transaksi yang sudah ada dengan mudah.
* 📊 **Visualisasi Data:** Lihat rincian pengeluaran berdasarkan kategori dalam bentuk grafik donat yang interaktif.
* 🗂️ **Riwayat Transaksi:** Semua transaksi ditampilkan dalam tabel yang rapi dan mudah dibaca.
* 🚀 **Arsitektur Modern:** Aplikasi 2-layer dengan Backend (API) dan Frontend.

---
## 🛠️ Teknologi yang Digunakan

### Frontend
* **Framework:** [React.js](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Charting:** [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)

### Backend & Database
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Database:** [PostgreSQL](https://www.postgresql.org/)
* **Middleware:** [CORS](https://expressjs.com/en/resources/middleware/cors.html)

---
## 🚀 Instalasi dan Cara Menjalankan

### Prasyarat
* [Node.js](https://nodejs.org/en/) (v18 atau lebih baru)
* [PostgreSQL](https://www.postgresql.org/download/) terinstal dan berjalan.

### Langkah-langkah
1.  **Clone repository ini:**
    ```bash
    git clone https://URL_REPOSITORY_ANDA.git
    cd nama-folder-proyek
    ```

2.  **Setup Backend:**
    * Masuk ke direktori `backend`.
        ```bash
        cd backend
        ```
    * Buat file `.env` dan isi dengan baris berikut:
        ```env
        DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/NAMA_DATABASE?schema=public"
        ```
        > Ganti `USERNAME`, `PASSWORD`, dan `NAMA_DATABASE` sesuai konfigurasi PostgreSQL Anda.
    * Instal dependensi dan jalankan migrasi database.
        ```bash
        npm install
        npx prisma migrate dev
        ```
    * Jalankan server backend.
        ```bash
        npm start
        ```
    * ✨ Server backend akan berjalan di `http://localhost:5000`.

3.  **Setup Frontend:**
    * Buka terminal **baru**, lalu masuk ke direktori `frontend`.
        ```bash
        cd frontend
        ```
    * Instal dependensi.
        ```bash
        npm install
        ```
    * Jalankan aplikasi frontend.
        ```bash
        npm run dev
        ```
    * ✨ Aplikasi frontend akan berjalan di `http://localhost:5173` (atau port lain yang ditampilkan).

---
## 🔌 Struktur API Endpoints

| Method | Endpoint                    | Deskripsi                             |
| :----- | :-------------------------- | :------------------------------------ |
| `GET`  | `/api/transactions`         | Mendapatkan semua data transaksi.     |
| `POST` | `/api/transactions`         | Membuat sebuah transaksi baru.        |
| `PUT`  | `/api/transactions/:id`     | Memperbarui transaksi berdasarkan ID. |
| `DELETE`| `/api/transactions/:id`    | Menghapus transaksi berdasarkan ID.   |

---
## 📄 Documented by Me, I Putu Mahendra Putra
## 📄 Assisted by Artificial Intelegence 😏





