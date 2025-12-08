const config = {
  logo: <span>📚 Wiki Gue</span>,
  project: {
    link: "https://github.com/ruspian/wiki-gue",
  },

  docsRepositoryBase: "https://github.com/ruspian/wiki-gue/blob/main",
  footer: {
    text: "Dibuat dengan ❤️ oleh Ruspian untuk documentasi yang bermanfaat dan mudah dipahami.",
  },
  // Supaya SEO bagus dan tab browser rapi
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Wiki Gue",
    };
  },
};

export default config;
