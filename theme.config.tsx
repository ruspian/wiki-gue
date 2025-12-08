const config = {
  logo: <span>📚 Wiki Belajar Gue</span>,
  project: {
    link: "https://github.com/username-lo/wiki-gue", // Ganti link repo lo
  },
  chat: {
    link: "https://discord.com", // Opsional, bisa dihapus
  },
  docsRepositoryBase: "https://github.com/username-lo/wiki-gue/blob/main",
  footer: {
    text: "Dibuat sambil belajar TypeScript & Next.js",
  },
  // Supaya SEO bagus dan tab browser rapi
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Wiki Gue",
    };
  },
};

export default config;
