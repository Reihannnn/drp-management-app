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

GYMAPPMANAGEMENT/
├── backend/
│   └── database/
│       └── db.js
│
├── node_modules/                # hasil npm install
│
├── public/                      # folder untuk asset publik
│   └── assets/
│       ├── image/               # gambar / icon
│       └── icon/
│
├── src/
│   ├── components/              # UI reusable component
│   │   └── sidebar.html
│   │
│   ├── css/
│   │   └── style.css            # hasil build Tailwind
│   │
│   ├── script/                  # logic aplikasi
│   │   ├── member.js
│   │   ├── membership.js
│   │   └── income.js
│   │
│   └── views/                   # UI tampilan halaman
│       ├── dashboard.html
│       ├── income.html
│       ├── member.html
│       └── membership.html
│
├── drp-gym-management.db        # file database SQLite
│
├── index.html
├── main.js                      # entry Electron
├── preload.js                   # IPC bridge
├── router.js                    # router halaman
├── package.json
└── README.md


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


