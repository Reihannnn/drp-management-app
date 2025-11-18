# Gym Management App – Electron.js

Aplikasi desktop untuk manajemen gym yang mendukung:

- CRUD **Member**
- CRUD **Membership**
- Pencatatan **Income**
- Penyimpanan data menggunakan **SQLite3**
- Antarmuka HTML + **Tailwind CSS (CLI)**
- Dibangun menggunakan **Electron.js**

---

## 📂 Project Structure

.. code-block:: text

    DRPGYMAPP/
    ├── backend/                           # Logika backend & database
    │   └── database/
    │       └── db.js                      # Koneksi & inisialisasi SQLite3
    │
    ├── node_modules/                      # Folder hasil `npm install` (auto generated)
    │
    ├── public/                            # File yang bisa diakses langsung (Aset publik)
    │   └── assets/
    │       ├── image/                     # Gambar, ilustrasi, foto
    │       └── icon/                      # Icon aplikasi
    │
    ├── src/
    │   ├── components/                    # UI Reusable components
    │   │   └── sidebar.html               # Sidebar utama (dipakai di semua halaman)
    │   │
    │   ├── css/
    │   │   └── style.css                  # Hasil build TailwindCSS
    │   │
    │   ├── script/                        # Business Logic (Frontend)
    │   │   ├── member.js                  # CRUD Member
    │   │   ├── membership.js              # CRUD Membership / perpanjangan
    │   │   └── income.js                  # Pencatatan pemasukan (Income)
    │   │
    │   └── views/                         # Tampilan UI (Frontend HTML)
    │       ├── dashboard.html             # Halaman dashboard utama
    │       ├── income.html                # Halaman input & list pemasukan
    │       ├── member.html                # Halaman CRUD Member
    │       └── membership.html            # Halaman manajemen membership
    │
    ├── drp-gym-management.db              # Database SQLite3
    │
    ├── index.html                         # Root HTML aplikasi Electron
    ├── main.js                            # Entry point Electron (process utama)
    ├── preload.js                         # Bridge IPC antara frontend dan backend
    ├── router.js                          # Router simple untuk load halaman HTML
    ├── package.json                       # Metadata project + dependencies
    └── README.md                          # Dokumentasi project



## 🛠️ Tech Stack

| Teknologi | Keterangan |
|----------|------------|
| **Electron.js** | Aplikasi desktop berbasis web |
| **JavaScript** | Bahasa pemrograman utama |
| **HTML + Tailwind CSS (CLI)** | UI/Frontend |
| **SQLite3** | Database lokal ringan |
| **IPC Electron** | Komunikasi antara frontend & backend |

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
git clone <repository_url>

### 2️⃣ Install Dependencies and node module 
1. npm install <package>
2. npm install

### 3️⃣ Build Tailwind (Mode Dev)
npx tailwindcss -i ./src/css/input.css -o ./src/css/style.css --watch

### 4️⃣ Jalankan Aplikasi Electron
npm start 


