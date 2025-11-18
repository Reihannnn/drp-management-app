// router.js
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("#content");

  async function loadPage(page) {
    const html = await fetch(`src/views/${page}.html`).then((res) =>
      res.text()
    );
    content.innerHTML = html;

    // load script otomatis berdasarkan halaman
    const script = document.createElement("script");
    script.src = `src/script/${page}.js`;
    document.body.appendChild(script);
  }

  // event sidebar
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-page]")) {
      const page = e.target.dataset.page;
      loadPage(page);
    }
  });
});
