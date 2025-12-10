const config = {
  logo: <span>📚 Wiki Gue</span>,
  project: {
    link: "https://github.com/ruspian/wiki-gue",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Level 1 (Menu Utama) doang yang muncul. Anak-anaknya ngumpet.
    autoCollapse: true, //  otomatis nutup kalo buka menu lain.
    toggleButton: true, // tambahin tombol buat buka/tutup semua sekaligus di bawah.
  },

  docsRepositoryBase: "https://github.com/ruspian/wiki-gue/blob/main",
  footer: {
    text: "Dibuat dengan ❤️ oleh Ruspian semoga bermanfaat.",
  },
  // Supaya SEO bagus dan tab browser rapi
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Wiki Gue",
    };
  },
};

export default config;
