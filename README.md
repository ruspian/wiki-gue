# 📚 Wiki Belajar (Web Development)

> **"Ikatlah ilmu dengan menuliskannya."**

Ini adalah **Knowledge Base** pribadi (Otak Kedua) saya yang berisi dokumentasi perjalanan belajar Modern Web Development. Dibangun untuk menyimpan pemahaman, _best practices_, dan solusi teknis agar tidak hilang ditelan lupa.

![Project Preview](/public/preview.png)

## 🛠️ Tech Stack

Project ini dibangun menggunakan teknologi modern untuk performa statis yang cepat dan pengalaman menulis yang nyaman:

- **Framework:** [Next.js 14](https://nextjs.org/) (React Framework)
- **Documentation Engine:** [Nextra](https://nextra.site/) (Theme Docs)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Deployment:** Vercel

## 🚀 Fitur Utama

- **MDX Support:** Menulis konten menggunakan Markdown + Komponen React.
- **Full Text Search:** Pencarian instan bawaan Nextra.
- **Dark Mode:** Otomatis mengikuti preferensi sistem.
- **Responsive:** Nyaman dibaca di HP maupun Laptop.
- **Syntax Highlighting:** Kode warna-warni otomatis untuk JS/TS.

## 🏃‍♂️ Cara Menjalankan (Local)

Pastikan Node.js sudah terinstall.

1.  **Clone repository ini:**

    ```bash
    git clone https://github.com/ruspian/wiki-gue.git
    cd wiki-gue
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan server development:**

    ```bash
    npm run dev
    ```

4.  Buka browser dan akses `http://localhost:3000`.

## 📂 Struktur Project

Hanya fokus pada folder `pages` untuk manajemen konten:

```text
wiki-gue/
├── pages/
│   ├── javascript/      # Materi JavaScript
│   ├── typescript/      # Materi TypeScript
│   ├── _meta.json       # Konfigurasi Sidebar Menu
│   └── index.mdx        # Halaman Utama
├── public/              # Aset Gambar Statis
├── theme.config.tsx     # Konfigurasi Tampilan Nextra
└── next.config.js       # Konfigurasi Next.js
```

## 📝 Cara Menambah Konten

1. Buat file `.mdx` baru di dalam folder `pages/`.

2. Tambahkan entry di file `_meta.json` agar muncul di sidebar dengan nama yang rapi.

3. Gunakan komponen React seperti `<Callout>` untuk highlight penting.

```json
// Contoh _meta.json
{
  "intro": "Pengenalan",
  "basic-types": "Tipe Data Dasar"
}
```

## 🤝 Kontribusi

Repositori ini utamanya untuk dokumentasi pribadi. Namun, jika Anda menemukan kesalahan penulisan atau kode, silakan buat Issue atau Pull Request.

---

Dibuat dengan ❤️ oleh Ruspian semoga bermanfaat.
